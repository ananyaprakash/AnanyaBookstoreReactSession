import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'
import CategoryBookList from './components/CategoryBookList';
import axios from "axios";
import { SharedProvider, useSharedContext } from './contexts/SharedContext';

import {
    BrowserRouter as Router,
    Routes,
    Route, useParams,
} from "react-router-dom"
import {useState, useEffect} from "react";
import {cartReducer} from "./reducers/CartReducer";
import {initialCartState} from "./types";


function App() {
    const [categories, setCategories]  = useState([]);
    useEffect(() => {
        axios.get('/AnanyaBookstoreReactState/api/categories')
            .then((result) => setCategories(result.data ))
            .catch(console.error);
    }, []);
    // console.log({catId})


    return (
        <Router basename={"AnanyaBookstoreReactState"}>
            <SharedProvider>
                <AppHeader />
                <Routes> home
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<CategoryBookList />} >
                        <Route path =":catId" element={<CategoryBookList />}/>
                    </Route>

                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>

                <AppFooter />
            </SharedProvider>

        </Router>
    );
}

export default App;

