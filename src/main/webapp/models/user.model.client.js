function User(id, username, password, firstName, lastName, role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = "";
    this.phone = "";
    this.dateOfBirth = "";
    // ...same for rest of properties…
    var self = this;

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.setFirstName = setFirstName;
    this.getFirstName = getFirstName;
    this.setLastName = setLastName;
    this.getLastName = getLastName;
    this.setEmail = setEmail;
    this.getEmail = getEmail;
    this.setPhone = setPhone;
    this.getPhone = getPhone;
    this.setRole = setRole;
    this.getRole = getRole;
    this.setDateOfBirth = setDateOfBirth;
    this.getDateOfBirth = getDateOfBirth;

    // ...same for rest of properties…

    function setUsername(username) {
        self.username = username;
    }
    function getUsername() {
        return self.username;
    }

    function setPassword(password) {
        self.password = password;
    }
    function getPassword() {
        return self.password;
    }

    function setFirstName(firstName) {
        self.firstName = firstName;
    }
    function getFirstName() {
        return self.firstName;
    }

    function setLastName(lastName) {
        self.lastName = lastName;
    }
    function getLastName() {
        return self.lastName;
    }

    function setEmail(email) {
        self.email = email;
    }
    function getEmail() {
        return self.email;
    }

    function setPhone(phone) {
        self.phone = phone;
    }
    function getPhone() {
        return self.phone;
    }

    function setRole(role) {
        self.role = role;
    }
    function getRole() {
        return self.role;
    }

    function setDateOfBirth(dateOfBirth) {
        self.dateOfBirth = dateOfBirth;
    }
    function getDateOfBirth() {
        return self.dateOfBirth;
    }
    // ...same for rest of properties…
}