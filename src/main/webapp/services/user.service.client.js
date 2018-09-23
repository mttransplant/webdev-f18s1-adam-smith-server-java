// import "../models/user.model.client.js";

let defaultUsers = [
    {
        "id": "1537734567871",
        "username": "alice",
        "password": "alice",
        "email": "alice@wonderland.com",
        "firstName": "Alice",
        "lastName": "Wonderland",
        "role": "FACULTY"
    },
    {
        "id": "1537734573696",
        "username": "bob",
        "password": "bob",
        "email": "bob@builder.com",
        "firstName": "Bob",
        "lastName": "Builder",
        "role": "STUDENT"
    },
    {
        "id": "1537734637529",
        "username": "charly",
        "password": "charly",
        "email": "charly@peanuts.com",
        "firstName": "Charly",
        "lastName": "Brown",
        "role": "STUDENT"
    }
]

function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    // this.url = 'http://localhost:8080/api/user';
    // let usersFile = import ("../models/users.json");
    var self = this;
    // var users = [User];
    // users = loadUsers(usersFile);

    // function loadUsers(file) {
    //     return JSON.parse(file);
    // }
    function createUser(user, callback) {

    }
    function findAllUsers() {
        return defaultUsers;
    }
    function findUserById(userId, callback) {

    }
    function updateUser(userId, user, callback) {

    }
    function deleteUser(userId, callback) {

    }
}