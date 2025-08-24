import IngredientsProvider from "./store/ingredients";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import AddIngredients from "./pages/AddIngredient";
import IngredientDetail from './pages/IngredientDetail';
import IngredientsList from './pages/IngredientsList';
const App = () => {

  return (
    <> 
    <IngredientsProvider>
        <Routes>
          <Route path="/" element={<IngredientsList />} />
          <Route path="/ingredients/add" element={<AddIngredients />} />
          <Route path="/ingredients/:name" element={<IngredientDetail />} />
        </Routes>
        <ToastContainer />
      </IngredientsProvider>

    </>

  );
};

export default App;
