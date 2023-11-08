import '../assets/css/CategoryNav.css'
import '../assets/css/global.css'
// import { categoryList } from '../types';
import {FaBook, FaInfoCircle} from "react-icons/fa";
import {useContext, useState} from "react";
import {CategoryItem} from "../types";
import {useLocation, useNavigate} from "react-router-dom";
import {SharedProvider, useSharedContext} from "../contexts/SharedContext";
import {Category} from "../contexts/CategoryContext";



function CategoryNav() {
  const { sharedValue, setSharedValue } = useSharedContext();
  const categories = useContext<CategoryItem[]>(Category);
  const navigate = useNavigate();
  const handleUpdate = (itemName: string) => {
    setSharedValue(itemName);
    // navigate(`/categories/${itemName}`);
  };
  // const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (itemName:any) => {
    setSharedValue(itemName);
    navigate(`/categories/${itemName}`);

  };
  // const { sharedValue, setSharedValue } = useSharedContext();
  //
  // const handleUpdate = (itemName) => {
  //   setSharedValue('New Value');
  // };

  // const location = useLocation();
  // const catName = useLocation()?.pathname.split('/').pop();
  // console.log("Category name select",catName);
  // if (catName!="") setSelectedItem(catName.toLowerCase());

  return (
      <SharedProvider>
        <nav className="category-nav"  >
          <script>console.log("selected item", selectedItem);</script>
          <ul className="category-buttons">

            {categories.map((category) => (

                category.name === sharedValue ? (
                        <li className="button selected-category-button"
                            //   onClick={()=>{
                            // setSharedValue(category.name);  navigate(`/categories/${category.name}}`);}}
                        >
                          {category.name}
                        </li>)
                    :
                    (
                        <li className="button unselected-category-button" onClick={()=>{
                          handleItemClick(category.name);}}>
                          {category.name}
                        </li>)

                // <li className="button unselected-category-button">
                //   {category.name}
                // </li>




            ))}

          </ul>
        </nav>
      </SharedProvider>
  )
}

export default CategoryNav;

