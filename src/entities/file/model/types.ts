export type TreeNode = {
    name: string;
    files?: TreeNode[];
    folders?: TreeNode[];
    file?: boolean;
    level: number;
} & ({ folders: TreeNode[]; open?: boolean } | { files: TreeNode[] });
