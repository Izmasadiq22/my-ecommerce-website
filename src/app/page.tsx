import React from 'react'
import Navbar from "../app/components/Navbar";
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import ProductList from './components/ProductList';
import Banner from '../app/components/Banner';
import Offer from './components/Offer';
import Card from './components/Card';
import Footer from './components/Footer';
import FlapCard from './components/FlapCard';
import CustomizeRequest from './components/CustomizeRequest';
import Menu from './components/ItemCard';


export default function App(){
  return(
    <div className='bg-gradient-to-r from-black to bg-neutral-700 min-h-screen'>
<Navbar/>
<Carousel/>
<Progressor/>
<FlapCard/>
<Banner/>
<ProductList/> 
<Menu/>
<Offer/>
<Card/>
<CustomizeRequest/>
<Footer/>
    </div>
  )
} 