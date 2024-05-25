import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import { Literals, Parent, Root, Heading } from 'mdast'

export interface SimpleASTSection {
    index: number
    depth: number
    text: string
    visible?: boolean
}

export function GetAllSections(markdown: string) {
    const tree = GetUnmodifiedAST(markdown)
    const sections = ParseASTSections(tree)
    return sections
}

export async function RenderHTML(markdown: string, hideSections: number[]) {
    return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(deleteSectionsPlugin, {deleteSections: hideSections})
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)
}

// Filter the given section indexes from the AST so they do not get rendered.
function deleteSectionsPlugin(options: {deleteSections: number[]}) {
    return (tree: Root) => {
        const indexes = resolveSectionIndexSpan(tree, options.deleteSections)
        deleteIndexes(tree, indexes)
    }
}

function GetUnmodifiedAST(markdown: string) {
    return unified()
        .use(remarkParse)
        .parse(markdown)
}

// Find all headings in a md ast, each representing a section (or sub-section)
function ParseASTSections(ast: Root) {
    const sections: SimpleASTSection[] = []
    let index = 0
    for (const node of ast.children) {
        if (node.type === 'heading') {
            let cnode = node.children[0] as Literals & Parent
            while (!cnode.value && cnode.children) {
                cnode = cnode.children[0] as Literals & Parent
            }
            sections.push({index, depth: node.depth, text: cnode.value})
        }

        index++;
    }

    return sections
}

// Given a list of indexes pointing to heading elements, determine what ranges of 
// MD elements that heading contains.
function resolveSectionIndexSpan(ast: Root, indexes: number[]) {
    const resolved = [...indexes]

    for (const index of indexes) {
        const section = ast.children[index] as Heading
        const sectionDepth = section.depth
        let ptrIndex = index + 1
        let node = ast.children[ptrIndex] as Heading
        while (node != null && (!node.depth || node.depth > sectionDepth)) {
            resolved.push(ptrIndex++)
            node = ast.children[ptrIndex] as Heading
        }
    }

    return resolved.sort((a, b) => b - a)
}

function deleteIndexes(ast: Root, indexes: number[]) {
    for (const index of indexes) {
        ast.children.splice(index, 1)
    }
}

export function DebugDumpSections(sections: SimpleASTSection[]) {
    let dump = '';
    for (const section of sections) {
        dump += ' '.repeat((section.depth - 1) * 2) + `[${section.index}] ${section.text}\n`
    }
    console.log(dump)
}