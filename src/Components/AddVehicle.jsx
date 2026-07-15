import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import axios from 'axios'

const AddVehicle = () => {

    const [input, changeInput] = useState(
        {
            bookingId: "",
            ownerName: "",
            email: "",
            phone: "",
            vehicleRegNo: "",
            vehicleBrand: "",
            vehicleModel: "",
            batteryCapacity: "",
            connectorType: "",
            chargingDate: "",
            timeSlot: "",
            estimatedUnit: "",
            chargingBayNo: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post('http://localhost:3000/add-vehicle', input).then(
            (response) => {
                console.log(response.data)
                alert("Vehicle added successfully")
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error adding vehicle")
            }
        )
    }

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Vehicle Booking</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Booking ID</label>
                                <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler} placeholder="Enter Booking ID" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Name</label>
                                <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} placeholder="Enter Owner Name" />                                  
                            </div>                         
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} placeholder="Enter Email" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} placeholder="Enter Phone" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Registration Number</label>
                                <input type="text" className="form-control" name="vehicleRegNo" value={input.vehicleRegNo} onChange={inputHandler} placeholder="Enter Registration Number" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Brand</label>
                                <input type="text" className="form-control" name="vehicleBrand" value={input.vehicleBrand} onChange={inputHandler} placeholder="Enter Vehicle Brand" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Model</label>
                                <input type="text" className="form-control" name="vehicleModel" value={input.vehicleModel} onChange={inputHandler} placeholder="Enter Vehicle Model" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Battery Capacity(kWh)</label>
                                <input type="text" className="form-control" name="batteryCapacity" value={input.batteryCapacity} onChange={inputHandler} placeholder="Enter Battery Capacity" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Connector Type</label>
                                <input type="text" className="form-control" name="connectorType" value={input.connectorType} onChange={inputHandler} placeholder="Enter Connector Type" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Charging Date</label>
                                <input type="date" className="form-control" name="chargingDate" value={input.chargingDate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Time Slot</label>
                                <input type="text" className="form-control" name="timeSlot" value={input.timeSlot} onChange={inputHandler} placeholder="Enter Time Slot" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Estimated Units(kWh)</label>
                                <input type="number" className="form-control" name="estimatedUnits" value={input.estimatedUnits} onChange={inputHandler} placeholder="Enter Estimated Units" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Charging Bay Number</label>
                                <input type="tel" className="form-control" name="chargingBayNo" value={input.chargingBayNo} onChange={inputHandler} placeholder="Enter Charging Bay Number" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-dark" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AddVehicle