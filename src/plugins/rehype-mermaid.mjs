import { visit } from 'unist-util-visit';

/**
 * Rehype plugin: transforms <pre><code class="language-mermaid">…</code></pre>
 * into <div class="mermaid">…</div> so mermaid.js can render it client-side.
 *
 * Runs before Astro's shiki highlighter, so the code block is still in its
 * raw remark-to-hast form. We use .find() instead of [0] because there may
 * be a leading whitespace text node among the pre's children.
 */
export function rehypeMermaidTransform() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre') return;

      const codeEl = node.children?.find(
        (c) => c.type === 'element' && c.tagName === 'code'
      );

      if (!codeEl?.properties?.className?.includes('language-mermaid')) return;

      const textNode = codeEl.children?.find((c) => c.type === 'text');
      const code = textNode?.value ?? '';

      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['mermaid'] },
        children: [{ type: 'text', value: code }],
      };
    });
  };
}
