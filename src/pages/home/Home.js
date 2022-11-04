import '../../style.css';
import Cog from '../../resources/images/cog_color.png'
// import TitleBar from './components/TitleBar.js'

function Home() {
  return (
    <div className="home--container">
      <div className="direction-box">
          <img 
            className="maint-icon"
            src={Cog} 
            alt="cog_icon"
          />
        <p>I'm still working on this, try again later.</p>
      </div>
    </div>
  );
}

export default Home;