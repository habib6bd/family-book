import React from "react";
import Card from "./components/Card";

function App() {
    return <div>
        <h1 className='headingStyle'>Welcome to My Family</h1>
        <Card titleText="Call Mother" desText="This is des1"/>
        <Card titleText="Call Father" desText="This is des2"/>
        <Card titleText="Call Sister" desText="This is des3"/>
    </div>
}
export default App;