import { Container } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect } from "react";
import { CardCheckout } from "../../components/CardCheckout";
import { CardListContext } from "../../App";
import { NavLink, useNavigate } from "react-router-dom";


export function Checkout() {
  useEffect(() => {
    document.title = 'Coffee Delivery | Checkout'
  }, [])

  const { listCoffeesFiltered } = useContext(CardListContext)

  const totalItensPrice = listCoffeesFiltered.reduce((acc, item) => {
    return acc = acc + item.totalPrice
  }, 0)

  const isDisabled = listCoffeesFiltered.length <= 0
  let navigate = useNavigate()

  function handleSubmit() {
    navigate('/success')
  }

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
          {listCoffeesFiltered.length > 0 && listCoffeesFiltered.map(item => (
            <CardCheckout
              key={item.title}
              title={item.title}
              amountSelected={item.amountSelected}
              imgSrc={item.imgSrc}
              imgAlt={item.imgSrc}
              totalPrice={item.totalPrice}
            />
          ))}

          <span className="checkout_selected_items_divider"></span>

          <div className="checkout_selected_items_total">
            <div>
              <span>Total de itens</span>
              <span>R$ {totalItensPrice.toFixed(2)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="checkout_selected_items_total_summary">
              <span>Total</span>
              <span>R$ {(totalItensPrice + 3.5).toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout_selected_items_button_confirm_order" disabled={isDisabled} onClick={handleSubmit}>
            <span>Confirmar Pedido</span>
          </button>
        </section>
      </div>
    </Container>
  )
}