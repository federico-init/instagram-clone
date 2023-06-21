import "./Story.css";

// import user image
import imgSrc from "../../assets/userImages/user_1.png";
import userImgSrc from "../../assets/userImages/user.png";

const Story = ({ story }) => {
    return (
        <div className="Story">
            <div className="Story__Image">
                <img src={story?.isUser ? userImgSrc : imgSrc} alt={`user ${story?.username}`} />
                {story?.isLive && <div className="Story__Live">{"LIVE"}</div>}
            </div>
            <p className="Story__Username">{story?.isUser ? "Your Story" : story.username}</p>
        </div>
    )
}

export default Story;