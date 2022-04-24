import React, { useEffect, useState, useRef } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import Button, { OutlineButton } from '../button/Button'
import Modal, {ModalContent} from '../modal/Modal'

import { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import tmbdApi from '../../api/tmdbApi';

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import './HeroSlide.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const HeroSlide = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmbdApi.getMovieList(movieType.popular, { params });
                setMovieItems(response.results.slice(0, 8));
                //  console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
    }, [])

    return (
        <div className='hero-slide'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3500 }}
                navigation={true}
                pagination={{ clickable: true, }}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                className="mySwiper"
            >
                {
                    movieItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <HeroSideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            {
                movieItems.map((item,i)=><TrailerModal key={i} item={item}/>)
            }
            


        </div>
    )
}

const HeroSideItem = (props) => {
    let history = useHistory;

    const item = props.item;
    const background = apiConfig.originatImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal-${item.id}`);

        const videos = await tmbdApi.getVideos(category.movie, item.id);

        if(videos.results.length>0){
            const videoScr = 'https://www.youtube.com/embed/'+videos.results[0].key;
            modal.querySelector('.modal-content > iframe').setAttribute('src', videoScr);
        }else{
            modal.querySelector('.modal-content').innerHTML = 'No Trailer';
        }

        modal.classList.toggle('active');
    }

    

    return (
        <div className={`hero-slide-item ${props.className}`} style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-slide-item-content container">
                <div className="hero-slide-item-content-info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie' + item.id)}>
                            Watch Now
                        </Button>
                        <OutlineButton onClick={setModalActive} >
                            Watch Trailer
                        </OutlineButton>
                    
                    </div>
                </div>
                <div className="hero-slide-item-content-poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>

            </div>
        </div>
    )
}

const TrailerModal = props =>{
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return(
        <Modal active={false} id={ `modal-${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width='100%' height='500px' title='trailer'></iframe>

            </ModalContent>
        </Modal>
    )

}

export default HeroSlide;