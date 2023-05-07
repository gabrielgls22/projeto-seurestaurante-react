import axios from "axios";

let cardapio = {};

export const cardapioWrapper = {
  async fetchData(location) {
    const searchParams = new URLSearchParams(location.search);
    const nomeEmpresa = searchParams.get('nomeEmpresa');

    try {
      const response = await axios.get("http://localhost:8080/cardapio", {
        params: {
          nomeEmpresa,
        },
      });
      cardapio = response.data;
      return cardapio;
    } catch (error) {
      console.log(error);
    }
  },

  criarCategorias(cardapio) {
    let categories = [];
    let menuItems = null;
    if (cardapio && cardapio.cardapio) {
      const allCategories = ['Todos', ...new Set(cardapio.cardapio.map(item => item.tituloCategoria))];
      categories = allCategories;
      menuItems = cardapio.cardapio;
    }
  
    return [categories, menuItems];
  },

  filterItems(cardapio, category) {
    console.log('click', category);
    if (category === 'Todos') {
      return cardapio.cardapio;
    }
    const newItems = cardapio.cardapio.filter((item) => item.tituloCategoria === category);
    return newItems;
  }
  
}
