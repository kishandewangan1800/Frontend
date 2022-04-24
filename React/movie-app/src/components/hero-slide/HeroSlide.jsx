import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import Button, { OutlineButton } from '../button/Button'

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
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
                // autoplay={{ delay: 2500 }}
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


        </div>
    )
}

const HeroSideItem = (props) => {
    let history = useHistory;

    const item = props.item;
    const background = apiConfig.originatImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    return (
        <div className={`hero-slide-item ${props.className}`} style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-slide-item-content container">
                <div className="hero-slide-item-content-info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie' + item.id)} className='class'>
                            Watch Now
                        </Button>
                        <OutlineButton onClick={()=>console.log('trailer')} className='class'>
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

export default HeroSlide;