import { useState } from 'react'
import './App.css'
import jordan1 from './assets/jordan1.avif'
import jordan2 from './assets/jordan2.avif'
import jordan3 from './assets/jordan3.avif'
import logojordan from './assets/logojordan.png'
import LogoInsta from './assets/instagram.svg'
import LogoDiscord from './assets/discord.svg'
import LogoWhats from './assets/whatsapp.svg'
import Slider1 from './assets/slider1.jpg'
import Slider2 from './assets/slider2.jpg'
import Slider3 from './assets/slider3.jpg'
import Slider4 from './assets/slider4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          {/* Aqui fica o SLIDER */}  
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>  
              <img src={Slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Slider4} alt="" />
            </SwiperSlide>
            
          </Swiper>
        </header>
        <section className="produtos">
          
          {/* Card 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={jordan1} alt="" className="img-card"/>
              <h2> Air Jordan 3 Sail and Cement Grey</h2>
              <p className="desc">Este AJ3 dá um toque elegante ao tênis exclusivo de MJ de 88</p>
              <p className="classificacao"> <span>★ ★  ★  ★  ★   </span> (479)</p>
              <p className="preco">R$ 1299,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={jordan2} alt="" className="img-card"/>
              <h2>SB x Air Jordan 4 Navyn</h2>
              <p className="desc">Kickflips e tailslides. Dimes e dunks. Nike SB e Jordan. Algumas coisas simplesmente combinam melhor.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (479)</p>
              <p className="preco">R$ 1799,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={jordan3} alt="" className="img-card"/>
              <h2>Air Jordan 1 Low Travis Scott x Fragment</h2>
              <p className="desc">São raras as sapatilhas que seguem a "regra de três". Por vezes, ter três mentes é melhor do que ter só uma. </p>
              <p className="classificacao"> <span>★ ★ ★ ★  ★</span> (234)</p>
              <p className="preco">R$ 6599,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/watch?v=cyx_GBQMUqg" frameborder="0"> ="315" 
          </iframe>

        </section>

        <footer>

          <img src={logojordan} alt="" className="logo-footer" />

          <div className="social-footer">
            <div className="icon-social">
              <a href="https://www.instagram.com/pumabrasil/" target="_blank">
                <img src={LogoInsta} alt="" className="instagram" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://discord.com/invite/puma" target="_blank">
                <img src={LogoDiscord} alt="" className="discord" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://web.whatsapp.com/" target="_blank">
                <img src={LogoWhats} alt="" className="whatsapp" />
              </a>
            </div>
          </div>

          <p className="txt-footer">
        JORDAN SPORTS LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.
          </p>

        </footer>
      </main>
    </>
  )
}

export default App
