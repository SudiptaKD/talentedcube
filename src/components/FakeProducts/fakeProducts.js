import axios from 'axios'

const Product = async () => {
  const result = await axios(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=150`);

  console.log(result)
  return result
    }
   //this.a =this.Product() 
 export const Productss = Product();

 //console.log(this.a)
    

export const Products = [
    {
      id: 1,
      title: "product1",
      description:
        "ghjg f gf gf gf j ghkjhsjh sjh kjhs jk s",
      price: 20,
    },
    {
      id: 2,
      title: "product2",
      description:
        " skjghdhgsshjdg hj kjsh  jgs hg  shg shs k sjg s s",
      price: 30,
    }
]