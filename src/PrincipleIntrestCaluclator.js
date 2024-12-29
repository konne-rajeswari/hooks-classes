import { useState } from "react";

export function PricipleIntrestCaluclator() {

    const [p, setP]= useState(0);
    const [t, setT]= useState(0);
    const [r, setR]= useState(0);
    const [i, setI]= useState(0);



    const caluclatePrincipleIntrest = () => {
        const result = (p*t*r)/100;
        setI(result);
    }



    return (
    <div>
        <h1>Priciple Intrest Caluclator</h1>
        <div>
            Principle: <input type="number" onChange={e => {
                setP(e.target.value); }} />
        </div>
        <div>
            Tax: <input type="number" onChange={e => {
                setT(e.target.value); }}/>
        </div>
        <div>
            Rate:<input type="number" onChange={e => {
                setR(e.target.value); }}/>
        </div>
        <div>
            Intrest: <h1>{i}</h1>
        </div>
        <div>
            Total: <h1>{parseInt(p) + parseInt(i)}</h1>
        </div>
        <button onClick={caluclatePrincipleIntrest}>Caluclate</button>
    </div>
    )
    
}