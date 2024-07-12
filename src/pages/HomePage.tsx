import { FolderTree } from "../features/FolderTree/ui/FolderTree";
import  data  from '../shared/data/fileData.json'

export default function HomePage () {
    return (
        <FolderTree data={data}/>
    )
}