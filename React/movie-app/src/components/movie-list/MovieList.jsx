import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'

// import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import './MovieList.scss'

// import 'swiper/css/autoplay';

// import { Link } from 'react-router-dom';
// import Button from '../button/Button';
import MovieCard from '../movie-card/MovieCard';

import tmbdApi,{category} from '../../api/tmdbApi';
// import apiConfig from '../../api/apiConfig';

const MovieList = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async ()=>{
            let response = null;
            const params = {}

            if(props.type !== 'similar'){
                switch(props.category){
                    case category.movie:
                        response = await tmbdApi.getMovieList(props.type, {params});
                        break;
                    default:
                        response = await tmbdApi.getTvList(props.type, {params});
                }
            }else{
                response = await tmbdApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
      
    }, [])
    

  return (
    <div className='movie-list'>
        {/* <Swiper
        // grabCursor={true}
        // spaceBetween={10}
        // slidesPerView={'auto'}
        grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
        >
           {
                items.map((item, i)=>(
                    <SwiperSlide key={i}>
                        <MovieCard item={item} category={props.category}/>
                    </SwiperSlide>
                ))
            }

        </Swiper> */}

    </div>
  )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default MovieList