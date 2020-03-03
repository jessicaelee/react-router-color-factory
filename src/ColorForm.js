import React, { useState } from 'react';

function ColorForm({ addColor }) {
    const INITIAL_STATE = { color: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color: </label>
                <input id="color" name="color" value={formData.color} onChange={handleChange} type="text" required /> <br />
                <button >Add Color</button>
            </form>
        </div>
    );
};

export default ColorForm;