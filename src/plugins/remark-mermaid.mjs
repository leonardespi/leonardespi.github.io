import { visit, SKIP } from 'unist-util-visit';

/**
 * Remark plugin: converts ```mermaid code blocks to <div class="mermaid">
 * raw HTML nodes so Astro's shiki highlighter never processes them,
 * and mermaid.js can render them client-side.
 */
export function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'mermaid' || index === null || !parent) return;

      parent.children.splice(index, 1, {
        type: 'html',
        value: `<div class="mermaid">${node.value}</div>`,
      });

      return [SKIP, index];
    });
  };
}
