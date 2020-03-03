import React, { useState } from 'react';
import ColorForm from "./ColorForm"

function Colors({ form }) {
    const [colors, setColors] = useState([]);
    const [addColorForm, setAddColors] = useState(false);


    const addColor = (color) => {
        setAddColors([...colors, color])
    };

    console.log(addColorForm)
    let ColorLinks = <p>Colorlinks</p>

    return (
        <div>
            {(addColorForm) ? <ColorForm addColor={addColor} /> : ColorLinks}
        </div>
    )

}

export default Colors;