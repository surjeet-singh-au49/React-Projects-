import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillYoutube,AiFillInstagram, AiFillAmazonCircle} from 'react-icons/ai'

const Home = () => {
  return (

    <>
    <div className= 'home' id='home'>
        <main>
            <h1>Fission Tech</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />

        <div>
            <p>We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problems solving ability in children.</p>
        </div>
    </div>


    <div className='home3' id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nulla vitae justo convallis congue. Nulla vel ante tortor. Nulla aliquet id orci gravida sodales. In fringilla velit eu leo scelerisque mattis. Morbi maximus vestibulum mauris, vitae egestas ante pellentesque ac. Ut viverra consequat rutrum. Praesent turpis massa, vehicula id risus ut, luctus blandit dolor. Vivamus tristique odio eget faucibus gravida. Donec id vehicula nulla, at mollis lectus. Sed et placerat nisl. Praesent sodales, nibh eget finibus venenatis, quam dolor ultricies magna, vel bibendum ex arcu ut quam. Sed varius nibh diam, a cursus lorem consequat ac. In hac habitasse platea dictumst. Phasellus id tellus semper nisi dignissim facilisis. Donec tincidunt lacinia mattis.</p>
        </div>
    </div>


    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>

            <article>

                <div style={{
                    animationDelay: '0.3s'
                }}>

                    <AiFillGoogleCircle />
                    <p>Google</p>

                </div>

                <div style={{
                    animationDelay: '0.5s'
                }}>

                    <AiFillAmazonCircle />
                    <p>Amazon</p>

                </div>

                <div style={{
                    animationDelay: '0.7s'
                }}>

                    <AiFillYoutube />
                    <p>YouTube</p>

                </div>

                <div style={{
                    animationDelay: '1s'
                }}>

                    <AiFillInstagram />
                    <p>Instagram</p>

                </div>
            </article>
        </div>
    </div>

    </>
  )
}

export default Home;