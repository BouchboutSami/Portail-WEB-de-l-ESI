"use client"
import Clubcard from "./Components/Clubcard";
import ContactCard from "./Components/ContactCard";
import Imgslider from "./Components/Imgslider";
import Map from "./Components/Map";
import 'leaflet/dist/leaflet.css';

const images = [
  './assets/img1.png',
  './assets/img2.png',
  './assets/img3.png',
  './assets/img4.png',
  './assets/img5.png',

]
const testContactParam = [
  {username: 'Ammar Balla',
  phone: '+2132545126', 
  email:'a_bala@esi.dz',
  adresse: 'BP Etage'
  },
  {username: 'Ammar Balla',
  phone: '+2132545126', 
  email:'a_bala@esi.dz',
  adresse: 'BP Etage'
  },
  {username: 'Ammar Balla',
  phone: '+2132545126', 
  email:'a_bala@esi.dz',
  adresse: 'BP Etage'
  },
  {username: 'Ammar Balla',
  phone: '+2132545126', 
  email:'a_bala@esi.dz',
  adresse: 'BP Etage'
  },
]


const TestMap = {
  lat: 40.7128,
  lng: -74.0060,
  name: 'New York',
};

const TestClub = [{
  name : 'ETIC Club',
  domaine : 'Entrepreneuriat et monde professionnel',
  logo : './assets/whyUs1.png',
  description : 'dont forget to determine a max number of caracters pcq il faut que toutes les cartes soient de meme longueur',
},
{
  name : 'ETIC Club',
  domaine : 'Entrepreneuriat et monde professionnel',
  logo : './assets/img1.png',
  description : 'dont forget to determine a max number of caracters pcq il faut que toutes les cartes soient de meme longueur',
},
{
  name : 'ETIC Club',
  domaine : 'Entrepreneuriat et monde professionnel',
  logo : './assets/img2.png',
  description : 'dont forget to determine a max number of caracters pcq il faut que toutes les cartes soient de meme longueur',
},
{
  name : 'ETIC Club',
  domaine : 'Entrepreneuriat et monde professionnel',
  logo : './assets/img3.png',
  description : 'dont forget to determine a max number of caracters pcq il faut que toutes les cartes soient de meme longueur',
},
{
  name : 'ETIC Club',
  domaine : 'Entrepreneuriat et monde professionnel',
  logo : './assets/img5.png',
  description : 'dont forget to determine a max number of caracters pcq il faut que toutes les cartes soient de meme longueur',
},]
/*Hello
    <Imgslider images={images}/>
<ContactCard table={testContactParam}/>
    <div style={{ height: '500px', width: '500px' }}>
  <Map width="300px" height="200px" location={TestMap} />
  </div>
  <ContactCard table={testContactParam}/>
        <Map width="300px" height="200px" location={TestMap}/>
        <Imgslider images={images}/>
        <div className=" bg-neutral-100">
          <Clubcard table={TestClub}/>
        </div>
  */
  export default function Home() {
    return (
      <div className="p-10 my-10 mx-10 relative">
        <div className="font-poppins mx-auto my-auto font-bold text-noir text-4xl text-center p-8">
          <h1>Why us?</h1>
        </div>
        <div className="flex items-center">
          <div className="w-1/2 relative mr-0">
            <img
              className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src="./assets/whyUs1.png"
              alt="ESI graduation ceremony"
            />
          </div>
          <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50">
            <h1 className="font-bold mb-4">About us</h1>
            <p className="text-wrap mb-4">
              For more than 50 years, ESI has been at the forefront of technology education, shaping the minds of tomorrow's innovators and leaders.
              Established in 1969 as the Center for Studies and Research in Computer Science (CERI), our school has evolved into a beacon of excellence in the field. We've matured into an industry leader and trusted resource for those seeking quality, innovation, and reliability.
            </p>
            <a href="/" className="bg-blanc text-bleu py-2 px-6 absolute bottom-2 right-10">
              See more
            </a>
          </div>
        </div>
        
      <div className="bg-neutral-100 ">
        <div className="font-poppins mx-auto my-auto text-noir text-center p-8">
          <h1 className="font-bold text-4xl">Academics</h1>
          <p> Have a look at the program studies that ESI offers </p>
          <div className="flex flex-row h-full">
            <div className="flex-col gap-3">
              <img src="./assets/img1.png"/>
              <h1 className="font-bold"> Preparatory classes </h1>
              <p> Discover more about the program ESI offers to preparatory class students. This program aims to provide a smooth transition to the field of computer science </p>
            </div>
            <div className="flex-col gap-3">
              <img src="./assets/img1.png"/>
              <h1 className="font-bold"> Preparatory classes </h1>
              <p> Discover more about the program ESI offers to preparatory class students. This program aims to provide a smooth transition to the field of computer science </p>
            </div>
            <div className="flex-col gap-3">
              <img src="./assets/img1.png"/>
              <h1 className="font-bold"> Preparatory classes </h1>
              <p> Discover more about the program ESI offers to preparatory class students. This program aims to provide a smooth transition to the field of computer science </p>
            </div>

          </div>
        </div>

      </div>



      
      </div>
    );
  }
  