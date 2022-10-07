import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  padding: 0 10rem;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
      color: ${color => color.theme.colors.product['yellow-dark']};
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.3;
    }

    .success_subtitle {
      color: ${color => color.theme.colors.base['base-subtitle']};
      font-size: 1.25rem;
      line-height: 1.3;
      font-stretch: 100;
    }

    .success_info {
      margin-top: 2.5rem;
      display: flex;
      justify-content: space-between;

      .success_info_description {
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 6px 36px;
        border-top: 4px solid #FFFF00;
        border-bottom:4px solid #FF0000;
        background-image: 
          linear-gradient(#FFFF00, #FF0000),
          linear-gradient(#FFFF00, #FF0000)
        ;
        background-size:4px 100%;
        background-position:0 0, 100% 0;
        background-repeat:no-repeat;      

        .success_info_address {
          display: flex;
          align-items: center;
          gap: .75rem;

          .success_info_address_icon {
            display: flex;
            align-items: center;
            color: white;
            background-color: ${color => color.theme.colors.product['purple']};
            padding: 0.5rem;
            border-radius: 1000px;
          }

          .success_info_address_icon_timer {
            background-color: ${color => color.theme.colors.product['yellow']};
          }

          .success_info_address_icon_currency {
            background-color: ${color => color.theme.colors.product['yellow-dark']};
          }

          .success_info_address_description {
            h3, p {
              font-size: 1rem;
              line-height: 1.3;
              color: ${color => color.theme.colors.base['base-text']};
              font-weight: 400;

              span {
                font-weight: 700;
              }
            }

            .success_info_address_description_bold {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
`