import React from 'react'
import Header from '../Component/Header'
import SelectTemplate from './SelectTemplate'
import CreatTemplate from './CreatTemplate'
import About from './About'

const Home = () => {
  return (
    <>
      <Header />
      <About/>
      <SelectTemplate />
      <CreatTemplate />
    </>
  )
}

export default Home