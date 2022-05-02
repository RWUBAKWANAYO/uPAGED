import './App.scss';
import JobDates from './components/jobs/JobDates';
import JobShifts from './components/jobs/JobShifts';
import MoreJobs from './components/jobs/MoreJobs';
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<JobShifts />
			<JobDates />
			<MoreJobs />
		</div>
	);
}

export default App;

