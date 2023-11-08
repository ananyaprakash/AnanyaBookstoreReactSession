import {createContext, ReactNode, useEffect, useState} from "react";
import {CategoryItem} from "../types";
import axios from "axios";

export const Category = createContext<CategoryItem[] | []>([]);   // creates a context called Category
Category.displayName = 'CategoryContext';
interface CategoryContextProps {
    children: ReactNode;
}

function CategoryContext ({ children }: CategoryContextProps)  {
    // cut/paste the categories code here from the App component
    const [categories, setCategories]  = useState([]);


    useEffect(() => {
        axios.get('/AnanyaBookstoreReactState/api/categories')
            .then((result) => setCategories(result.data ))
            .catch(console.error);
    }, []);
    return (
        <Category.Provider value ={categories}>{children}</Category.Provider>
    );
}

export default CategoryContext;
