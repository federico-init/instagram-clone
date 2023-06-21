import "./Post.css";

const Post = ({ post }) => {
    return (
        <article className="Post">
            <div className="PostTop">
                <img src={post?.userImage} alt="" />
                {post?.userName}
                {post?.location}
            </div>
            <div className="PostContent">
                {post?.media.map((media) => (
                    <img key={media?.id} src={media?.src} />
                ))}
            </div>
        </article>
    )
}

export default Post;