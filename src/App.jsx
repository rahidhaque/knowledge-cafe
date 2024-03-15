import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  const handleReadingTime = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto md:gap-8'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
