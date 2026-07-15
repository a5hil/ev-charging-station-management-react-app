import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import axios from 'axios'

const AddVehicle = () => {

    const [input, changeInput] = useState(
        {
            teamId: "",
            teamName: "",
            teamLeaderName: "",
            leaderEmail: "",
            leaderPhone: "",
            collegeName: "",
            numberOfMembers: "",
            projectTitle: "",
            problemStatement: "",
            technologyStack: "",
            mentorName: "",
            registrationDate: "",
            stationNumber: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post('http://localhost:3000/add-team', input).then(
            (response) => {
                console.log(response.data)
                alert("Team added successfully")
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error adding team")
            }
        )
    }

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Team Management</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Team ID</label>
                                <input type="text" className="form-control" name="teamId" value={input.teamId} onChange={inputHandler} placeholder="Enter Team ID" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Team Name</label>
                                <input type="text" className="form-control" name="teamName" value={input.teamName} onChange={inputHandler} placeholder="Enter Team Name" />                                  
                            </div>                         
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Team Leader Name</label>
                                <input type="text" className="form-control" name="teamLeaderName" value={input.teamLeaderName} onChange={inputHandler} placeholder="Enter Team Leader Name" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Leader Email</label>
                                <input type="email" className="form-control" name="leaderEmail" value={input.leaderEmail} onChange={inputHandler} placeholder="Enter Leader Email" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Leader Phone</label>
                                <input type="tel" className="form-control" name="leaderPhone" value={input.leaderPhone} onChange={inputHandler} placeholder="Enter Leader Phone" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College Name</label>
                                <input type="text" className="form-control" name="collegeName" value={input.collegeName} onChange={inputHandler} placeholder="Enter College Name" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Number of Members</label>
                                <input type="number" className="form-control" name="numberOfMembers" value={input.numberOfMembers} onChange={inputHandler} placeholder="Enter Number of Members" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Project Title</label>
                                <input type="text" className="form-control" name="projectTitle" value={input.projectTitle} onChange={inputHandler} placeholder="Enter Project Title" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Problem Statement</label>
                                <textarea className="form-control" name="problemStatement" value={input.problemStatement} onChange={inputHandler} placeholder="Enter Problem Statement"></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Technology Stack</label>
                                <input type="text" className="form-control" name="technologyStack" value={input.technologyStack} onChange={inputHandler} placeholder="Enter Technology Stack" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mentor Name</label>
                                <input type="text" className="form-control" name="mentorName" value={input.mentorName} onChange={inputHandler} placeholder="Enter Mentor Name" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Registration Date</label>
                                <input type="date" className="form-control" name="registrationDate" value={input.registrationDate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Table/Station Number</label>
                                <input type="tel" className="form-control" name="stationNumber" value={input.stationNumber} onChange={inputHandler} placeholder="Enter Table/Station Number" />
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