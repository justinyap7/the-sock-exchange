import React, { useState } from 'react';
import './Form.css';

const AddSock = (props) => {
    const [inputData, setInputData] = useState({
        userId: "",
        sockDetails: {
            size: "",
            color: "",
            pattern: "",
            material: "",
            condition: "New",
            forFoot: "Left"
        },
        additionalFeatures: {
            waterResistant: false,
            padded: false,
            antiBacterial: false,
        },
        addedTimestamp: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add the current timestamp
        const submission = {
            ...sockData,
            addedTimestamp: new Date().toISOString(),
        };
        try {
            // TODO: Make a POST request to the API to add the sock
            const response = await fetch(`${import.meta.env.VITE_SOCKS_API_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submission),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            // Handle post submission logic (like showing a success message)
        } catch (error) {
            console.error("Error posting data", error);
            // Handle errors here
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name in inputData.sockDetails) {
            setInputData({
                ...inputData,
                sockDetails: { ...inputData.sockDetails, [name]: value },
            });
        } else if (name in inputData.additionalFeatures) {
            setInputData({
                ...inputData,
                additionalFeatures: {
                    ...inputData.additionalFeatures,
                    [name]: type === "checkbox" ? checked : value,
                },
            });
        } else {
            setInputData({
                ...inputData,
                [name]: value,
            });
        }
    };

    return (
        <div className="form-container">

            <form className="p-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userId" className="form-label">User ID</label>
                    <input
                        type="text"
                        className="form-input"
                        id="userId"
                        name="userId"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group" >
                    <label htmlFor="size" className="form-label">Size</label>
                    <select
                        className="form-input"
                        id="size"
                        name="size"
                        onChange={handleChange}
                    >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="color" className="form-label">Color</label>
                    <input
                        type="text"
                        className="form-input"
                        id="color"
                        name="color"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group" >
                    <label htmlFor="pattern" className="form-label">Pattern</label>
                    <input
                        type="text"
                        className="form-input"
                        id="pattern"
                        name="pattern"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="material" className="form-label">Material</label>
                    <input
                        type="text"
                        className="form-input"
                        id="material"
                        name="material"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="condition" className="form-label">Condition</label>
                    <select
                        className="form-input"
                        id="condition"
                        name="condition"
                        onChange={handleChange}
                    >
                        <option>Used</option>
                        <option>New</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="forFoot" className="form-label">For Foot</label>
                    <select
                        className="form-input"
                        id="forFoot"
                        name="forFoot"
                        onChange={handleChange}
                    >
                        <option>Left</option>
                        <option>Right</option>
                        <option>Both</option>
                    </select>
                </div>
                <div className="row">
                    <div className="form-check col">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="waterResistant"
                            name="waterResistant"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="waterResistant">
                            Water Resistant
                        </label>
                    </div>
                    <div className="form-check col">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="padded"
                            name="padded"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="padded">
                            Padded
                        </label>
                    </div>
                    <div className="form-check col">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="antiBacterial"
                            name="antiBacterial"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="antiBacterial">
                            Anti Bacterial
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddSock;