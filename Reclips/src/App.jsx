import './App.css'

function App() {
  function Redirect(url) {
    window.location.href = url;
  }

  return (
    <div>
      <h1>I am Reclips</h1>
      <div className="section">
        <div className="sheader"><h2>Websites/socials</h2></div>
        <button className="sbutton" onClick={() => Redirect('https://www.youtube.com/@reclips0')}>YouTube <small>@reclips0</small></button>
        <button className="sbutton" onClick={() => Redirect('https://www.twitch.tv/Reclips0')}>Twitch <small>@reclips0</small></button>
        <button className="sbutton" onClick={() => Redirect('https://www.github.com/Reclips0')}>Github <small>Reclips0</small></button>
        <button className="sbutton" onClick={() => Redirect('https://reclips0.github.io/legendary-disco/')}>The Worst Website Ever <small>/legendary-disco</small></button>
      </div>
      <div className="section">
        <div className="sheader"><h2>Repositories</h2></div>
        <button className="sbutton" onClick={() => Redirect('https://github.com/Reclips0/Air-Gambling')}>Air Gambling</button>
        <button className="sbutton" onClick={() => Redirect('https://github.com/Reclips0/Go-to-four')}>Go to Four</button>
        <button className="sbutton" onClick={() => Redirect('https://github.com/Reclips0/Yt-ad-skipper')}>YouTube Ad Skipper <small>beta</small></button>
        <button className="sbutton" onClick={() => Redirect('https://github.com/Reclips0/Air-Gambling-2')}>Air Gambling 2 <small>early alpha</small></button>
      </div>
      <div className="vsection">
        <div className="sheader"><h2>Recent videos</h2></div>
        <div className="vscontent">
          <div className="video"><button className="video-title" onClick={() => Redirect('https://youtu.be/wq8wYLbliEk?si=BtYxHenqhAjqxuhi')}>Minecraft VR speedrunner vs 2 hunters REMATCH<img className="play" src="/src/assets/play-button.png"></img></button></div>
          <div className="videoo"><button className="video-title" onClick={() => Redirect('https://youtu.be/JtKPPOJ6KOs?si=YGyFxLDaEfq9vm5r')}>Minecraft but the controls are SPLIT<img className="play" src="/src/assets/play-button.png"></img></button></div>
        </div>
      </div>
    </div>
  )
}

export default App
