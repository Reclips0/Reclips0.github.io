import './App.css'

function App() {
  function Redirect(url) {
    window.location.href = url;
  }

  return (
    <div>
      <h1>I am Reclips</h1>
      <h2>Websites/socials</h2>
      <button className="youtube" onClick={() => Redirect('https://www.youtube.com/@reclips0')}>YouTube <small>@reclips0</small></button>
      <button className="twitch" onClick={() => Redirect('https://www.twitch.tv/Reclips0')}>Twitch <small>@reclips0</small></button>
      <button className="github" onClick={() => Redirect('https://www.github.com/Reclips0')}>Github <small>Reclips0</small></button>
      <button className="macaroni" onClick={() => Redirect('https://reclips0.github.io/legendary-disco/')}>The Worst Website Ever <small>/legendary-disco</small></button>
      <h2>Repositories</h2>
      <button className="github" onClick={() => Redirect('https://github.com/Reclips0/Air-Gambling')}>Air Gambling</button>
      <button className="github" onClick={() => Redirect('https://github.com/Reclips0/Go-to-four')}>Go to Four</button>
      <button className="youtube" onClick={() => Redirect('https://github.com/Reclips0/Yt-ad-skipper')}>YouTube Ad Skipper <small>beta</small></button>
      <button className="youtube" onClick={() => Redirect('https://github.com/Reclips0/Air-Gambling-2')}>Air Gambling 2 <small>early alpha</small></button>
    </div>
  )
}

export default App
