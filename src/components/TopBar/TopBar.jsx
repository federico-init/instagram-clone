import "./TopBar.css";

// import icons
import {CameraIcon, InstagramLogo, IGTVIcon, MessangerIcon} from "../../assets/icons";

const TopBar = () => {
    return (
        <div className="TopBar">
            <div>
                <CameraIcon />
            </div>
            <div className="TopBar__Logo">
                <InstagramLogo  />
            </div>
            <div className="TopBar__Actions">
                <IGTVIcon />
                <MessangerIcon />
            </div>
        </div>
    );
};

export default TopBar;