import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { ArticlesPage } from './pages/articles/ArticlesPage';
import { History } from "./pages/history/history";
import { Management } from "./pages/management/management";
import { Structure } from "./pages/management/structure/structure";
import { Decision } from "./pages/management/decision/decision";
import { Documents } from "./pages/management/documents/documents";
import { Government } from "./pages/management/government/government";
import { Participation } from "./pages/participation/participation";
import { Periodicals } from "./pages/periodicals/periodicals";
import { Projects } from "./pages/projects/projects";
import { PostsPage } from "./pages/posts/PostsPage";
import { Gallery } from "./pages/gallery/gallery";
import { ArticlePage } from './pages/articles/ArticlePage';
import { PostPage } from "./pages/posts/PostPage";
import { CreateNews } from './components/hidden-components/CreateNews';
import { CreatePost } from './components/hidden-components/CreatePost';
import { Contacts } from "./components/contacts/contacts";
import { Footer } from "./components/footer/footer";
import { ErrorPage } from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Header />
          <Navbar />
          <div className='main'>
            <Routes>
              <Route path="/" element={<ArticlesPage />} />
              <Route path="/history" element={<History />} />
              <Route path="/management" element={<Management />} />
                  <Route path="/structure" element={<Structure />} />
                  <Route path="/decision" element={<Decision />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/government" element={<Government />} />
              <Route path="/participation" element={<Participation />} />
              <Route path="/periodicals" element={<Periodicals />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/postspage" element={<PostsPage/>} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/articlepage/:id" element={<ArticlePage />} />
              <Route path="/postpage/:id" element={<PostPage />} />
              <Route path="/createnews" element={<CreateNews />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <Contacts />
          <Footer />
        </div>
      </Router>     
    </div>
  );
}

export default App;