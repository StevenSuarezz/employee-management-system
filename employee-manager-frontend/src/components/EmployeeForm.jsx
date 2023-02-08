import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createEmployee } from "../controllers/EmployeeController";
import { createEmployeeModel } from "../models/EmployeeModel";
import { getEmployeeById, updateEmployee } from "../controllers/EmployeeController";

function EmployeeForm() {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        if(id == -1) return;

        getEmployeeById(id).then((res) => {
            const employee = createEmployeeModel(res.data);

            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmail(employee.email);
        });

    }, [])

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const getTitle = () => {
        if(id == -1) {
            return <h3 className="text-center mt-2">Add Employee</h3>;
        } else {
            return <h3 className="text-center mt-2">Update Employee</h3>
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const employee = createEmployeeModel({id, firstName, lastName, email});
        console.log("Employee => " + JSON.stringify(employee));

        if (id == -1) {
            createEmployee(employee).then(res => {
                navigate("/employees");
            });
        } else {
            updateEmployee(employee).then(res => {
                navigate("/employees");
            });
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-4">
                        {getTitle()}
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

export default EmployeeForm;