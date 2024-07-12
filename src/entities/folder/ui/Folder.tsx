import React, { useState } from 'react';
import styles from './styles/FolderOrFile.module.css';
import closedFolderIcon from '../assets/closedFolderIcon.png';
import openFolderIcon from '../assets/openFolderIcon.png';
import { TreeNode } from '../../../shared/utils/types';
import { FileComponent } from '../../file/ui/FileComponent';

type FolderProps = {
    node: TreeNode;
    level?: number;
} & Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'>;

export const Folder: React.FC<FolderProps> = ({
    node,
    level = 0,
    ...props
}) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <li
            className={`${styles.folder} ${props.className}`}
            style={{ ...props.style, marginLeft: `${level * 10}px` }}
        >
            <div onClick={handleToggle} className={styles.folderToggle}>
                <img
                    src={open ? openFolderIcon : closedFolderIcon}
                    className={styles.folderIcon}
                    alt={open ? 'Открытая папка' : 'Закрытая папка'}
                />
                <span className={styles.folderName}>
                    {node.name.replace(/^[^ ]+\s/, '')}
                </span>
            </div>
            {open && (
                <ul className={styles.open}>
                    {node.folders &&
                        node.folders.map((child) => (
                            <Folder
                                key={child.name}
                                className={styles.subFolder}
                                data-level={child.level}
                                node={child}
                                level={level + 1}
                            />
                        ))}
                    {node.files &&
                        node.files.map((file) => (
                            <li
                                key={file.name}
                                className={styles.fileComponent}
                                data-level={file.level}
                            >
                                <FileComponent
                                    name={file.name}
                                    level={level + 1}
                                />
                            </li>
                        ))}
                </ul>
            )}
        </li>
    );
};
