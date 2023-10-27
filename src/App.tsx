import Welcome from './components/welcome/Welcome';
import Technologies from './components/technologies/Technologies';
import Proyects from './components/projects/Projects';
import Achievements from './components/achievements/Achievements';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="bg-dark">
      <div className='row'>
        <div className='col-2' id='sticky-sidebar'>
          <div className='sticky-top'>
            <Navbar></Navbar>
          </div>
        </div>
        <div className='p-5 text-info col'>
          <Welcome></Welcome>
          <hr />
          <Technologies></Technologies>
          <hr />
          <Proyects></Proyects>
          <hr />
          <Achievements></Achievements>
        </div>
      </div>
    </div>
  );
}

export default App;
