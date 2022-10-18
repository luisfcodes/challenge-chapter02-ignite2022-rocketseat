import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CardListContext, ListCoffeesType } from "../../App";
import { Container } from "./styles";

export function Card({ imgSrc, imgAlt, tags, title, description, amountSelected }: ListCoffeesType) {

  const { handleAddCoffee, handleRemoveCoffee } = useContext(CardListContext)

  return (
    <Container>
      <img src={imgSrc} alt={imgAlt} />
      <div className="tags">
        {tags.map(item => (<span key={item}>{item}</span>))}
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <div className="buy">
        <span className="price"><span>R$</span>9,90</span>
        <div className="actions">
          <div>
            <button onClick={() => handleRemoveCoffee(title)}>
              <Minus width={14} height={14} />
            </button>
            <span>{amountSelected}</span>
            <button onClick={() => handleAddCoffee(title)}>
              <Plus width={14} height={14} />
            </button>
          </div>
          <NavLink to="/checkout" className="button_buy">
            <ShoppingCart weight="fill" width={22} height={22} />
          </NavLink>
        </div>
      </div>
    </Container>
  )
}