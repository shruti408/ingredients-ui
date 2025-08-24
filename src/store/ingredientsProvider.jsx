import { useState } from "react";
import IngredientsContext from './ingredients.jsx'
 
 export const IngredientsProvider = ({ children }) => {
  const [ingredientData, setIngredientData] = useState({
    ingredientName: "",
    scientificName: "",
    sanskritName: "",
    description: "",
    ingredientImage: null,
    whyToUse: [],
    prakritiImpact: {
      vata: { value: "", reason: "" },
      kapha: { value: "", reason: "" },
      pitta: { value: "", reason: "" }
    },
    benefits: [{ emoji: "", benefit: "" }],
    ayurvedicProperties: {
      rosa: "",
      veerya: "",
      guna: "",
      vipaka: ""
    },
    formulations: [{ icon: "", description: "" }],
    uses: [],
    plant: [[{ part: "", description: "" }]],
    bestCombinedWith: "",
    geographicalLocation: ""
  });

  // 👉 Save partial data from a step into global state
  const savePageData = (pageKey, data) => {
    setIngredientData((prev) => ({
      ...prev,
      [pageKey]: data
    }));
  };

  // 👉 Submit full form
  const submitForm = () => {
    console.log("Submitting ingredient:", ingredientData);
    // here call API createIngredient(ingredientData)
  };

  return (
    <IngredientsContext.Provider
      value={{ ingredientData, savePageData, submitForm }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
 