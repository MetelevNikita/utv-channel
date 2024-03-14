import { FC } from 'react'

// css

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//

import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom';

// components

import Header from  './components/Header'
import Social from './components/Social';


const App = () => {
  return (

    <div className="App">
      <Container>

        <Header />
        <Social />

        <Routes>






        </Routes>




      </Container>
    </div>

  )
}

export default App
