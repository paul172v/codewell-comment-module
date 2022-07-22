import classes from "./Reply2.module.css";

const Post = (props) => {
  return (
    <div className={`${classes.container}`}>
      <div className={classes["left-side-wrapper"]}>
        <img
          className={classes["user-photo"]}
          src={props.image}
          alt="A person"
        />
      </div>
      <div className={classes["right-side-wrapper"]}>
        <div className={classes["user-details-wrapper"]}>
          <p className={classes.username}>{props.username}</p>
          <p className={classes["last-active"]}>{props.lastActive}</p>
        </div>
        <div className={classes["user-post-wrapper"]}>
          <p className={classes.post}>{props.post}</p>
        </div>
        <div className={classes["feedback-wrapper"]}>
          <img
            className={classes["arrow-icon"]}
            src="/Assets/Up.svg"
            alt="Up vote"
          />
          <p className={classes.likes}>{props.likes}</p>
          <img
            className={classes["arrow-icon"]}
            src="/Assets/Down.svg"
            alt="Down vote"
          />
          <p className={classes.reply}>Reply</p>
          <p className={classes.report}>Report</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
