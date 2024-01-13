import React from 'react'
import Header from '../components/Header'
import Story from '../components/Story'
import Shopping from '../components/Shopping'
import Deal from '../components/Deal';
import Footer from '../components/Footer';
import Festival from '../components/Fastival';
import Woodensofa from '../components/Woodensofa';
import Buy from '../components/Buy';

const Home = () => {
  return (
    <div>
        <Header/>
        <Story/>  
        <Buy/>
        <Shopping/>
        <Woodensofa/>
        <Deal/>
        <Festival/>
        <Footer/>
    </div>
  )
}

export default Home