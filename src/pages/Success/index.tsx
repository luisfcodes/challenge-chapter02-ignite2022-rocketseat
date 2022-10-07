import { useEffect } from "react"
import { Container } from "./styles"
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function Success(){
  useEffect(() => {
    document.title = 'Coffee Delivery | Pedido Confirmado'
  }, [])

  return (
    <Container>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <p className="success_subtitle">Agora é só aguardar que logo o café chegará até você</p>
        <div className="success_info">
          <div className="success_info_description">

            <div className="success_info_address">
              <span className="success_info_address_icon">
                <MapPin weight="fill" width={16} height={16}/>
              </span>
              <div className="success_info_address_description">
                <h3>Entrega em <span>Rua João Daniel Martinelli, 102</span></h3>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>

            <div className="success_info_address">
              <span className="success_info_address_icon success_info_address_icon_timer">
                <Timer weight="fill" width={16} height={16}/>
              </span>
              <div className="success_info_address_description">
                <h3>Previsão de entrega</h3>
                <p className="success_info_address_description_bold">20 min - 30 min</p>
              </div>
            </div>

            <div className="success_info_address">
              <span className="success_info_address_icon success_info_address_icon_currency">
                <CurrencyDollar weight="fill" width={16} height={16}/>
              </span>
              <div className="success_info_address_description">
                <h3>Pagamento na entrega</h3>
                <p className="success_info_address_description_bold">Cartão de crédito</p>
              </div>

            </div>
          </div>
          <img src="success_banner.png" alt="" />
        </div>
      </section>
    </Container>
  )
}