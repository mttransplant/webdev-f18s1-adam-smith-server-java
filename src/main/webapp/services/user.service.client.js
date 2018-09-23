function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    // this.url = 'http://localhost:8080/api/user';
    var self = this;

    function createUser(user, callback) {

    }
    function findAllUsers() {
        return [
            {
                "username": "alice",
                "password": "alice",
                "email": "alice@wonderland.com",
                "firstName": "Alice",
                "lastName": "Wonderland",
                "role": "FACULTY"
            },
            {
                "username": "bob",
                "password": "bob",
                "email": "bob@builder.com",
                "firstName": "Bob",
                "lastName": "Builder",
                "role": "STUDENT"
            },
            {
                "username": "charly",
                "password": "charly",
                "email": "charly@peanuts.com",
                "firstName": "Charly",
                "lastName": "Brown",
                "role": "STUDENT"
            }
        ]
    }
    function findUserById(userId, callback) {

    }
    function updateUser(userId, user, callback) {

    }
    function deleteUser(userId, callback) {

    }
}