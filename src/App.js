import './App.css';
import Logo from './images/logo.png'
import AppBody from './components/AppBody';

function App() {
  return (
    <div className="height">
      <h1 className='title'>Noah's AE Organization</h1>
      <AppBody />
      <img src={Logo} alt="" className='logo'></img>
    </div>
  );
}

export default App;
