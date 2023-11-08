
// import HomeCategoryList from './HomeCategoryList';
import '../assets/css/global.css';
import '../assets/css/Home.css'
import {FaSearch} from 'react-icons/fa'
// import HomePageBook from "./HomePageBook";
import {FaCircleInfo} from "react-icons/fa6";
import {useLocation, useNavigate} from "react-router-dom";
import {CategoryItem} from "../types"
import {SharedProvider, useSharedContext} from "../contexts/SharedContext";
import {Category} from "../contexts/CategoryContext";
import {useContext} from "react";



function Home() {
    const categories = useContext<CategoryItem[]>(Category);
    const navigate = useNavigate();
    const { sharedValue, setSharedValue } = useSharedContext();
    const handleUpdate = (itemName: string) => {
        setSharedValue(itemName);
    };

    return (
        <SharedProvider>
            <div className="home-pages">
                <section className="search-bar">
                    <div className="search-container">
                        <form action="">
                            <input type="text" className="search-input" placeholder="Search by Title or Author" />
                            <button type="submit" className="search-icon">
                                <FaSearch/>
                            </button>


                            {/*<br />*/}

                        </form>
                    </div>
                </section>
                <section className="new-release-container">
                    <h3 style={{textAlign:"center", paddingTop: 10}}>
                        {/*style="text-align:center; padding-top: 10px;">*/}
                        Releasing Soon
                    </h3>
                    <div>
                        <div className="category-image-items">
                            <a>
                                {/*<div className={"book-container"}>*/}
                                <img
                                    src={require('../assets/images/books/new1.gif')}
                                    alt="Classics category"
                                    width="135px"
                                    height="auto"
                                />
                                {/*<button className="button add-to-cart">Add to Cart*/}
                                {/*    <i className="icon-shopping-cart"></i>*/}
                                {/*</button>*/}
                                {/*<button className="button home-read-now" >More info*/}
                                {/*    <FaCircleInfo/>*/}
                                {/*</button>*/}
                                {/*</div>*/}

                            </a>

                            <a>

                                <img
                                    src={require('../assets/images/books/new2.gif')}
                                    alt="Fantasy category"
                                    width="135px"
                                    height="auto"
                                />
                                {/*<button className="button add-to-cart">Add to Cart*/}
                                {/*    <i className="icon-shopping-cart"></i>*/}
                                {/*</button>*/}
                                {/*<button className="button home-read-now" >More info*/}
                                {/*    <FaCircleInfo/>*/}
                                {/*</button>*/}

                            </a>
                            <a>
                                <img
                                    src={require('../assets/images/books/new3.gif')}
                                    alt="Mystery category"
                                    width="135px"
                                    height="auto"
                                />
                                {/*<button className="button add-to-cart">Add to Cart*/}
                                {/*    <i className="icon-shopping-cart"></i>*/}
                                {/*</button>*/}
                                {/*<button className="button home-read-now" >More info*/}
                                {/*    <FaCircleInfo/>*/}
                                {/*</button>*/}

                            </a>
                            <a>
                                <img
                                    src={require('../assets/images/books/new4.gif')}
                                    alt="Romance category"
                                    width="135px"
                                    height="auto"
                                />

                            </a>
                        </div>

                    </div>
                </section>
                <section className="cta-container">
                    <button className="button shop-books" onClick={()=>{ handleUpdate('Best Sellers');
                        navigate('/categories/Best Sellers');}}>SHOP ALL BOOKS
                    </button>
                </section>

            </div>
        </SharedProvider>


    )
}

export default Home;
