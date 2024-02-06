
import './App.css';
import { ToastContainer } from 'react-toastify';


import Routes from './Routes/Routes';


function App() {
  return (
    <>
          <Routes/>
          <ToastContainer style={{zIndex:'999999999999'}} />   
    </>
  );
}

export default App;
