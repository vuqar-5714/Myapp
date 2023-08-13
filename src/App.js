import './App.css';
import React from 'react'
import Navbar from "./Navbar/navbar"
import Section from "./Section/section"
import Main from "./Main/main"
import Header from "./Header/header"
import Footer from "./Footer/footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Section />
      <Header />
      <Footer />
    </div>
  )
}

export default App
