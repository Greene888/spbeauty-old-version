import styled from "styled-components";
import Clickable from "../../../../Components/Clickable";
import MessagesIcon from "../../../../Icons/NotificationsIcon";
import NotificationsIcon from "../../../../Icons/NotificationsIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const ButtonLeftWrapper = styled.div`
    color: #D3EAFE;
    padding-right:6px;
    &:hover {
        opacity: 80%;
    }
`;
const ButtonRightWrapper = styled.div`
    color: #D3EAFE;
    padding-left:6px;
    &:hover {
        opacity: 80%;
    }
`;

function IconsRow() {
    return (
        <div className='d-inline-flex flex-row align-items-center align-self-center'>
          
          <IconOnlyButton icon={<MessagesIcon/>}/>
          <IconOnlyButton icon={<NotificationsIcon/>}/>
        </div>
    );
}

export default IconsRow;