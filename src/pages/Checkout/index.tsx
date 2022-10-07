import { Container } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import { useEffect } from "react";

export function Checkout() {
  useEffect(() => {
    document.title = 'Coffee Delivery | Checkout'
  }, [])

  return (
    <Container>
      <div className="checkout_info_user">
        <section className="checkout_info_user_section">
          <h2 className="checkout_title">Complete seu pedido</h2>
          <div className="checkout_layout checkout_registration_information">
            <div className="checkout_header">
              <MapPinLine width={22} height={22} className="input_map" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <form action="#">
              <input type="number" placeholder="CEP" className="input_layout input_max_200" />
              <input type="text" placeholder="Rua" className="input_layout" />
              <div className="input_group">
                <input type="number" placeholder="Número" className="input_layout input_max_200" />
                <input type="text" placeholder="Complemento" className="input_layout" />
              </div>
              <div className="input_group">
                <input type="text" placeholder="Bairro" className="input_layout input_max_200" />
                <input type="text" placeholder="Cidade" className="input_layout" />
                <input type="number" placeholder="UF" className="input_layout" />
              </div>
            </form>
          </div>
        </section>
        <section>
          <div className="checkout_layout checkout_payment_methods">
            <div className="checkout_header">
              <CurrencyDollar width={22} height={22} className="input_currency" />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
            <div className="methods_content">
              <button>
                <CreditCard width={16} height={16} />
                <span>Cartão de Crédito</span>
              </button>
              <button>
                <Bank width={16} height={16} />
                <span>Cartão de Débito</span>
              </button>
              <button>
                <Money width={16} height={16} />
                <span>Dinheiro</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="checkout_info_selected_items">
        <h2 className="checkout_title">Cafés selecionados</h2>
        <section className="checkout_layout checkout_selected_items_content">
          <div className="checkout_selected_coffee">
            <img src="coffes/Expresso.png" alt="Xícara de café expresso com píres em baixo" />
            <div className="checkout_selected_coffee_options">
              <span className="checkout_selected_coffee_title">Expresso Tradicional</span>
              <div className="checkout_selected_coffee_buttons_amount">
                <div>
                  <button><Minus width={14} height={14} /></button>
                  <span>1</span>
                  <button><Plus width={14} height={14} /></button>
                </div>
                <button className="checkout_selected_coffee_button_delete">
                  <Trash width={16} height={16} />
                  <span>Remover</span>
                </button>
              </div>
            </div>
            <span className="checkout_selected_coffe_price">R$ 9,90</span>
          </div>
          <span className="checkout_selected_items_divider"></span>
          <div className="checkout_selected_coffee">
            <img src="coffes/Latte.png" alt="Xícara de café expresso com píres em baixo" />
            <div className="checkout_selected_coffee_options">
              <span className="checkout_selected_coffee_title">Latte</span>
              <div className="checkout_selected_coffee_buttons_amount">
                <div>
                  <button><Minus width={14} height={14} /></button>
                  <span>1</span>
                  <button><Plus width={14} height={14} /></button>
                </div>
                <button className="checkout_selected_coffee_button_delete">
                  <Trash width={16} height={16} />
                  <span>Remover</span>
                </button>
              </div>
            </div>
            <span className="checkout_selected_coffe_price">R$ 19,80</span>
          </div>
          <span className="checkout_selected_items_divider"></span>
          <div className="checkout_selected_items_total">
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="checkout_selected_items_total_summary">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>
          <button className="checkout_selected_items_button_confirm_order">
            <span>Confirmar Pedido</span>
          </button>
        </section>
      </div>
    </Container>
  )
}