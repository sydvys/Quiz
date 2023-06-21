import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';
import Router from './Components/Router/Router';


function App() {

  return (
    <>
      <Scrollbars style={{ width: "100vw", height: "100vh" }}>
        <Router />
      </Scrollbars>
    </>
  );
}

export default App;
