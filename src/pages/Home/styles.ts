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
    }
  }
`