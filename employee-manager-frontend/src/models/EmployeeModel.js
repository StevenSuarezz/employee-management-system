function createEmployeeModel(data) {
    const employee = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
    }

    return employee;
}

export { createEmployeeModel };