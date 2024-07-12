import React from 'react';
import { FolderTreeComponent } from './FolderTreeComponent';
import { useFolderTree } from '../model/useFolderTree';

/**
 * ${1:Description placeholder}
 *
 * @param {{ data: any; }} param0
 * @param {*} param0.data
 * @returns {*\}
 */

type Props = {
    data: { id: number; currentUrlPlain: string; currentUrl: string; name: string; file: boolean; }[]
}
export const FolderTree: React.FC<Props> = ({ data }) => {
    const { treeData } = useFolderTree(data);

    return (
        <div className="overflow-y-auto max-h-[500px] max-w-[700px]">
            <FolderTreeComponent treeData={treeData} />
        </div>
    );
};
