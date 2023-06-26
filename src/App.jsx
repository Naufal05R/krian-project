import { Footer } from './components';
import { HomePage, DocumentationPage, NewsPage, DetailNewsPage, ErrorPage } from './pages';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <div className='relative z-0 overflow-hidden bg-white'>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/documentation'
          element={<DocumentationPage />}
        />
        <Route
          path='/news'
          element={<NewsPage />}
        />
        <Route
          path='/news/:id'
          element={<DetailNewsPage />}
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
