import React from "react"
import NavBar from "./components/NavBar"
import GridImage from "./components/GridImage"
import Card from "./components/Card"
import data from "./components/data"
import './App.css'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <NavBar />
            <GridImage />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}