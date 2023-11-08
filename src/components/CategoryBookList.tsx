import   '../types';
import '../assets/css/CategoryBookList.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import  "../types";
import {BookItem, CategoryItem} from "../types";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {Category} from "../contexts/CategoryContext";



function CategoryBookList() {
    const categories = useContext<CategoryItem[]>(Category);
    const {catId} = useParams ();
    console.log(`${catId}`);

    const [categoryBookList, setCategoryBookList]  = useState([]);
    useEffect(() => {
        axios.get(`/AnanyaBookstoreReactState/api/categories/name/${catId}/books/`)
            .then((response) => {
                setCategoryBookList(response.data )
            })
            .catch(console.error);
    }, [catId]);
    // const {bookId} = useParams();
    console.log(categoryBookList);
    return (
        <div className={"categories-container"}><CategoryNav />
            <ul className="book-lists">
                {categoryBookList.map((book: BookItem) => (
                    <CategoryBookListItem  bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author} rating={book.rating}  />))}
            </ul>
        </div>
    )
}

export default CategoryBookList;
