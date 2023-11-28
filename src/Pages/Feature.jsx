


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';


import { EffectCards } from 'swiper/modules';
import Sectiontitle from '../shared/Sectiontitle';

function Feature() {
    return (
        <div>

<section>

  
  <Sectiontitle heading={'Features'} subheading={'We provied best quality services....'}></Sectiontitle>
<Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-[400px] w-[500px]"
      >
        <SwiperSlide>
            <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>
        </SwiperSlide>
        <SwiperSlide>
            
        <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.istockphoto.com/id/1496296272/photo/talking-about-plans-on-sports-training.jpg?s=612x612&w=0&k=20&c=YnVIdAEdeeDXZQCWtYv8xDxKTbC39rWBQAB4NIRLV_0="/>
        </SwiperSlide>
      </Swiper>
</section>
            
        </div>
    )
}

export default Feature;
