import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { History } from "./pages/history/history";
import { Projects } from "./pages/projects/projects";
import { Journals } from "./pages/journals/journals";
import { About } from "./pages/about/about";
import { Contacts } from "./pages/contacts/contacts";
import { Footer } from "./components/footer/footer";
import { CreateNews } from './pages/news/createnews';
import { IndexPage } from './pages/news/IndexPage';
import { PostPage } from './pages/news/PostPage';

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
              <Route path="/projects" element={<Projects />} />
              <Route path="/journals" element={<Journals />} />
              <Route path="/about" element={<About />} />
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