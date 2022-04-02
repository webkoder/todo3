import { ListItem } from "./ListItem"

export const List = ({items}) => {
    return (
        <div>
            { items.map( item => ( <ListItem item={item} /> ) ) }
        </div>
    )
}