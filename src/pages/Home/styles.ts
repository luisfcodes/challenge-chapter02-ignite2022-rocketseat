import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .intro_main_container {
    padding: 5.75rem 10rem;
    background: url('background_intro.png');

    .intro_main_content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        color: ${color => color.theme.colors.base['base-title']};
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3rem;
        line-height: 1.3;
      }

      .intro_main_subtitle {
        color: ${color => color.theme.colors.base['base-subtitle']};
        font-size: 1.25rem;
        font-stretch: 100%;
        line-height: 1.3;
        margin-top: 1rem;
      }

      .intro_main_items {
        margin-top: 4.125rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 1.25rem;

        .intro_main_item_container {
            display: flex;
            align-items: center;
            width: 50%;
            gap: .75rem;

            .intro_main_item_icon {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0.5rem;
              border-radius: 50%;

              &:first-child {
                color: ${color => color.theme.colors.base['background']};
              }
            }

            .intro_main_item_icon_one {
              background-color: ${color => color.theme.colors.product['yellow-dark']};
            }

            .intro_main_item_icon_two {
              background-color: ${color => color.theme.colors.base['base-text']};
            }

            .intro_main_item_icon_three {
              background-color: ${color => color.theme.colors.product['yellow']};
            }

            .intro_main_item_icon_four {
              background-color: ${color => color.theme.colors.product['purple']};
            }
          
          .intro_main_item_description {
            color: ${color => color.theme.colors.base['base-text']};
            font-size: 1rem;
            line-height: 1.3;
          }
        }
      }
    }
  }

  .coffeList_main_container {
    padding: 5.75rem 10rem;

    h2 {
      color: ${color => color.theme.colors.base['base-subtitle']};
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.3;
    }

    ul {
      display: flex;
      align-items: center;
      margin-top: 3.375rem;
      gap: 2rem;
      flex-wrap: wrap;
      row-gap: 2.5rem;

      .coffeList_main_item {
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
              }

              button {
                background-color: transparent;
                border: 0;
                cursor: pointer;
                padding: 0 0.2rem;

                &>:first-child{
                  color: ${color => color.theme.colors.product['purple']};
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

              &>:first-child{
                  color: ${color => color.theme.colors.base['base-card']};
                }
            }
          }
        }
      }
    }
  }
`