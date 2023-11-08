import HeaderDropdown from './HeaderDropdown';
import '../assets/css/global.css'
import '../assets/css/AppHeader.css';
import {Link, useLocation} from 'react-router-dom';
import {FaUser,FaShoppingCart} from 'react-icons/fa';
import {CategoryItem} from "../types"
import {useContext} from "react";
import {Category} from "../contexts/CategoryContext";
import {CartStore} from "../contexts/CartContext";


function AppHeader(){
    const categories = useContext<CategoryItem[]>(Category);
    const {cart} =useContext(CartStore);
    const cartQuantity = cart.reduce((total, item) => total + item.quantity,0 );
    console.log("Cart Quantity",cartQuantity);

    return(

        <header className="container">

            {/*<section className="title-and-search-bar">*/}
            {/*<h1>*/}
            {/*  <Link to="/" className="text-logo"> Another Bookstore </Link>*/}
            {/*</h1>*/}
            <section className="left-header">
                {/*<div className="header-dropdown">*/}
                {/*    <button className="button">Categories <FaCaretDown/></button>*/}
                {/*    <ul>*/}
                {/*        <li><a href="category.html?category=Fiction">Fiction</a></li>*/}
                {/*        <li><a href="category.html?category=Fantasy">Fantasy</a></li>*/}
                {/*        <li><a href="category.html?category=Classics">Inspirational</a></li>*/}
                {/*        <li><a href="category.html?category=Classics">Sci-Fi</a></li>*/}
                {/*        <li><a href="category.html?category=Classics">Comics</a></li>*/}
                {/*        <li><a href="category.html?category=Classics">Best Sellers</a></li>*/}
                {/*        <li><a href="category.html?category=Classics">A - Z</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <HeaderDropdown/>
            </section>
            <section className="mid-header">

                <Link to="/">
                    <img
                        src={require('../assets/images/site/logo.png')}
                        alt="Legit Bookstore Logo"
                        width="140px"
                        height="auto"

                    />
                </Link>

            </section>
            <section className="right-header">
                <button className="button login-button">
                    <FaUser fontSize={"1.4em"}/>
                    <text>login</text>
                </button>
                <span className={"cart-container"}>
            <button className="button cart-button">
                 {/*style={{"display: grid"}}>*/}
                <FaShoppingCart fontSize={"1.4em"}/>
                <span> cart </span>
                {/*style="font-size: xx-large; position: relative; text-align: justify; ">*/}
                <span className="cart-count-display">{cartQuantity}</span>
                {/*}<!-- style="font-size: x-large; position: absolute; text-align: justify;  color:black; font-weight: bold;" -->*/}
            </button> </span>

            </section>

            {/*// <form action="">*/}
            {/*//     <input type="text" className="search-bar" /><br />*/}
            {/*//     <input type="submit" className="button search-button" value="Search" />*/}
            {/*//   </form>*/}
            {/*// </section>*/}
            {/*// <section className="header-dropdown-and-cart">*/}
            {/*//   <button className="button">cart (0)</button>*/}
            {/*//   <button className="button">login</button>*/}
            {/*//   <HeaderDropdown />*/}
            {/*</section>*/}
        </header>
    )
}
export default AppHeader;

