import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Divider from './components/Divider'
import data from './data.js'

export default function App() {
    const cards = data.map(item => {
        return (
                <Card
                    key={item.title} 
                    item={item}
                />
        )
    })
    return (
        <div className="container">
            <Header />
            <div>
                {cards}
            </div>
        </div>
    )
}