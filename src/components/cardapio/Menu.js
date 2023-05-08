import React from 'react';

const Menu = ({ menu, currentCategory }) => {
  const filteredItems = currentCategory === 'Todos'
    ? menu
    : menu.filter((item) => item.tituloCategoria === currentCategory);

  return (
    <div className="section-center">
      {filteredItems?.map(categoria => {
        return (
          <section key={categoria.tituloCategoria} className="menu">
            <h3>{categoria.tituloCategoria}</h3>
            <div className="menu-item">
              {categoria.produtos?.map(produto => {
                const { nome, valor, descricao, urlImagem } = produto;
                return (
                  <article key={nome} className="itens-carpadio">
                    <img src={urlImagem} alt={nome} className="imagem" />
                    <div className="item-info">
                      <header>
                        <h4>{nome}</h4>
                        <h4 className="valor">R$ {valor.toFixed(2).replace(/\./g, ",")}</h4>
                      </header>
                      <p className="item-text">{descricao}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Menu;
