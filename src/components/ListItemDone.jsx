import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Status } from '../models/Item';

export const ListItemDone = ({item, changeStatus}) => {
    const[ changing, setChanging] = useState(false);

    useEffect(() => {
      }, []);

      
    const handleStatusChange = ( e ) => {
        changeStatus( e, token )
        setChanging(false)
    }

    return (
        <div className="doneitem">
            <div className="title">
            <s>{ item.title }</s>
            </div>
            <div className="undoBtn" onClick={ _ => changeStatus( Status.ToDo, item.token ) }>
            <FontAwesomeIcon icon={faRotateLeft} />
            </div>
        </div>
    )
}