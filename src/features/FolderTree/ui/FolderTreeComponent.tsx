import React from 'react';
import { FolderOrFile } from '../../../entities/folder/ui/FolderOrFile';
import { TreeNode } from '../../../entities/folder/model/types';
import styles from '../../../entities/folder/ui/styles/FolderOrFile.module.css';
/**
 * ${1:Description placeholder}
 *
 * @typedef {FolderTreeComponentProps}
 */
type FolderTreeComponentProps = {
    treeData: TreeNode[];
};

/**
 * ${1:Description placeholder}
 *
 * @param {{ treeData: any; }} param0
 * @param {*} param0.treeData
 * @returns {*\}
 */
export const FolderTreeComponent: React.FC<FolderTreeComponentProps> = ({
    treeData,
}) => {
    return (
        <div className={styles.tree}>
            <ul>
                {treeData.map((node) => (
                    <FolderOrFile key={node.name} node={node} />
                ))}
            </ul>
        </div>
    );
};
