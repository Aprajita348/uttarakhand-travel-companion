"use client";

import { toast } from "react-hot-toast";

export default function Toast(){

const showToast=()=>{

toast.success(
"Search completed"
);

};

return(

<button
onClick={showToast}
className="
bg-green-500
text-white
px-4
py-2
rounded
"
>

Show Toast

</button>

);

}