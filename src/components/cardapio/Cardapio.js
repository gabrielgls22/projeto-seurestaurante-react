import React, { useState, useEffect } from "react";
import Menu from './Menu';
import Categories from './Categories';
import { cardapioWrapper } from './CardapioWrapper';
import { useParams } from 'react-router-dom';

const Cardapio = () => {

const { nomeEmpresa } = useParams();
const [cardapio, setCardapio] = useState([]);
const [menuItems, setMenuItems] = useState([]);
const [categories, setCategories] = useState([]);
const [currentCategory, setCurrentCategory] = useState('Todos');
const [carregando, setCarregando] = useState(true);

const handleCategoryClick = (category) => {
  setCurrentCategory(category);
};

useEffect(() => {
  setCarregando(true);
  cardapioWrapper
    .fetchData(nomeEmpresa)
    .then((cardapio) => {
      setCardapio(cardapio);
      const [categories, menuItems] = cardapioWrapper.criarCategorias(cardapio);
      setCategories(categories);
      setMenuItems(menuItems);
      setCarregando(false);
    })
    .catch((error) => {
      console.log(error);
      setCarregando(false);
    });
}, []);


    return (
        <section className="menu section">
        {carregando ? (
          <div>Carregando...</div>
        ) : (
        <div className="title">
        <h2>{cardapio.nomeEmpresa}</h2>
        <div className="underline" />
        <Categories onCategoryClick={handleCategoryClick} categories={categories} />
        <Menu currentCategory={currentCategory} menu={menuItems} />
      </div>      
      )}
      </section>
    );
    
}

export default Cardapio;