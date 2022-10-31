import logo from '../../resources/logo.svg';
import '../../style.css';
import TitleBar from './components/TitleBar.js'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <TitleBar name="Dylan"></TitleBar>
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;