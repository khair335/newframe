import CardSwap, { Card } from '../ReactBits/CardSwap/CardSwap'
import '../ReactBits/CardSwap/CardSwap.css'
import './App.css'
import { MdCode, MdVisibility, MdTouchApp, MdTrendingUp } from 'react-icons/md'

function App() {
  // https://static1.squarespace.com/static/683b03ee8b09385960cb07fd/t/686a81bb03589e0bf565642c/1751810556421/slider1.png
  // https://static1.squarespace.com/static/683b03ee8b09385960cb07fd/t/686a81bbae533714b93549d1/1751810552753/slider2.png
  // https://static1.squarespace.com/static/683b03ee8b09385960cb07fd/t/686a81bb0ed18d4153903760/1751810556846/slider3.png
  // https://static1.squarespace.com/static/683b03ee8b09385960cb07fd/t/686a81bb2e263036646ef348/1751810548865/slider4.png

  return (
    <>
      <div className='section-container'>
      {/* left side */}

        <div className='section-title-container'>

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
                  <MdCode />
                  <p className='card-header-text'>Participatory</p>
                </div>
                <div className='card-body'>
                  <img

                    className='card-video' src="https://static1.squarespace.com/static/683b03ee8b09385960cb07fd/t/686a81bb03589e0bf565642c/1751810556421/slider1.png"/>
                </div>
              </div>
            </Card>
            <Card>
              <div className='card-container'>
                <div className='card-header'>
                  <MdVisibility />
                  <p className='card-header-text'>Transparent</p>
                </div>
                <div className='card-body'>
                  <img

                    className='card-video' src="https://static1.squarespace.com/static/683b03ee8b09385960cb07fd/t/686a81bbae533714b93549d1/1751810552753/slider2.png"/>
                </div>
              </div>
            </Card>
            <Card>
              <div className='card-container'>
                <div className='card-header'>
                  <MdTouchApp />
                  <p className='card-header-text'>Interactive</p>
                </div>
                <div className='card-body'>
                  <img
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='card-video' src="https://static1.squarespace.com/static/683b03ee8b09385960cb07fd/t/686a81bb0ed18d4153903760/1751810556846/slider3.png"/>

                </div>
              </div>
            </Card>
            <Card>
              <div className='card-container'>
                <div className='card-header'>
                  <MdTrendingUp />
                  <p className='card-header-text'>Scalable</p>
                </div>
                <div className='card-body'>
                  <img

                    className='card-video' src="https://static1.squarespace.com/static/683b03ee8b09385960cb07fd/t/686a81bb2e263036646ef348/1751810548865/slider4.png"/>
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
