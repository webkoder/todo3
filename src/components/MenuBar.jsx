import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCirclePlus, faHome } from '@fortawesome/free-solid-svg-icons';

export const MenuBar = ({onClickAdd}) => {
    return (
        <div id="menu">
            <div id="menucontent">
                <div onClick={onClickAdd}>
                    <FontAwesomeIcon icon={faCirclePlus} size={'2x'} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faHome} size={'2x'} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleInfo} size={'2x'} />
                </div>
            </div>
        </div>
    )
}