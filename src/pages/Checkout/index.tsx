import { Container } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

export function Checkout() {
  return (
    <Container>
      <div className="checkout_info_user">
        <section className="checkout_info_user_section">
          <h2 className="checkout_title">Complete seu pedido</h2>
          <div className="checkout_layout checkout_registration_information">
            <div className="checkout_header">
              <MapPinLine width={22} height={22} className="input_map"/>
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
              <CurrencyDollar width={22} height={22} className="input_currency"/>
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
            <div className="methods_content">
              <button>
                <CreditCard width={16} height={16}/>
                <span>Cartão de Crédito</span>
              </button>
              <button>
                <Bank width={16} height={16}/>
                <span>Cartão de Débito</span>
              </button>
              <button>
                <Money width={16} height={16}/>
                <span>Dinheiro</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="checkout_info_selected_items">
        <h2 className="checkout_title">Cafés selecionados</h2>
        <div className="checkout_layout checkout_selected_items_content">
          <p>a</p>
        </div>
      </div>
    </Container>
  )
}