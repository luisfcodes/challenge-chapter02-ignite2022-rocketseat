import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 0 10rem;
  margin-top: 2.5rem;

  .checkout_layout {
    margin-top: 0.9375rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${color => color.theme.colors.base['base-card']};
    border-radius: 6px;
  }

  .checkout_info_user {
    max-width: 640px;
    width: 100%;

    .checkout_header {
      display: flex;
      gap: 0.5rem;

      .input_map {
        color: ${color => color.theme.colors.product['yellow-dark']};
      }

      .input_currency {
        color: ${color => color.theme.colors.product['purple']};
      }

      h3 {
        color: ${color => color.theme.colors.base['base-subtitle']};
        font-size: 1rem;
        line-height: 1.3;
        margin-top: 0.1rem;
        font-weight: 400;
      }

      p {
        color: ${color => color.theme.colors.base['base-text']};
        font-size: .875rem;
        line-height: 1.3;
      }
    }
  
    .checkout_info_user_section {
      .checkout_registration_information {
        gap: 2rem;

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .input_layout {
            padding: .75rem;
            background-color: ${color => color.theme.colors.base['base-input']};
            border: 1px solid ${color => color.theme.colors.base['base-button']};
            border-radius: 4px;
            width: 100%;
          }

          .input_max_200 {
            max-width: 200px;
          }

          .input_group {
            display: flex;
            align-items: center;
            gap: .75rem;
          }

          &>:last-child {
            &>:last-child {
              max-width: 60px;
            }
          }
        }
      }
    }
  }

  .checkout_payment_methods {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .methods_content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: .75rem;

      button {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: ${color => color.theme.colors.base['base-button']};
        padding: 1rem;
        border-radius: 6px;
        border: 0;
        gap: .75rem;

        &>:first-child {
          color: ${color => color.theme.colors.product['purple']};
        }

        span {
          color: ${color => color.theme.colors.base['base-text']};
          line-height: 1.6;
          font-size: .70rem;
          text-transform: uppercase;
        }
      }
    }
  }

  .checkout_title {
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.3;
      color: ${color => color.theme.colors.base['base-subtitle']};
    }

  .checkout_info_selected_items {
    width: 100%;
    max-width: 448px;

    .checkout_selected_items_content {
   
    }
  }
`