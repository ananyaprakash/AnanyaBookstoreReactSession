import '../assets/css/CategoryBookListItem.css';
import '../types'
import "../types";
import {BookItem} from "../types";
import {FaInfoCircle,FaShoppingCart, FaBook, FaStar} from 'react-icons/fa'
import {CartStore} from '../contexts/CartContext'
import {CartTypes} from '../reducers/CartReducer'
import {useContext} from "react";
const bookImageFileName =  (book:BookItem) => {
    let name = book.title.toLowerCase();
    name = name.replace(/ /g, "-");
    name = name.replace(/'/g, "");
    return `${name}.jpg`;
};

function CategoryBookListItem(props:BookItem) {
    const  {dispatch} = useContext(CartStore);

    const addBookToCart =()=>{
        console.log("Adding book to cart", props)
        dispatch({type: CartTypes.ADD, item:props, id: props.bookId});
    };
    const book_name_path = "../assets/images/books/" + bookImageFileName(props);
    console.log(book_name_path);
    return (
        <div className={"book-boxes"}>
            <li className="book-box">
                <div className="book-image">
                    <img
                        // src={props.url}
                        src={require("../assets/images/books/" + bookImageFileName(props))}
                        alt="book.title"
                    />
                </div>
                <div className="book-title">{props.title }</div>
                <div className="book-author">{ props.author }</div>
                <div className={"book-price-rating"}>
                    <div className="book-price">${ (props.price).toFixed(2) }</div>
                    <div className="book-rating"><FaStar/>{ (props.rating).toFixed(2) }</div>
                </div>

                <button className="button add-to-cart" onClick={addBookToCart}>Add to Cart <FaShoppingCart/></button>

                {props.isPublic ? (
                        <button className="button read-now">Read Now  <FaBook/></button>)
                    :
                    (<button className="button read-now">More Info <FaInfoCircle/></button>)
                }

                {/*<button className="button read-now">Read Now <FaInfoCircle/></button>*/}
            </li>
        </div>
    )
}
export default CategoryBookListItem;
