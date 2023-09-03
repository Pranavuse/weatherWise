/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Hourly() {
  return (
    <div className="d-flex justify-content-between mb-4">
        <div className="text-center">
          <p>12:00 PM</p>
          <img src="weather-icon.png"  width="30"/>
          <p>26°C</p>
        </div>
        <div className="text-center">
          <p>1:00 PM</p>
          <img src="weather-icon.png" width="30"/>
          <p>27°C</p>
        </div>
        <div className="text-center">
          <p>2:00 PM</p>
          <img src="weather-icon.png" width="30"/>
          <p>28°C</p>
        </div>
        <div className="text-center">
          <p>3:00 PM</p>
          <img src="weather-icon.png" width="30"/>
          <p>27°C</p>
        </div>
      </div>
  )
}
