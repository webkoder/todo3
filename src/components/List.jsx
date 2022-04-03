import { useState, useEffect } from 'react';
import { Status } from "../models/Item";
import { ListItem } from "./ListItem"
import { ListItemDone } from "./ListItemDone";


export const List = ({items, updateList}) => {
    const [ list, setList] = useState([]);
    const [ done, setDone ] = useState([]);

    const handleStatus = ( e, token ) => {
        console.log( 'alterando ', e, token );
        let _l = [... items ];
        _l.forEach( item => {
            if(item.token == token) item.status = e;
        });
        updateList( _l );
    }

    useEffect(() => {
        let _done = items
            .filter( item => item.status == Status.Done );
        let _list = items
            .filter( item => item.status != Status.Done);

        setList( _list );
        setDone( _done );
    
    }, [items])
    
    return (
        <>
        <div id="list">
            { list.map( (item, k) =>
                ( <ListItem key={ item.token } item={item} changeStatus={handleStatus} /> ) ) }

        </div>
        <div id="listDone">
            { done.map( (item, k) =>
                ( <ListItemDone key={ item.token } item={item} changeStatus={handleStatus} /> ) ) }
        </div>
        </>
    )
}