import styled from "styled-components";

export const Container = styled.li`
  background-color: ${color => color.theme.colors.base['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  max-width: 256px;
  position: relative;

  img {
    margin-top: -40px;
    width: 120px;
    height: 120px;
  }

  .tags {
    margin-top: .75rem;
    display: flex;
    align-items: center;
    gap: .25rem;
          
      span {
        background-color: ${color => color.theme.colors.product['yellow-light']};
        border-radius: 100px;
        padding: 4px 8px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .625rem;
        line-height: 1.3;
        color: ${color => color.theme.colors.product['yellow-dark']};
      }
    }

    h3 {
      color: ${color => color.theme.colors.base['base-subtitle']};
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.3;
      margin-top: 1rem;
    }

    .description {
      color: ${color => color.theme.colors.base['base-label']};
      font-size: .875rem;
      line-height: 1.3;
      text-align: center;
      margin-top: 0.5rem;
    }

    .buy {
      margin-top: 2.0625rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.4375rem;

      .price {
        color: ${color => color.theme.colors.base['base-text']};
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        line-height: 1.3;
        text-align: right;

        span {
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: .875rem;
        }
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        div {
          display: flex;
          align-items: center;
          gap: 4px;
          background-color: ${color => color.theme.colors.base['base-button']};
          padding: 0.5rem;
          border-radius: 6px;

          span {
            color: ${color => color.theme.colors.base['base-title']};
            font-size: 1rem;
            line-height: 1.3;
            text-align: center;
            width: 20px;
          }

          button {
            background-color: transparent;
            border: 0;
            cursor: pointer;
            padding: 0 0.2rem;

            &>:first-child{
              color: ${color => color.theme.colors.product['purple']};
              transition: all .2s;

              &:hover {
                color: ${color => color.theme.colors.product['purple-dark']};
              }
            }
          }
        }

        .button_buy {
          background-color: transparent;
          border: 0;
          padding: 0.5rem;
          background-color: ${color => color.theme.colors.product['purple-dark']};
          border-radius: 6px;
          width: 38px;
          height: 38px;
          cursor: pointer;
          transition: all .2s;

          &:hover {
            background-color: ${color => color.theme.colors.product['purple']};
          }

          &>:first-child{
            color: ${color => color.theme.colors.base['base-card']};
          }
        }
      }
    }  
`