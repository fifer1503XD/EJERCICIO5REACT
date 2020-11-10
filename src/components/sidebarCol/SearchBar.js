import React from "react";
import{
  SearchCircleOutline
    
    } from "@graywolfai/react-heroicons";
export default function Searchbar(){
    return(
<div class="searchbar">
<div className="t-icon">{<SearchCircleOutline/>}</div>    
<input class="search" type="text" placeholder="Buscar en twitter"></input>
</div>)}
