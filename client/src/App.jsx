import './App.css'
import {Route,Routes} from 'react-router-dom';
import IndexPage from './pages/indexpage.jsx';
import LoginPage from './pages/loginpage.jsx';
import RegisterPage from './pages/registerpage.jsx';
import AccountPage from './pages/account.jsx';
import Accordion from './pages/accordian';
//import Deletepage from './delete.jsx';
import Layout from './layout';
import axios from 'axios';
import { useEffect } from 'react';
import { UserContextProvider } from './UserContext.jsx';
import ProductsPage from './pages/productspage.jsx';
import ProductsFormPage from './pages/productsformpage.jsx';
import ProductPage from './pages/productpage.jsx';
import OrdersPage from './pages/orderspage.jsx';
import BuyingPage from './pages/buying.jsx';
axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials=true;
function App() {
  const sections = [
    {
      title: '+ What is the concept behind "One District, One Product" (ODOP)?',
      content: " 'One District, One Product' (ODOP) is a development strategy that aims to promote and strengthen the rural economy in India. It was launched by the government of Uttar Pradesh, one of India's largest states, in 2018. The core concept behind ODOP is to identify and promote one unique product or craft from each district of the state. This product or craft is chosen based on the district's traditional expertise, resources, and skill sets."
      ,
    },
    {
      title: '+ Why should I use Artisan?',
      content: "a)Discover unique and culturally rich products. Our platform showcases one-of-a-kind items that you won't find anywhere else. b)We prioritize quality and authenticity. Each product on our platform is handcrafted with care and represents the rich heritage of the place it originated from.c)We are committed to the 'One District, One Product' initiative, which promotes economic growth and diversification at the district level. Your involvement directly supports this vision.d)Shopping on our website is easy and convenient. You can explore products from different districts, learn about their stories, and make a positive impact with every purchase.e)Our platform connects you with cottage industry products, no matter where you are in the world. Experience the beauty and culture of these regions from the comfort of your home.f)Be part of a movement that values local craftsmanship and sustainable living. Together, we can make a difference in the lives of artisans and the communities they belong to.",
    },
    {
      title: '+ Are the products on your website handmade?',
      content: " Yes, all the products featured on our website are handmade with care and craftsmanship. We take pride in promoting unique, handcrafted items that reflect our commitment to quality and creativity. Each product is made by skilled artisans who pour their passion and expertise into every piece. Thank you for supporting handmade craftsmanship!"
      ,
    },
    {
      title: '+ Can I learn more about the artisans and their stories?',
      content: " Yes, we believe in celebrating the artisans behind our handmade products. You can explore the inspiring stories and backgrounds of our talented artisans with every product. There, you'll discover the unique journeys, skills, and cultural influences that shape their creations. We're proud to share their stories with you as part of our commitment to transparency and the appreciation of craftsmanship."
      ,
    },
    {
      title: '+ Can I trust the quality of the products?',
      content: " Absolutely! At Artisan, we take quality seriously. We provide certificates of authentication for all our products, ensuring that you receive genuine and high-quality items. These certificates serve as a testament to the authenticity and craftsmanship of our offerings. We are committed to maintaining the highest standards, and our rigorous authentication process guarantees your satisfaction. Your trust in our products is of utmost importance to us."
      ,
    },
    {
      title: '+ Is there a return policy?',
      content: " Yes, we have a hassle-free return policy in place. We want you to be completely satisfied with your purchase. If, for any reason, you are not happy with your order, please review our 'Return Policy' page for detailed information on how to initiate a return or exchange. We're here to assist you in making your shopping experience enjoyable and worry-free."
      ,
    },
    {
      title: '+ How do I contact your customer support team?',
      content: " a)Email:You can send us an email at [artisan2023@gmail.com] with your questions, concerns, or inquiries.b)Contact Form: You can also use the 'Contact Us' form on our website. Simply fill out the form with your details and message, and we'll get back to you promptly.We're committed to providing excellent customer service, and our team is ready to assist you with any questions or issues you may have."
      ,
    }
    // Add more sections as needed
  ];

  return (
    <UserContextProvider>
    
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/account" element={<AccountPage/>}/>
      <Route path="/account/products" element={<ProductsPage/>}/>
      <Route path="/account/products/new" element={<ProductsFormPage/>}/>
      <Route path="/account/products/:id" element={<ProductsFormPage/>}/>
      <Route path="/products/:id" element={<ProductPage/>}/>
      <Route path="/account/orders" element={<OrdersPage/>}/>
      <Route path="/account/orders/:id" element={<OrdersPage/>}/>
     
        </Route>
      
    </Routes>
    {/* <div className='flex flex-col items-center justify-center mx-8 my-4'> <Accordion sections={sections} /></div> */}

    </UserContextProvider>
    
  )
}

export default App


