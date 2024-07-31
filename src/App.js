import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Alerts from './components/Alerts';
import Register from './components/Register';
import Tasks from './components/Tasks';
import Resources from './components/Resources';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/register" element={<Register />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </Router>
    );
}

export default App;
