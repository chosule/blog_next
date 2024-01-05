'use client';
import { useRef } from "react"

const Test = () => {   
    const ref = useRef(null);
    const text = ref.current?.querySelector("code")?.innerText;
        console.log('text?',text);
     return(
        <div></div>
     )
}


export default Test