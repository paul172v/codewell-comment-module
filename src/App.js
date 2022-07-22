import classes from "./App.module.css";

import Card from "./components/card/Card";
import Post from "./components/post/Post";
import Reply1 from "./components/post/Reply1";
import Reply2 from "./components/post/Reply2";

function App() {
  return (
    <div className={classes["app-background"]}>
      <Card>
        <Post
          image="/Assets/User-Avatar.png"
          username="adamsdavid"
          lastActive="20 hours ago"
          post="I genuinely think that Codewell's community is AMAZING. It's just starting out but the templates on there are amazing. 👀"
          likes="2"
        ></Post>
        <Reply1
          image="/Assets/User-Avatar-1.png"
          username="saramay"
          lastActive="16 hours ago"
          post="I agree. I’ve been coding really well (pun intended) ever since I started practicing on their templates hehe."
          likes="5"
        ></Reply1>
        <Reply2
          image="/Assets/User-Avatar-2.png"
          username="jessica21"
          lastActive="14 hours ago"
          post="Okay, this comment wins."
          likes="5"
        ></Reply2>
        <Post
          image="/Assets/User-Avatar-3.png"
          username="andrew231"
          lastActive="20 hours ago"
          post="Thanks for making this, super helpful"
          likes="2"
        ></Post>
      </Card>
    </div>
  );
}

export default App;
