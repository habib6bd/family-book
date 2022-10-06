import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const title = "To Do Title"
const description = "This is my description. Here I have everyting i have input"
const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const currentYear = date.getFullYear();
console.log(date);

// const headingStyle = {
//     backgroundColor: "purple",
//     padding: "15px",
//     fontSize: "2em",
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <h1 className='headingStyle'>Welcome to My Family</h1> 
    <h3>{title}</h3>
    <p>{description}</p>
    <p>{dateName + "/" + dateMonth +"/" + currentYear}</p>
    </div>
);

