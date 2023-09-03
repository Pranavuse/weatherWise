/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Daily() {
  return (
    <div className="d-flex justify-content-between">
        <div className="text-center">
          <p className='fw-bold'>Monday</p>
          <img src="weather-icon.png"  width="30"/>
          <p>28°C</p>
        </div>
        <div className="text-center">
          <p className='fw-bold'>Tuesday</p>
          <img src="weather-icon.png"  width="30"/>
          <p>29°C</p>
        </div>
        <div className="text-center">
          <p className='fw-bold'>Wednesday</p>
          <img src="weather-icon.png"  width="30"/>
          <p>27°C</p>
        </div>
        <div className="text-center">
          <p className='fw-bold'>Thursday</p>
          <img src="weather-icon.png"  width="30"/>
          <p>25°C</p>
        </div>
      </div>
  )
}
