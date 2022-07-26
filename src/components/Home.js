import React, { Component } from "react";

export default class Home extends Component {
    render () {
        return (

            <div className="container1">
                <div className="texto1 display-3 text-center">
                    <h1>Seja Bem-Vindo ao Dominnus.</h1>
                    <h2>Pra quem quer is muito mais além.</h2>
                </div>
            
            <br />
        
            <button type="button" className="btn1 btn-outline-light">Começar a Ler</button>
            <br />
                <br />
                <br />
                <div className="textoabaixodocard">
                <h1>Os artigos mais comentados da semana.</h1>
               </div>
                <br />
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  
        <div className="carousel-inner">
            <div className="carousel-item active">
                
            <div className="card" >
                <img className="card-img-top" src="https://2x1dks3q6aoj44bz1r1tr92f-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Square-face-shape-bespke-unit-Bordered-700x700.png" alt="Card image cap"/>
            <div className="card-body">
    
            <h5 className="card-title">Porque não estar no digital é extremamente prejudicial para o seu negócio?</h5>
                <p className="card-text">A internet proporciona o acesso a informações de todos os tipos, por mais específicos que sejam. E é justamente por isso que é tão importante estar presente online, mesmo sendo um negócio pequeno e local. Em primeiro lugar, você ganha espaço no seu segmento e sai na frente da concorrência que ainda não está no digital. É importante salientar que os valores aplicados às estratégias de marketing nunca devem ser encaradas como gastos, mas sim como investimentos. Esse setor é responsável por atrair novas oportunidades de negócios, ressaltar os valores da marca no mercado e apresentar os diferenciais. Se você corta essa verba, acaba cortando as possibilidades de vender!
Não investir no ambiente digital limita a sua empresa. O conhecimento da marca não é atingido como poderia e ...</p>
            <a href="#" className="btn2 btn-primary">Ler o artigo completo</a>
            </div>
        </div>
                


                <img className="d-block w-100" src="..." alt=""/>
            </div>
    
            <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Second slide"/>
            </div>
    
            <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Third slide"/>
            </div>
  
        </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"> Anterior </span>
             </a>

            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="sr-only"> Próximo</span>
            </a>
        </div>
                <br />
                <br />
                <div className="container">
          
        </div>
               
               <div className="textoabaixodocard">
                <h1>O melhor conteúdo sobre Marketing Digital da Internet está aqui.</h1>
               </div>
                
                <br />
                <br />
                <br />

                <div className="textomaisabaixodocard">
                    <h1>Consuma o quanto quiser. Compartilhe com os amigos.</h1>
               </div>
                
               <br />
                <br />
                <br />  
               
                
                <a href="#" className="to-top">Voltar ao Topo</a>
                <br />
                <br />
                <br />
                <footer>
                    <h2>
                    Made with love by Demi Ferreira for TRI Ventures - Copyright 2022
                    </h2>
                </footer>
            </div>
        )
    }
}