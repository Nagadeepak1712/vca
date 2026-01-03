import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import WalkingMascot from './components/WalkingMascot';

function App() {
    return (
        <Router>
            <WalkingMascot />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="courses" element={<CoursesPage />} />
                    <Route path="courses/:id" element={<CourseDetailsPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
