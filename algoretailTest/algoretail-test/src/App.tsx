import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Comments from './view/components/Comments';
import Footer from './view/components/Footer';
import Header from './view/components/Header';
import './view/style/global.scss';

function App() {
  const [posts, setPosts] = useState([...Array(20)])
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!fetching) return;
    fetch();
  }, [fetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      setFetching(true);
    }
    else return
  }

  function fetch() {
    setPosts([...posts, ...posts])
    setFetching(false);
  }

  return (
    <div className="app">
      <Header />

      <Comments posts={posts} />

      <Footer />
    </div>
  );
}

export default App;
