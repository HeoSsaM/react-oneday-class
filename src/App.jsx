import { Routes, Route, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ClassesPage from './pages/ClassesPage'
import DetailPage from './pages/DetailPage'
import Footer from './components/Footer'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css'
import './css/HomePage.css'

function App() {
  return (
    <>
      <Header />

      <article className="hero">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="main-banner">
          <SwiperSlide>
            <h1>하루를 바꾸는 작은 경험</h1>
            <p>
              지금, 나만의 취미를 시작해보세요.
              다양한 원데이 클래스를 만나보세요.
            </p>
            <Link to="/classes" className="btn-view">
              클래스 보러가기
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <h1>하루를 바꾸는 작은 경험</h1>
            <p>
              지금, 나만의 취미를 시작해보세요.
              다양한 원데이 클래스를 만나보세요.
            </p>
            <Link to="/classes" className="btn-view">
              클래스 보러가기
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <h1>하루를 바꾸는 작은 경험</h1>
            <p>
              지금, 나만의 취미를 시작해보세요.
              다양한 원데이 클래스를 만나보세요.
            </p>
            <Link to="/classes" className="btn-view">
              클래스 보러가기
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <h1>하루를 바꾸는 작은 경험</h1>
            <p>
              지금, 나만의 취미를 시작해보세요.
              다양한 원데이 클래스를 만나보세요.
            </p>
            <Link to="/classes" className="btn-view">
              클래스 보러가기
            </Link>
          </SwiperSlide>
        </Swiper>
      </article>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/classes/:id" element={<DetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App