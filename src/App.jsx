import CardSwap, { Card } from '../ReactBits/CardSwap/CardSwap'
import '../ReactBits/CardSwap/CardSwap.css'
import './App.css'
function App() {


  return (
    <>
      <div className='section-container'>
      {/* left side */}

        <div className='section-title-container'>
          <div className='section-title-gradient-bar'></div>
          <h1 className='section-title'>RESIDENT_LINK</h1>
          <p className='section-description'>Join us for a new kind of neighborhood</p>
        </div>
{/* left side */}
        <div style={{ position: 'relative', }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
          >
            <Card>
              <div className='card-container'>
                <div className='card-header'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" focusable="false" aria-hidden="true" class="chakra-icon css-l7obvg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>
                  <p className='card-header-text'>Smooth</p>
                </div>
                <div className='card-body'>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='card-video' src="https://cdn.dribbble.com/userupload/7053861/file/original-7956be57144058795db6bb24875bdab9.mp4"></video>
                </div>
              </div>
            </Card>
            <Card>
              <div className='card-container'>
                <div className='card-header'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" focusable="false" aria-hidden="true" class="chakra-icon css-l7obvg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path></svg>
                  <p className='card-header-text'>Reliable</p>
                </div>
                <div className='card-body'>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='card-video' src="https://cdn.dribbble.com/userupload/7078020/file/original-b071e9063d9e3ba86a85a61b9d5a7c42.mp4"></video>
                </div>
              </div>
            </Card>
            <Card>
              <div className='card-container'>
                <div className='card-header'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" focusable="false" aria-hidden="true" class="chakra-icon css-l7obvg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg>
                  <p className='card-header-text'>Secure</p>
                </div>
                <div className='card-body'>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='card-video' src="https://cdn.dribbble.com/userupload/7098541/file/original-0b063b12ca835421580e6034368ad95a.mp4"></video>
                </div>
              </div>
            </Card>
          </CardSwap>

          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
