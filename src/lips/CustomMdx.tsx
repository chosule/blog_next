import { MDXRemote ,MDXRemoteProps} from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import {visit} from 'unist-util-visit'
import {h} from 'hastscript'
import remarkDirective from 'remark-directive'
import {Element, Node} from "hast"
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {read} from 'to-vfile'
import {unified} from 'unified'

function myRemarkPlugin() {
    return function (tree) {
      visit(tree, function (node) {
        if (
          node.type === 'containerDirective' ||
          node.type === 'leafDirective' ||
          node.type === 'textDirective'
        ) {
          const data = node.data || (node.data = {})
          const hast = h(node.name, node.attributes || {})
  
          data.hName = hast.tagName
          data.hProperties = hast.properties
        }
      })
    }
  }
const components = {
    h1: (props) => (
        <h1 {...props} className="large-text">
            {props.children}
        </h1>
    ),
}
const options = {
    mdxOptions: {
        remarkPlugins: [remarkDirective,myRemarkPlugin],
        rehypePlugins: [
            rehypeSlug,
            rehypeHighlight,
            [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ["anchor"],
                  },
                },
            ],
        ],
    },
}

export default function CustomMdx(props:MDXRemoteProps) {
    return(
        <MDXRemote 
            {...props}
            components={{...components, ...(props.components || {})}}
            options={options}
        />
    )
}