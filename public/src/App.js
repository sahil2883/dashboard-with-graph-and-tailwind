import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className='flex flex-row p-5'>
      <div className="basis-1/6">
        <Sidebar />
      </div>
      <Header />
    </div>
  );
}

export default App;
