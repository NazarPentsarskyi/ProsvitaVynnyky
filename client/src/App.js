import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { IndexPage } from './pages/news/IndexPage';
import { History } from "./pages/history/history";
import { Management } from "./pages/management/management";
import { Structure } from "./pages/management/structure/structure";
import { Decision } from "./pages/management/decision/decision";
import { Documents } from "./pages/management/documents/documents";
import { Government } from "./pages/management/government/government";
import { Participation } from "./pages/participation/participation";
import { Periodicals } from "./pages/periodicals/periodicals";
import { Projects } from "./pages/projects/projects";
import { Posts } from "./pages/posts/posts";
import { Gallery } from "./pages/gallery/gallery";
import { PostPage } from './pages/news/PostPage';
import { CreateNews } from './pages/news/createnews';
import { Contacts } from "./pages/contacts/contacts";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Header />
          <Navbar />
          <div className='main'>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/history" element={<History />} />
              <Route path="/management" element={<Management />} />
                  <Route path="/structure" element={<Structure />} />
                  <Route path="/decision" element={<Decision />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/government" element={<Government />} />
              <Route path="/participation" element={<Participation />} />
              <Route path="/periodicals" element={<Periodicals />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/posts" element={<Posts/>} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/postpage/:id" element={<PostPage />} />
              <Route path="/createnews" element={<CreateNews />} />
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