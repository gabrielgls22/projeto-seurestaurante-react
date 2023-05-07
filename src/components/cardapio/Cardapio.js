import React, { Component } from "react";
import axios from "axios";
import "./Cardapio.css";

class Cardapio extends Component {


  render() {
    const { cardapio, carregando } = this.state;

    history.push({
      pathname: '/menu',
      state: {
          menu: cardapio
      }})

      const historyData = props.history.location.state;

      let menu = [
        {
        "tituloCategoria": historyData?.menu.tituloCategoria,
        "produtos": historyData?.menu.produtos
        }
      ]

  

    return (
      <div>
        <div className="cardapio-lista-header">
          <h1 className="cardapio-lista-nome-empresa">{cardapio.nomeEmpresa}</h1>
          <img
            src={cardapio.urlLogoEmpresa}
            alt={cardapio.nomeEmpresa}
            className="cardapio-lista-logo-empresa"
          />
        </div>
        {carregando ? (
          <p>Carregando...</p>
        ) : cardapio.cardapio && cardapio.cardapio.length > 0 ? (
          <>
            <div className="cardapio-lista-categorias">
              {cardapio.cardapio.map((categoria) => (
                <div key={categoria.tituloCategoria} className="cardapio-lista-categoria">
                  <h2>{categoria.tituloCategoria}</h2>
                  {categoria.produtos.map((produto) => (
                    <div key={produto.nome} className="cardapio-lista-produto">
                      <h3>{produto.nome}</h3>
                      <p>{produto.descricao}</p>
                      <p>R$ {produto.valor.toFixed(2).replace(/\./g, ",")}</p>
                      <img src={produto.urlImagem} alt={produto.nome} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Nenhum cardápio encontrado.</p>
        )}
      </div>
    );
  }
}

export default Cardapio;
