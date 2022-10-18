import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 8px 4px;

  img {
    width: 64px;
    height: 64px;
  }

  .checkout_selected_coffee_options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .checkout_selected_coffee_title {
      color: ${color => color.theme.colors.base['base-subtitle']};
      font-size: 1rem;
      line-height: 1.3;
    }

    .checkout_selected_coffee_buttons_amount {
      display: flex;
      align-items: center;
      gap: 8px;

      div {
        height: 32px;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px;
        border-radius: 6px;
        background-color: ${color => color.theme.colors.base['base-button']};

        span {
          color: ${color => color.theme.colors.base['base-title']};
          font-size: 1rem;
          line-height: 1.3;
          width: 20px;
          text-align: center;
        }
      }

      button {
        background-color: transparent;
        border: 0;

        &>:first-child {
          color: ${color => color.theme.colors.product['purple']};
          transition: all .2s;

          &:hover {
            color: ${color => color.theme.colors.product['purple-dark']};
          }
        }
      }

      .checkout_selected_coffee_button_delete {
        background-color: ${color => color.theme.colors.base['base-button']};
        border-radius: 6px;
        padding: 0 8px;
        display: flex;
        align-items: center;
        gap: 4px;
        height: 32px;
        transition: all .2s;

        span {
          color: ${color => color.theme.colors.base['base-text']};
          font-size: .75rem;
          line-height: 1.6;
          text-transform: uppercase;
          margin-top: 1px;
        }

        &:hover {
          background-color: ${color => color.theme.colors.base['base-hover']};

          span {
            color: ${color => color.theme.colors.base['base-subtitle']};
          }
        }
      }
    }
  }
  
  .checkout_selected_coffe_price {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 2px;
    color: ${color => color.theme.colors.base['base-text']};
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;
  }  
`