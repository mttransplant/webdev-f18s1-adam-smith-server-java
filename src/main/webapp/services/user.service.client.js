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
    this.findUsersBySearch = findUsersBySearch;
    // this.url = 'http://localhost:8080/api/user';
    // let usersFile = import ("../models/users.json");
    // var user = new User();
    var users = [];
    users = defaultUsers;
    var self = this;

    function createUser(user, callback) {
        users.push(user);
        callback;
    }
    function findAllUsers(callback) {
        return users;
        callback;
    }
    function findUserById(userId, callback) {
        for (var i in users) {
            if (users[i].id === userId) {
                return users[i];
            }
        }
        callback;
    }
    function findUsersBySearch(params) {
        var result = users.filter(function(item) {
           for (var key in params) {
               if (item[key] === undefined || item[key] != params[key])
                   return false;
           }
           return true;
        });
        return result;
    }
    function updateUser(userId, user, callback) {
        var userForUpdates = findUserById(userId);
        userForUpdates.username = user.username;
        userForUpdates.password = user.password;
        userForUpdates.firstName = user.firstName;
        userForUpdates.lastName = user.lastName;
        userForUpdates.role = user.role;
        callback;
    }
    function deleteUser(userId, callback) {
        for (var i in users) {
            if (users[i].id === userId) {
                users.splice(i,1);
            }
        }
        callback;
    }
}