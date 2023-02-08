import React, { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getEmployees } from "../controllers/EmployeeController";

function EmployeeTable(props) {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, [])

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <Link to="/employee-form/-1">
                <button className="btn btn-primary">Add Employee</button>
            </Link>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee => <tr key = {employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <Link to={`/employee-form/${employee.id}`}><button className="btn btn-info">Update</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeTable;