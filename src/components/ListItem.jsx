import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurnDown, faBolt, faSquareCheck, faClock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Status } from '../models/Item';

export const ListItem = ({item}) => {
    const[ changing, setChanging] = useState(false);

    useEffect(() => {
      }, []);

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
                        <div onClick={_ => setChanging(false)}
                            title='To Do'
                            className={ item.status == Status.ToDo ? 'selected' : 'option' }>
                        <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div onClick={_ => setChanging(false)}
                            title='Doing'
                            className={ item.status == Status.Doing ? 'selected' : 'option' }>
                        <FontAwesomeIcon icon={faBolt} />
                        </div>
                        <div onClick={_ => setChanging(false)}
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