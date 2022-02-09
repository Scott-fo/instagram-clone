import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase';
import Post from './Post';


const posts = [
  {
    id: '123',
    username: 'placeholder',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: "Interesting caption!"
  },
  {
    id: '123',
    username: 'placeholder',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: "Interesting caption!"
  },
]

function Posts() {

  const [posts, setPosts] = React.useState([]);
  React.useEffect(() =>
    onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), snapshot => {
      setPosts(snapshot.docs);
    }),
  [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} id={post.id}
              username={post.data().username}
              userImg={post.data().profileImg}
              img={post.data().image}
              caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
