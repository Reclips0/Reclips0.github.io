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
      </div>
      <div className="section">
        <div className="sheader"><h2>Games</h2></div>
        <button className="sbutton">Coming Soon...</button>
        <button className="sbutton" onClick={() => Redirect('https://www.cocrea.world/@JunimoZ/CatsandBread2')}>Cats and Bread 2</button>
        <button className="sbutton" onClick={() => Redirect('https://github.com/Reclips0/Air-Gambling')}>Air Gambling</button>
        <button className="sbutton" onClick={() => Redirect('https://reclips0.github.io/Bfdidle')}>BFDIdle <small>BFDI wordle</small></button>
      </div>
      <div className="vsection">
        <div className="sheader"><h2>Recent videos</h2></div>
        <div className="vscontent">
          <div className="video"><button className="video-title" onClick={() => Redirect('https://youtu.be/wq8wYLbliEk?si=BtYxHenqhAjqxuhi')}>Minecraft VR speedrunner vs 2 hunters REMATCH<img className="play" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F017%2F177%2F801%2Foriginal%2Fmulti-media-play-button-icon-on-transparent-background-free-png.png&f=1&nofb=1&ipt=76cbdf26201c274f5a7c3d63010e54a6245956a7dfe670185d91699789db5bc1"></img></button></div>
          <div className="videoo"><button className="video-title" onClick={() => Redirect('https://youtu.be/JtKPPOJ6KOs?si=YGyFxLDaEfq9vm5r')}>Minecraft but the controls are SPLIT<img className="play" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F017%2F177%2F801%2Foriginal%2Fmulti-media-play-button-icon-on-transparent-background-free-png.png&f=1&nofb=1&ipt=76cbdf26201c274f5a7c3d63010e54a6245956a7dfe670185d91699789db5bc1"></img></button></div>
        </div>
      </div>
    </div>
  )
}

export default App
