import { SliderThumb } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

function DetailedCocktail(props) {
  const { id } = useParams();

  const [reload, setReload] = useState("unloaded");

  setTimeout(() => {
    console.log(props.arr);
  }, 5000);

  console.log(reload);
  props.arr
    ? (props.arr.drinks.map = (obj, i) => {
        console.log(obj);
        return obj.idDrink === id;
      })
    : console.log("chciekn");
  console.log(id);
  return <div></div>;
}

export default DetailedCocktail;
