import React, {useState, useEffect} from 'react'
import "./colourview.scss";

function ColorCard(props){
    return (
        <p>this is a color card</p>
    )
}


function ColourView() {

    let [colorData, setColorData] = useState(null)
    let url = "https://reqres.in/api/products/"

    useEffect(() => {
        if(colorData==null){
            fetch(url).then(res=>res.json()).then(data=>setColorData(data.data))
        }
        
    }, [colorData])


    return (
        <div className="color-wrapper">
            Colours rendered here
            {colorData && colorData.map((color,index) => {
                return <ColorCard key={index} />
            })}
        </div>
    )
}

export default ColourView
