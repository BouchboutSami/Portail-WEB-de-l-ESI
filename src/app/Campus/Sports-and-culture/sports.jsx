import React from 'react'
import PhotoText from './PhotoText';
import YouMightFindUseful from '@/components/YouMightFindUseful';

const sports = () => {
    const photos1 = [
        {
          image: "/assets/foot.png",
          title: "ESI Cup : Football tournament",
        },
        {
          image: "/assets/basket.png",
          title: "Basketball at ESI",
        },
        {
          image: "/assets/gym.png",
          title: "ESI Gym",
        },
      ];
      const photos2 = [
        {
          image: "/assets/singit.png",
          title: "Sing it ! ESI concert",
        },
        {
          image: "/assets/yennayer.png",
          title: "Yennayer festivities",
        },
        {
          image: "/assets/ramadan.png",
          title: "Ramadan in ESI : Iftar with all the community",
        },
        {
            image: "/assets/tree.png",
            title: "A tree for every student",
          },
      ];
      const links = {
        "CACE Club": "/",
        "Prayer rooms": "/",
        "SEC Club": "/",
      };
  return (
    <div className="w-full flex flex-col items-center py-10">
    <p className="text-center px-[10%] font-medium text-2xl mb-10">
    ESI places great importance on cultural diversity and sporting activities, encouraging inclusion and a good atmosphere on campus.
    </p>
    <div className='bg-[#F5F5F5] flex flex-col items-center w-full p-10'>
    <h2 className="font-bold text-3xl">Sports</h2>
     <PhotoText photos = {photos1}/>
    </div>
    <div className="w-full flex flex-col py-10 items-center p-10">
      <h2 className="font-bold text-3xl">Culture</h2>
      <PhotoText photos={photos2}/>
    </div>
    <YouMightFindUseful links={links} />
    </div>
  )
}

export default sports;