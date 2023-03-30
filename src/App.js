import { Route, Routes } from 'react-router-dom';
import AllPosts from './AllPosts';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<AllPosts />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit/:id' element={<PostEdit />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
