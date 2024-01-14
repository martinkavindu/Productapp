import React from 'react'
import HeaderSection from './Headersection'
import "../styles/home.css"
const Home = () => {
  return (
    <>
    <HeaderSection/>
    <section className='main'>
        <div className='home'>
        <h3>Snack on fresh fruits & vegetables <br/> for energy boost </h3> 
        <button className='btn1'>learn more</button>
        </div>

    </section>
    </>
  )
}

export default Home