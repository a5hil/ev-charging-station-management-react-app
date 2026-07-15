import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ViewBookings = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post('http://localhost:3000/view-all').then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error fetching data")
            }
        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">View Bookings</h2>
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Booking ID</th>
                            <th scope="col">Owner Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Vehicle Reg No</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Model</th>
                            <th scope="col">Battery Capacity(kWh)</th>
                            <th scope="col">Connector Type</th>
                            <th scope="col">Charging Date</th>
                            <th scope="col">Time Slot</th>
                            <th scope="col">Estimated Units(kWh)</th>
                            <th scope="col">Charging Bay No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                            (value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{value.bookingId}</th>
                                        <td>{value.ownerName}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.vehicleRegNo}</td>
                                        <td>{value.vehicleBrand}</td>
                                        <td>{value.vehicleModel}</td>
                                        <td>{value.batteryCapacity}</td>
                                        <td>{value.connectorType}</td>
                                        <td>{value.chargingDate}</td>
                                        <td>{value.timeSlot}</td>
                                        <td>{value.estimatedUnits}</td>
                                        <td>{value.chargingBayNo}</td>
                                    </tr>
                                )
                            }
                        )}                                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewBookings