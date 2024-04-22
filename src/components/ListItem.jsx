import { getImageUrl } from "../utils";


function ListItem({listText}){
    const iconTick = getImageUrl('icon-list.svg');
    return(
        <div className="flex align-top mb-2 grow shrink">
            <img src={iconTick} alt="tick icon" className="w-4 h-4 mt-1"/>
            <p className="ml-3">{listText}</p>
        </div>
    );
}


export default ListItem;