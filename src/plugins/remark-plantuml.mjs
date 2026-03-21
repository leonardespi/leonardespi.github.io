import { visit, SKIP } from 'unist-util-visit';
import plantumlEncoder from 'plantuml-encoder';

/**
 * Remark plugin: converts ```plantuml code blocks to <img> tags
 * pointing to the public PlantUML render server.
 */
export function remarkPlantuml() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'plantuml' || index === null || !parent) return;

      const encoded = plantumlEncoder.encode(node.value);
      const url = `https://www.plantuml.com/plantuml/svg/${encoded}`;

      parent.children.splice(index, 1, {
        type: 'html',
        value: `<figure class="diagram plantuml-diagram"><img src="${url}" alt="PlantUML diagram" loading="lazy" /></figure>`,
      });

      return [SKIP, index];
    });
  };
}
