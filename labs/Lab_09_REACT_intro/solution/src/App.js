import React, { useState, useContext, useMemo } from 'react';
import './App.css';

const TagsContext = React.createContext();

const Post = ({ id, username, text, liked, tags, onLike, onDelete }) => {
  const { selectedTags, removeSelectedTag, handleSelectTag } = useContext(
    TagsContext
  );

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [reposts, setReposts] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const incrementDislikes = () => {
    setDislikes(dislikes + 1);
  };

  const incrementReposts = () => {
    setReposts(reposts + 1);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={`post ${liked ? 'liked' : ''}`}>
      <button className="DeleteButton" onClick={handleDelete}>
  🚫
  <span className="TooltipText">Не надо...😭</span>
</button>
      <h3 className="PostUsername">{username}</h3>
      <p className="PostText">{text}</p>
      <div className="PostTags">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`Tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
            onClick={() => handleSelectTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="PostButton" onClick={incrementLikes}>
        😃: {likes}
      </button>
      <button className="PostButton" onClick={incrementDislikes}>
        🤮: {dislikes}
      </button>
      <button className="PostButton" onClick={incrementReposts}>
        📤: {reposts}
      </button>
    </div>
  );
};

const App = () => {
  const [posts, setPosts] = useState([ ]);  

  const [newPostText, setNewPostText] = useState('');
  const [newPostUsername, setNewPostUsername] = useState('');
  const [newPostTag, setNewPostTag] = useState('');

  const [selectedTags, setSelectedTags] = useState([]);

  const handleLike = (postId, liked) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, liked };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleAddPost = () => {
    if (newPostText && newPostUsername && newPostTag) {
      const newPost = {
        id: Date.now(),
        username: newPostUsername,
        text: newPostText,
        liked: false,
        tags: newPostTag.split(',').map((tag) => tag.trim()),
      };

      setPosts([newPost, ...posts]);
      setNewPostUsername('');
      setNewPostText('');
      setNewPostTag('');
    }
  };

  const handleSelectTag = (tag) => {
    if (selectedTags.includes(tag)) {
      removeSelectedTag(tag);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeSelectedTag = (tag) => {
    const updatedSelectedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
    setSelectedTags(updatedSelectedTags);
  };

  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return posts;
    }
    return posts.filter((post) => {
      for (let i = 0; i < selectedTags.length; i++) {
        if (!post.tags.includes(selectedTags[i])) {
          return false;
        }
      }
      return true;
    });
  }, [posts, selectedTags]);

  return (
    <div>
      <div className="addPost">
	<h2>Создать пост: 👇</h2>
        <input
          type="text"
          size="40"
          placeholder="Название поста...📝"
          value={newPostUsername}
          onChange={(event) => setNewPostUsername(event.target.value)}
        />
        <br />
        <textarea
          rows="10"
          cols="40"
          placeholder="Текст...📝"
          value={newPostText}
          onChange={(event) => setNewPostText(event.target.value)}
        />
        <br />
        <input
          type="text"
          size="40"
          placeholder="#📝"
          value={newPostTag}
          onChange={(event) => setNewPostTag(event.target.value)}
        />
        <br />
        <button style={{cursor: 'pointer'}} onMouseOver={(e) => 	e.currentTarget.style.backgroundColor = 'green'} onMouseOut={(e) => 	e.currentTarget.style.backgroundColor = ''} onClick={handleAddPost}>	Создать</button>
        <div className="SelectedTags">
          <h2>Посты: 👀</h2>
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="SelectedTag"
              onClick={() => removeSelectedTag(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div> 
      <TagsContext.Provider
        value={{
          selectedTags,
          handleSelectTag,
          removeSelectedTag,
        }}
      >
        {filteredPosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            text={post.text}
            liked={post.liked}
            tags={post.tags}
            onLike={handleLike}
            onDelete={handleDelete}
          />
        ))}
      </TagsContext.Provider>
    </div>
  );
};

export default App;
