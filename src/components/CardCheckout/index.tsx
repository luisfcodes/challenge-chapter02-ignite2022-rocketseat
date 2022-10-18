import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CardListContext } from "../../App";
import { Container } from "./styles";

interface CardCheckoutProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  amountSelected: number;
  totalPrice: number;
}

export function CardCheckout({ title, amountSelected, imgAlt, imgSrc, totalPrice }: CardCheckoutProps) {

  const {handleAddCoffee, handleRemoveCoffee, handleRemoveCoffeeList} = useContext(CardListContext)

  return (
    <Container>
        <img src={imgSrc} alt={imgAlt} />
        <div className="checkout_selected_coffee_options">
          <span className="checkout_selected_coffee_title">{title}</span>
          <div className="checkout_selected_coffee_buttons_amount">
            <div>
              <button onClick={() => handleRemoveCoffee(title)}>
                <Minus width={14} height={14} />
              </button>
              <span>{amountSelected}</span>
              <button onClick={() => handleAddCoffee(title)}>
                <Plus width={14} height={14} />
              </button>
            </div>
            <button className="checkout_selected_coffee_button_delete" onClick={() => handleRemoveCoffeeList(title)}>
              <Trash width={16} height={16} />
              <span>Remover</span>
            </button>
          </div>
        </div>
        <span className="checkout_selected_coffe_price">R$ {totalPrice.toFixed(2)}</span>
    </Container>
  )
}