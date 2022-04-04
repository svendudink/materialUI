import { useEffect } from "react";
import { useState } from "react";

function Ingredients(props) {
  console.log('props', props)


  
  const [ingredientsObj, setIngredientsObj] = useState({})


  // useEffect(() => {
  //   for(const objKey  in props.single[0]){
    
  //     if((objKey.includes("strIngredient") || objKey.includes("strMeasure") ) && props.single[0][objKey] !== null){
  //       console.log('props.single[0].objKey', props.single[0][objKey])
  //       setIngredientsObj({...ingredientsObj, objKey: props.single[0][objKey]})
  //     }
  //   }
  
  // }, [])
  
  

console.log('ingredientsObj', ingredientsObj)
  let ingrArr = "";
  for (let i = 1; i < 15; i++) {
    let temp = eval(`props.single[0].strIngredient${i}`);
    let temp2 = eval(`props.single[0].strMeasure${i}`);
    if (temp === null) {
      break;
    } else {
      ingrArr = ingrArr + `${temp2 === null ? "" : `${temp2} of`} ${temp}, `;
    }
  }

  return <div>{ingrArr}</div>;
}

export default Ingredients;
