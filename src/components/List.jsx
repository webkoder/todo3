import { ListItem } from "./ListItem"

export const List = ({items}) => {
    return (
        <div id="list">
            { items.map( item => ( <ListItem item={item} /> ) ) }
        </div>
    )
}