import React, { ReactNode } from 'react';
import styles from './styles/FileComponent.module.css';
import pdfIcon from '../assets/pdfIcon.png';
import docxIcon from '../assets/docxIcon.png';
import defaultIcon from '../assets/fileIcon.png';
import path from '../assets/link3.png';
import link from '../assets/link2.png';
import video from '../assets/video.png';
import rewrite from '../assets/link1.png';

type FileComponentProps = {
    name: string;
    level?: number;
};

export const FileComponent: React.FC<FileComponentProps> = ({
    name,
    level = 0,
}) => {

    const marginLeft = `${level * 10}px`;

    const extensionIcons: { [key: string]: string } = {
        pdf: pdfIcon,
        docx: docxIcon,
        odt: docxIcon,
        url: path,
        link: link,
        rewrite: rewrite,
        mp4: video,
        // Add other extensions and their corresponding icons
    };

    const fileExtension = name.split('.').pop()?.toLowerCase() || '';
    const icon = extensionIcons[fileExtension] || defaultIcon;
   
    return (
        <div className={styles.fileComponent} style={{ marginLeft }}>
            <img src={icon} className={styles.fileIcon} alt="Иконка файла" />
            <span className={styles.fileName}>
                    {name}
            </span>
        </div>
    );
};
