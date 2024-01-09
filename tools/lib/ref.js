/**
 * @typedef {import('mdast').Root} Root
 */

import {CONTINUE, EXIT, SKIP, visit} from 'unist-util-visit'

/**
 * Change links and images to references with footnote.
 *
 * @returns
 *   Transform.
 */
export default function remarkReference() {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    let id = 0

    const references = [];

    // Transform normal links and images into references and definitions, replaces
    // the current node, and adds a definition if needed.
    visit(tree, function (node, index, parent) {
      if (
        parent &&
        typeof index === 'number' &&
        (node.type === 'link')
      ) {
        const url = node.url
        let title = node.title
        if (!title || title == '') {
          title = node.children ? node.children[0].value : ''
        }

        if (url.startsWith('#')) {
          parent.children[index] = {type: "emphasis", children: [{type: 'text', value: title}]}
          return [SKIP, index] 
        } else if (url.startsWith('https://mp.weixin.qq.com')) {  
          return [SKIP, index+1]
        } else {
          const identifier = ++id

          // if link is auto replace by super, use this code block
          parent.children[index] = {type: "emphasis", children: [
            {type: 'text', value: title},
            {type: 'html', value: `<sup>${identifier}</sup>`},
          ]}
          
          // If link is reserved in content, use this code block
          // parent.children[index] = {type: "emphasis", children: [
          //   {type: 'text', value: `${title}: ${url}`},
          // ]}
          references.push(`${title} - ${url}`)
          return [SKIP, index]
        }
      }
    })

    tree.children.push({
      type: 'heading',
      depth: 2,
      children: [{type: 'text', value: '参考资料'}],
    }, {
      type: 'blockquote',
      children: [{
        type: 'list',
        ordered: true,
        start: 1,
        spread: false,
        children: references.map((ref, index) => ({
          type: 'listItem',
          children: [{
            type: 'paragraph',
            children: [{type: 'text', value: ref}],
          }],
        })),
      }],
    })
  }
}
