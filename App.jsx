import { useEffect, useState } from 'react'

import './App.css'
import Product from './Product';

function App() {
  const [product, setProduct] = useState([])
  const [query, setQuery] = useState("")
  import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
  let smartphoneCategory = "smartphone";
  let laptopCategory = "laptops";



  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProduct(data));

  }, [])


  const smartphone = toy.filter(s => s.category === smartphoneCategory)
  const laptop = toy.filter(toys => s.category === laptopCategory)


  const decending = () => {

    const url1 = `https://dummyjson.com/products/sorttoys?sort=-1`
    fetch(url1)
      .then(res => res.json())
      .then(data => setProduct(data))
  }
  const acending = () => {

    const url1 = `https://dummyjson.com/products/sorttoys?sort=1`
    fetch(url1)
      .then(res => res.json())
      .then(data => setProduct(data))
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Search" className="input input-bordered" onChange={(e) => setQuery(e.target.value)} />
      </div>


      <div>
        <button onClick={acending} >Acending </button>
        <button onClick={decending} >Decending</button>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className=" flex flex-col ml-1 p-2 gap-4 lg:flex-row lg:m-3 lg:p-7 justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Tab  > <button>Smartphone</button></Tab>
          <Tab> <button>laptop</button></Tab>

        </TabList>
        <TabPanel>
          {

            smartphone?.map((s) => <Product key={s.id} s={s} ></Product>)
          }
        </TabPanel>
        <TabPanel className="flex flex-col lg:flex-row justify-around gap-2 p-3">
          {

            laptop?.map((s) => <Product key={s.id} s={s} ></Product>)
          }
        </TabPanel>


      </Tabs>
      <div>
        {
          product.map((pro) => <Product key={pro.id} pro={pro}></Product>)
        }
      </div>

    </>
  )
}

export default App
