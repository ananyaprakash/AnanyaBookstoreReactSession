import '../assets/css/global.css'
import '../assets/css/HeaderDropdown.css';
// import {categoryList} from '../types';types
import {Link, useLocation} from 'react-router-dom';
import {FaCaretDown} from "react-icons/fa";
import {CategoryItem} from "../types";
import {useContext, useState} from "react";
import {SharedProvider, useSharedContext} from "../contexts/SharedContext";
import {Category} from "../contexts/CategoryContext";



function HeaderDropdown() {
    const categories = useContext<CategoryItem[]>(Category);
    const { sharedValue, setSharedValue } = useSharedContext();

    const handleUpdate = (itemName: string) => {
        setSharedValue(itemName);
    };

    const location = useLocation();

    const isRouteActive = (route: string) => location.pathname ===route;
    return (

        <SharedProvider>
            <div className="header-dropdown">
                <button className="button categories-button">Categories <FaCaretDown/></button>
                {isRouteActive("/") && (<ul>
                    {categories.map((item) =>    <li>
                        <Link to ={`/categories/${item.name}`} onClick={()=>{handleUpdate(item.name)}} >
                            {item.name}</Link></li>)}

                </ul>)}

            </div>
        </SharedProvider>

    )
}
export default HeaderDropdown

