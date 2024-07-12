import React from 'react';
import { TreeNode } from '../model/types';
import { Folder } from './Folder';

type FolderOrFileProps = {
    node: TreeNode;
    level?: number;
};

export const FolderOrFile: React.FC<FolderOrFileProps> = ({
    node,
    level = 0,
}) => (
    <>
        {node.folders || node.files ? (
            <Folder node={node} level={level} />
        ) : (
            <div data-js={node.name}>{node.name}</div>
        )}
    </>
);
