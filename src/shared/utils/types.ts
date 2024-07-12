export type TreeNode = {
    name: string;
    files?: TreeNode[];
    folders?: TreeNode[];
    file?: boolean;
    level: number;
    url?: string;
    type?: string;
} & ({ folders: TreeNode[]; open?: boolean } | { files: TreeNode[] });
