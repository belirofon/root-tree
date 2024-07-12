import { useState } from 'react';
import { TreeNode } from '../../../shared/utils/types';
import { buildTree } from '../../../shared/utils/buildTree';

/**
 * ${1:Description placeholder}
 *
 * @param {unknown} data
 * @returns {{ treeData: any; setTreeData: any; }\}
 */
export const useFolderTree = (data: unknown): { treeData: any; setTreeData: any; } => {
    const [treeData, setTreeData] = useState<TreeNode[]>(buildTree(data));

    return {
        treeData,
        setTreeData,
    };
};
