import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../controllers/EmployeeController";
import { createEmployeeModel } from "../models/EmployeeModel";

function EmployeeView() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getEmployeeById(id).then(res => {
            const employee = createEmployeeModel(res.data);
            setEmployee(employee);
        })
    }, []);

    return (
        <div>
            <div className="card col-md-6 offset-md-3 mt-4">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Employee First Name:</label>
                        <div>{employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label>Employee Last Name:</label>
                        <div>{employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label>Employee Email:</label>
                        <div>{employee.email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeView;