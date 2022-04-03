import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurnDown, faBolt, faSquareCheck, faClock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Status } from '../models/Item';

export const ListItem = ({item, changeStatus}) => {
    const[ changing, setChanging] = useState(false);

    useEffect(() => {
      }, []);

      
    const handleStatusChange = ( e ) => {
        changeStatus( e, item.token )
        setChanging(false)
    }

    return (
        <div className="todoitem">
            <div className="title">
            { item.title }
            </div>
            <div className='statuswrapper'>

                <div className={ changing ? 'status statusopen' : 'status statusclose'}>
                    <div onClick={_ => setChanging(true)}>
                        { item.status } &nbsp;
                        <FontAwesomeIcon className='statusicon' icon={faTurnDown} />
                    </div>
                </div>

                <div className='statusSelector'>
                        <div onClick={_ => handleStatusChange( Status.ToDo )}
                            title='To Do'
                            className={ item.status == Status.ToDo ? 'selected' : 'option' }>
                        <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div onClick={_ => handleStatusChange( Status.Doing )}
                            title='Doing'
                            className={ item.status == Status.Doing ? 'selected' : 'option' }>
                        <FontAwesomeIcon icon={faBolt} />
                        </div>
                        <div onClick={_ => handleStatusChange( Status.Done )}
                            title='Done'
                            className={ item.status == Status.Done ? 'selected' : 'option' }>
                        <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <div
                            title='Close'
                            onClick={_ => setChanging(false)} className='back'>
                        <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                </div>
                
            </div>

            
        </div>
    )
}