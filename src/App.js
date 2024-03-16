import './App.css';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskManagementPage from './TaskManagementPage';
import PomodoroTimersPage from './PomodoroTimersPage';
import DistractionBlockerPage from './DistractionBlockerPage';
import AnalyticsPage from './AnalyticsPage';
import ChallengesPage from './ChallengesPage';
import GetSomeMotivationPage from './GetSomeMotivationPage';
import GetStarted from './GetStarted';
import Login from './Login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/taskmanagement" element={<TaskManagementPage />} />
          <Route path="/pomodorotimers" element={<PomodoroTimersPage />} />
          <Route path="/distractionblocker" element={<DistractionBlockerPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/motivation" element={<GetSomeMotivationPage/>} />
          <Route path='/getstarted' element={<GetStarted/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
