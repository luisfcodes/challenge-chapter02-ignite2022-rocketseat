import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CardListContext } from "../../App";

export function Header(){

  const { listCoffeesFiltered } = useContext(CardListContext)

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
        <img src="logo.svg" alt="Copo de café roxo com texto ao lado" />
        </NavLink>
        <div className="actions">
          <NavLink to="/success">
            <button className="button_location">
              <MapPin width={22} height={22} weight={'fill'} className={'mapPin_icon'}/>
              <span>Porto Alegre, RS</span>
            </button>
          </NavLink>
          <NavLink to="/checkout">
            <button className="button_cart">
              <ShoppingCart width={22} height={22} weight={'fill'} className={'shoppingCart_icon'}/>
              {listCoffeesFiltered.length > 0 && (
                <div className="button_cart_itens">
                  <span>{listCoffeesFiltered.length}</span>
                </div>
              )}
            </button>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}