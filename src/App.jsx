import React from 'react'
import data from './data.js'
import Hero from '../components/Hero.jsx'
import Title from '../components/Title.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function App() {
  const heroComp= data.map(heroComp => {
    return (
      <Hero 
        key = {heroComp.id}
        {...heroComp}
      />
    )
  })

  return (
    <div className="final-score">
      <Header />
      <Title />
      <main>
        {heroComp}
      </main>
      <Footer />
    </div>
  )
}

export default App
