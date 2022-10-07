import { Container } from "./styles";
import { ShoppingCart, Package, Timer, Coffee, Minus, Plus } from 'phosphor-react'

export function Home() {
  return (
    <Container>
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
      <section className="coffeList_main_container">
        <h2>Nossos cafés</h2>
        <ul>

          <li className="coffeList_main_item">
            <img src="coffes/Expresso.png" alt="Xícara de café expresso com píres em baixo" />
            <div className="tags">
              <span>tradicional</span>
            </div>
            <h3>Expresso Tradicional</h3>
            <p className="description">O tradicional café feito com água quente e grãos moídos</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Americano.png" alt="Xícara de café americano com píres em baixo" />
            <div className="tags">
              <span>tradicional</span>
            </div>
            <h3>Expresso Americano</h3>
            <p className="description">Expresso diluído, menos intenso que o tradicional</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Cremoso.png" alt="Xícara de café cremoso com píres em baixo" />
            <div className="tags">
              <span>tradicional</span>
            </div>
            <h3>Expresso Cremoso</h3>
            <p className="description">Café expresso tradicional com espuma cremosa</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Gelado.png" alt="" />
            <div className="tags">
              <span>tradicional</span>
              <span>gelado</span>
            </div>
            <h3>Expresso Gelado</h3>
            <p className="description">Bebida preparada com café expresso e cubos de gelo</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/CaféComLeite.png" alt="" />
            <div className="tags">
              <span>tradicional</span>
              <span>com leite</span>
            </div>
            <h3>Café com Leite</h3>
            <p className="description">Meio a meio de expresso tradicional com leite vaporizado</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Latte.png" alt="Xícara de café latte com píres em baixo" />
            <div className="tags">
              <span>tradicional</span>
              <span>com leite</span>
            </div>
            <h3>Latte</h3>
            <p className="description">Uma dose de café expresso com o dobro de leite e espuma cremosa</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Capuccino.png" alt="Xícara de café capuccino com píres em baixo" />
            <div className="tags">
              <span>tradicional</span>
              <span>com leite</span>
            </div>
            <h3>Capuccino</h3>
            <p className="description">Bebida com canela feita de doses iguais de café, leite e espuma</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Macchiato.png" alt="Xícara de café macchiato com píres em baixo" />
            <div className="tags">
              <span>tradicional</span>
              <span>com leite</span>
            </div>
            <h3>Macchiato</h3>
            <p className="description">Café expresso misturado com um pouco de leite quente e espuma</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Mocaccino.png" alt="Xícara de café mocaccino com píres em baixo" />
            <div className="tags">
              <span>tradicional</span>
              <span>com leite</span>
            </div>
            <h3>Mocaccino</h3>
            <p className="description">Café expresso com calda de chocolate, pouco leite e espuma</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/ChocolateQuente.png" alt="Xícara de chocolate quente com píres em baixo" />
            <div className="tags">
              <span>especial</span>
              <span>com leite</span>
            </div>
            <h3>Chocolate Quente</h3>
            <p className="description">Bebida feita com chocolate dissolvido no leite quente e café</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Cubano.png" alt="Xícara de café cubano com píres em baixo" />
            <div className="tags">
              <span>especial</span>
              <span>alcoólico</span>
              <span>gelado</span>
            </div>
            <h3>Cubano</h3>
            <p className="description">Drink gelado de café expresso com rum, creme de leite e hortelã</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Havaiano.png" alt="Xícara de café havaiano com píres em baixo" />
            <div className="tags">
              <span>especial</span>
            </div>
            <h3>Havaiano</h3>
            <p className="description">Bebida adocicada preparada com café e leite de coco</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Árabe.png" alt="Xícara de café árabe com píres em baixo" />
            <div className="tags">
              <span>especial</span>
            </div>
            <h3>Árabe</h3>
            <p className="description">Bebida preparada com grãos de café árabe e especiarias</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

          <li className="coffeList_main_item">
            <img src="coffes/Irlandês.png" alt="Xícara de café irlandês com píres em baixo" />
            <div className="tags">
              <span>especial</span>
              <span>alcoólico</span>
            </div>
            <h3>Irlandês</h3>
            <p className="description">Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
            <div className="buy">
              <span className="price"><span>R$</span>9,90</span>
              <div className="actions">
                <div>
                  <button><Minus width={14} height={14}/></button>
                  <span>1</span>
                  <button><Plus width={14} height={14}/></button>
                </div>
                <button className="button_buy">
                  <ShoppingCart weight="fill" width={22} height={22}/>
                </button>
              </div>
            </div>
          </li>

        </ul>
      </section>
    </Container>
  )
}