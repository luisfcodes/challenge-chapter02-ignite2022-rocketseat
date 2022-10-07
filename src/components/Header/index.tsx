import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header(){
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
        <img src="logo.svg" alt="Copo de café roxo com texto ao lado" />
        </NavLink>
        <div className="actions">
          <a href="#">
            <button className="button_location">
              <MapPin width={22} height={22} weight={'fill'} className={'mapPin_icon'}/>
              <span>Porto Alegre, RS</span>
            </button>
          </a>
          <NavLink to="/checkout">
            <button className="button_cart">
              <ShoppingCart width={22} height={22} weight={'fill'} className={'shoppingCart_icon'}/>
            </button>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}