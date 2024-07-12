import { TreeNode } from './types';

const fileExtensionRegExp =
    /\.(docx?|odt|pdf|xlsx?|pptx?|jpg|png|link|url|rewrite|mp4)$/i;

const addToTree = (
    parts: string[],
    index: number,
    node: TreeNode,
    level: number,
    url?: string,
    type?: string,
): void => {
    if (index === parts.length - 1) {
        const name = parts[index];
        const isFile = fileExtensionRegExp.test(name);
        const targetArray = isFile
            ? (node.files ??= [])
            : (node.folders ??= []);

        targetArray.push({
            name,
            file: isFile,
            level,
            files: [],
            folders: [],
            url: url,
            type: type,
        });
        return;
    }

    const name = parts[index];
    let childNode = (node.folders ??= []).find((child) => child.name === name);
    if (!childNode) {
        childNode = { name, files: [], folders: [], level };
        (node.folders ??= []).push(childNode);
    }
    addToTree(parts, index + 1, childNode, level + 1, url, type);
};

export const buildTree = (data: unknown): TreeNode[] => {
    const tree: TreeNode[] = [];
    console.log(data)
    Array.isArray(data) &&
        data.forEach((item) => {
            // const parts = item.currentUrlPlain.split('\\');
           
            // const type = item.input.split('.').pop()?.toLowerCase();
            const parts = item.currentUrlPlain.split('\\');
            const name = parts.shift()!;
            let node = tree.find((node) => node.name === name);
            if (!node) {
                node = { name, files: [], folders: [], level: 1 };
                tree.push(node);
            }
            addToTree(parts, 0, node, 2);
        });

    return tree;
};
