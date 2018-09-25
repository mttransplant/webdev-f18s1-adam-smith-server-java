function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.findUsersBySearch = findUsersBySearch;
    // this.url = 'http://localhost:8080/api/user';
    var users = [];
    // users = defaultUsers;
    $.getJSON("../services/users.json",function (json) {
        console.log(json);
        users = json.map(userJSON => new User(userJSON.id,userJSON.username,userJSON.password,userJSON.firstName,userJSON.lastName,userJSON.role));
        console.log(users);
    });
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
        // FIXED: add flexible search
        // Use values of fields as occurring in the search items, e.g.,
        //username = "alice" returns all users with "alice" anywhere in their username
        //Example user[i].username.indexOf(usernameSearchFld) > 0

        var result = users.filter(function(item) {
            // console.log("Params: "+params);
            // console.log("Item: "+item);
           for (var key in params) {
               console.log(key);
               console.log(params[key]);
               console.log(item[key]);
               // if (item[key] === undefined || item[key] != params[key])
               if (item[key] === undefined || item[key].indexOf(params[key]) != 0)
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