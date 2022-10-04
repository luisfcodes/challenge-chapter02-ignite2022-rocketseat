import { Header } from "../../components/Header";
import { Container } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Home() {
  return (
    <Container>
      <Header />
      <section className="intro_main_container">
        <div className="intro_main_content">
          <div>
            <h1>Encontre o café perfeito <br/> para qualquer hora do dia</h1>
            <p className="intro_main_subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <div className="intro_main_items">
              <div className="intro_main_item_container">
                <span className="intro_main_item_icon intro_main_item_icon_one">
                  <ShoppingCart weight="fill"/>
                </span>
                <span className="intro_main_item_description">Compra simples e segura</span>
              </div>
              <div className="intro_main_item_container">
                <span className="intro_main_item_icon intro_main_item_icon_two">
                  <Package weight="fill"/>
                </span>
                <span className="intro_main_item_description">Embalagem mantém o café intacto</span>
              </div>
              <div className="intro_main_item_container">
                <span className="intro_main_item_icon intro_main_item_icon_three">
                  <Timer weight="fill"/>
                </span>
                <span className="intro_main_item_description">Entrega rápida e rastreada</span>
              </div>
              <div className="intro_main_item_container">
                <span className="intro_main_item_icon intro_main_item_icon_four">
                  <Coffee weight="fill"/>
                </span>
                <span className="intro_main_item_description">O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
          <img src="coffe_banner.png" alt="" />
        </div>
      </section>
    </Container>
  )
}