import React,{useState} from 'react';
import './App.css';
import Card from "./components/card/card"

function App() {
    const [productList,setProductList]=useState(
        [
            {
                id:1,
                price:200,
                name:"Ios",
                image:"https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
                title:"Iphone 12"
            },
            {
                id:2,
                price:150,
                name:"Ios",
                image:"https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                title:"Iphone 11"
            },
            {
                id:3,
                price:100,
                name:"Android",
                image:"https://images.unsplash.com/photo-1598327105854-c8674faddf79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80",
                title:"Xiaomi 10"
            },
            {
                id:3,
                price:175,
                name:"Android",
                image:"https://images.unsplash.com/photo-1591531110744-49eacf536ee7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1044&q=80",
                title:"Xiaomi 11"
            }

        ]
    )
    const [boxProduct,setBoxProduct]=useState([])
  return (
    <div className="App">

        <h3>Ürün Listesi</h3>
        <div className="gridItems">
            {productList.map((product,index)=>{
                return(
                    <Card onClick={()=>{
                        const arr=[...boxProduct]
                        arr.push(product)
                        setBoxProduct(arr)
                    }} key={index} image={product.image} info={product.title} title={product.name}  />

                )
            })}

        </div>


        {boxProduct.length>0 && <div>
            <h4>Aldıgınız Ürünler</h4>

            {
                boxProduct.map((boxProduct,index)=>{
                    return(
                        <div key={index}>
                            {JSON.stringify(boxProduct) }

                        </div>
                    )
                })
            }
        </div>}
        {boxProduct.length<1 && <div> Sepetinizde Bir Ürün Bulunmamaktadır.</div>}


    </div>
  );
}

export default App;
