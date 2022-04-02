import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export const InputItem = ({clickAdd, show, clickClose}) => {
    const mainInput = useRef(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        mainInput.current.focus();
      }, [show]);

    const handleClick = () => {
        clickAdd( value );
        setValue('');
        mainInput.current.focus();
    }

    const bindInput = ( e ) => {
        if( e.code == 'Enter' ){
            handleClick();
        }
    }

    const handleBackdrop = ( e ) => {
        if( e.target.className == 'backdrop' ){
            clickClose()
        }
    }

    return (
    <div onClick={ handleBackdrop } className={ show ? 'backdrop' : '' }>
        <div id="inputitem" className={ show ? 'showinput' : 'hiddeninput' }>
            <button className="closebtn" onClick={ clickClose }>X</button>
            <input type="text" placeholder="Adicionar Item"
                ref={mainInput}
                value={value} onChange={e => setValue( e.target.value )}
                onKeyDown={ e => bindInput(e) } />
            <button id="addbtn" onClick={ handleClick }>
                <FontAwesomeIcon icon={faCirclePlus} /> &nbsp; Add Item</button>
        </div>
    </div>
    )
}