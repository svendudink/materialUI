function Ingredients(props) {
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
