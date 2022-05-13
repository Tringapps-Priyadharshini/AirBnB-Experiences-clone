import React from "react"
import Herophotos from '../assets/grid.png'
import '../assets/GridImage.css'
export default function GridImage() {
  return (
    <section className="photo-grid">
      <img src={Herophotos} alt="Hero_photos" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}