import React, { useState, useEffect } from 'react';
import Menu from './components/cardapio/Menu';
import Categories from './components/cardapio/Categories';
import { cardapioWrapper } from './components/cardapio/CardapioWrapper';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [cardapio, setCardapio] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('Todos');
  const [carregando, setCarregando] = useState(false);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    setCarregando(true);
    cardapioWrapper
      .fetchData(location)
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
    <main>
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
    </main>
  );
}

export default App;
