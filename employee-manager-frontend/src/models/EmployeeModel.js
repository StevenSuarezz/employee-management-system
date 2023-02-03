function createEmployeeModel(_firstName="", _lastName="", _email="") {
    const employee = {
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
    }

    return employee;
}

export { createEmployeeModel };