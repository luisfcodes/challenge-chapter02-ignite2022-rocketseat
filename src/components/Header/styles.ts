import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .actions {
      display: flex;
      align-items: center;
      gap: .75rem;
    }

    button {
      padding: 0.5rem;
      border-radius: 6px;
      border: 0;
      height: 38px;
      cursor: pointer;
    }

    .button_location {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.250rem;
      background-color: ${color => color.theme.colors.product['purple-light']};

      span {
        color: ${color => color.theme.colors.product['purple-dark']};
        line-height: 1.3;
        font-size: .875rem;
      }

      .mapPin_icon {
        color: ${color => color.theme.colors.product['purple']};
      }
    }

    .button_cart {
      background-color: ${color => color.theme.colors.product['yellow-light']};
      position: relative;

      .shoppingCart_icon {
        color: ${color => color.theme.colors.product['yellow-dark']};
      }

      .button_cart_itens {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -8px;
        right: -8.35px;
        background-color: ${color => color.theme.colors.product['yellow-dark']};
        color: ${color => color.theme.colors.base['white']};
        border-radius: 1000px;
        height: 20px;
        width: 20px;

        span {
          font-weight: 700;
          font-size: .75rem;
        }
      }
    }
  }
`