import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createEmployee } from "../controllers/EmployeeController";
import { createEmployeeModel } from "../models/EmployeeModel";

function EmployeeCreation() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let employee = createEmployeeModel(firstName, lastName, email);
        console.log("Employee => " + JSON.stringify(employee));

        createEmployee(employee).then(res => {
            navigate("/employees");
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" name="firstName" placeholder="First Name" 
                                    className="form-control" value={firstName} onChange={firstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" placeholder="Last Name"
                                    className="form-control" value={lastName} onChange={lastNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="text" name="email" placeholder="Email Address"
                                    className="form-control" value={email} onChange={emailHandler} />
                                </div>
                                <div className="mt-2">
                                    <button className="btn btn-success" type="submit">Save</button>
                                    <Link to="/">
                                        <button className="btn btn-danger mx-2">Cancel</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCreation;