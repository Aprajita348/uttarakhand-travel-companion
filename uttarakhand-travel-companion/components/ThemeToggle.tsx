"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle(){

const [dark,setDark]=useState(false);

useEffect(()=>{

const saved=
localStorage.getItem("theme");

if(saved==="dark"){
document.documentElement.classList.add("dark");
setDark(true);
}

},[]);

const toggleTheme=()=>{

if(dark){

document.documentElement.classList.remove("dark");

localStorage.setItem(
"theme",
"light"
);

}else{

document.documentElement.classList.add("dark");

localStorage.setItem(
"theme",
"dark"
);

}

setDark(!dark);

};

return(

<button
onClick={toggleTheme}
className="
bg-black
text-white
px-4
py-2
rounded
"
>

{dark?"☀️ Light":"🌙 Dark"}

</button>

);

}