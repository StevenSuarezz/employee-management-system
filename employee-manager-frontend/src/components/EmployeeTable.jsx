import React, { useState } from "react"
import { useEffect } from "react";
import { getEmployees } from "../controller/EmployeeController";

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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeTable;