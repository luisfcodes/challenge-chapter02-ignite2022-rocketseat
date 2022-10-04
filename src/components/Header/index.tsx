import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header(){
  return (
    <HeaderContainer>
      <nav>
        <img src="logo.svg" alt="Copo de café roxo com texto ao lado" />
        <div className="actions">
          <a href="#">
            <button className="button_location">
              <MapPin width={22} height={22} weight={'fill'} className={'mapPin_icon'}/>
              <span>Porto Alegre, RS</span>
            </button>
          </a>
          <a href="#">
            <button className="button_cart">
              <ShoppingCart width={22} height={22} weight={'fill'} className={'shoppingCart_icon'}/>
            </button>
          </a>
        </div>
      </nav>
    </HeaderContainer>
  )
}