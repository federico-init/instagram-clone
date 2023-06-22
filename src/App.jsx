import { useState, useEffect } from "react";
import "./App.css";

// importo il mock stories
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

// import components
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  // eseguo la chiamata fetch tramite hook useEffect e setto il valore di posts ai dati estratti dalla fetch
  useEffect(() => {
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <TopBar />
      <Stories user={user} stories={stories}/>
      <Posts posts={posts}/>
    </>
  );
}

export default App;