import React from 'react';
import { Routes, Route } from 'react-router';
import ScrollToTop from './ScrollToTop';
//Components
import Navbar from './componants/Navbar';
import Home from './componants/routing/Home';
import About from './componants/routing/About';
import Menu from './componants/routing/Menu'
import Pages from './componants/routing/Pages'
import Contact from './componants/routing/Contact'
import All from "./componants/routing/menu routing/All"
import Breakfast from "./componants/routing/menu routing/Breakfast"
import Main from "./componants/routing/menu routing/Main"
import Drinks from "./componants/routing/menu routing/Drinks"
import Desserts from "./componants/routing/menu routing/Desserts"
import Footer from './componants/Footer';
import CategoryDetail from './componants/routing/CategoryDetail';
import UniqueServices from './componants/routing/menu routing/UniqueServices';
import ArticlesDetail from './componants/routing/menu routing/ArticlesDetail';
import FormContainer from './componants/form components/FormContainer';
import BookTable from './componants/form components/BookTable';




export const App = () => {
  return (
<>

      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/categories/:id' element={<CategoryDetail/>}/>
        <Route path='/services/:id' element ={<UniqueServices/>}/>
        <Route path='/articles/:id' element ={<ArticlesDetail/>}/>

        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="All" element={<All />} />
          <Route path="Breakfast" element={<Breakfast />} />
          <Route path="Main" element={<Main />} />
          <Route path="Drinks" element={<Drinks />} />
          <Route path="Desserts" element={<Desserts />} />
        </Route>
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signup' element = {<FormContainer/>}/>
        <Route path="/book-table" element={<BookTable />} />
      </Routes>
    

</>
  )
}
