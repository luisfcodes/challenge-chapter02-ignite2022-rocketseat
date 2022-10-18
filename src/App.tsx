import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/globalStyles";
import { defaultTheme } from "./styles/themes/defaultTheme";

export interface ListCoffeesType {
  imgSrc: string;
  imgAlt: string;
  tags: string[];
  title: string;
  description: string;
  amountSelected: number;
  totalPrice: number
}

interface CardListContextType {
  listCoffees: ListCoffeesType[];
  listCoffeesFiltered: ListCoffeesType[];
  handleAddCoffee: (id: string) => void;
  handleRemoveCoffee: (id: string) => void;
  handleRemoveCoffeeList: (id: string) => void
}

export const CardListContext = createContext({} as CardListContextType)

export function App() {

  const [listCoffees, setListCoffees] = useState<ListCoffeesType[]>([
    {
      imgSrc: 'coffes/Expresso.png',
      imgAlt: 'Xícara de café expresso com píres em baixo',
      tags: ['tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Americano.png',
      imgAlt: 'Xícara de café americano com píres em baixo',
      tags: ['tradicional'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Cremoso.png',
      imgAlt: 'Xícara de café cremoso com píres em baixo',
      tags: ['tradicional'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Gelado.png',
      imgAlt: 'Xícara de café gelado com píres em baixo',
      tags: ['tradicional', 'gelado'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/CaféComLeite.png',
      imgAlt: 'Xícara de café com leite, com píres em baixo',
      tags: ['tradicional', 'com leite'],
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Latte.png',
      imgAlt: 'Xícara de café latte, com píres em baixo',
      tags: ['tradicional', 'com leite'],
      title: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Capuccino.png',
      imgAlt: 'Xícara de café capuccino, com píres em baixo',
      tags: ['tradicional', 'com leite'],
      title: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Macchiato.png',
      imgAlt: 'Xícara de café macchiato com píres em baixo',
      tags: ['tradicional', 'com leite'],
      title: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Mocaccino.png',
      imgAlt: 'Xícara de café mocaccino com píres em baixo',
      tags: ['tradicional', 'com leite'],
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/ChocolateQuente.png',
      imgAlt: 'Xícara de chocolate quente com píres em baixo',
      tags: ['especial', 'com leite'],
      title: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Cubano.png',
      imgAlt: 'Xícara de café cubano com píres em baixo',
      tags: ['especial', 'alcoólico', 'gelado'],
      title: 'Cubano',
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Havaiano.png',
      imgAlt: 'Xícara de café havaiano com píres em baixo',
      tags: ['especial'],
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Árabe.png',
      imgAlt: 'Xícara de café árabe com píres em baixo',
      tags: ['especial'],
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      amountSelected: 0,
      totalPrice: 0
    },
    {
      imgSrc: 'coffes/Irlandês.png',
      imgAlt: 'Xícara de café irlandês com píres em baixo',
      tags: ['especial', 'alcoólico'],
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      amountSelected: 0,
      totalPrice: 0
    }
  ])

  const listCoffeesFiltered = listCoffees.filter(item => item.amountSelected > 0)

  function handleAddCoffee(id: string) {
    const newList = listCoffees.map(item => {
      if (item.title === id) {
        return {
          ...item,
          amountSelected: item.amountSelected + 1,
          totalPrice: (item.amountSelected + 1) * 9.9
        }
      }
      return item
    })
    setListCoffees(newList)
  }

  function handleRemoveCoffee(id: string) {
    const newList = listCoffees.map(item => {
      if (item.title === id) {
        if (item.amountSelected > 0) {
          return {
            ...item,
            amountSelected: item.amountSelected - 1,
            totalPrice: (item.amountSelected - 1) * 9.90
          }
        }
      }
      return item
    })
    setListCoffees(newList)
  }

  function handleRemoveCoffeeList(id: string) {
    const newList = listCoffees.map(item => {
      if (item.title === id) {
        if (item.amountSelected > 0) {
          return {
            ...item,
            amountSelected: 0,
            totalPrice: (item.amountSelected - 1) * 9.90
          }
        }
      }
      return item
    })
    setListCoffees(newList)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CardListContext.Provider value={{ listCoffees, handleAddCoffee, handleRemoveCoffee, handleRemoveCoffeeList, listCoffeesFiltered }}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </CardListContext.Provider>
    </ThemeProvider>
  )
}