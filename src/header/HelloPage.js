export default function HelloPage({setExplore}) {
  return(
    <div className='hello-page'>
      <div className="mainContent-container">
        <div className="mainContent-container_text">
          <h1>Welcome to Movie Land! Create and explore your personal movie library!</h1>
        </div>
        <button className='mainContent_button' onClick={() => setExplore((explore) => !explore)}>Explore!</button>
      </div>
    </div>
  )
}