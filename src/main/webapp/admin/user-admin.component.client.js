(function () {
    var $usernameFld, $passwordFld; // note: the $ is a clue that this variable is bound to an element in the DOM.
    // var $removeBtn, $selectBtn;
    var $createBtn, $updateBtn, $searchBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    var renderedUserId = "";
    $(main);

    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");

        $userRowTemplate = $(".wbdv-template.wbdv-user");
        $tbody = $(".wbdv-tbody");

        $searchBtn = $("#searchBtn");
        $createBtn = $("#createBtn");
        $updateBtn = $("#updateBtn");

        $searchBtn.click(search);
        $createBtn.click(createUser);
        $updateBtn.click(updateUser);

        findAllUsers();
    }
    function createUser() {
        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();
        var id = (new Date()).getTime().toString();
        clearform();

        var newUser = new User(id,username,password,firstName,lastName,role);
        userService.createUser(newUser,showUser(newUser));

    }
    function clearform() {
        $usernameFld.val("");
        $passwordFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $roleFld.val("FACULTY");
        renderedUserId = "";
    }
    function findAllUsers() {
        renderUsers(userService.findAllUsers());
        // userService.findAllUsers(renderUsers(users));
    }
    function findUserById() {
        var button = $(event.currentTarget);
        var tr = button.parents(".wbdv-template");
        var id = tr.get(0).id;


        var foundUser = userService.findUserById(id);

        renderUser(foundUser);

        // return userService.findUserById(id)
    }
    function deleteUser(event) {
        var button = $(event.currentTarget);
        var tr = button.parents(".wbdv-template");
        var id = tr.get(0).id;
        userService.deleteUser(id,tr.remove());
    }
    // function selectUser() {
    //     var button = $(event.currentTarget);
    //     var tr = button.parents(".wbdv-template");
    //     var id = tr.get(0).id;
    //     var foundUser = findUserById(id);
    //     renderUser(foundUser);
    // }
    function updateUserInList(user) {
        $("#"+renderedUserId).find(".wbdv-username").html(user.username);
        $("#"+renderedUserId).find(".wbdv-password").html(maskPassword(user.password));
        $("#"+renderedUserId).find(".wbdv-first-name").html(user.firstName);
        $("#"+renderedUserId).find(".wbdv-last-name").html(user.lastName);
        $("#"+renderedUserId).find(".wbdv-role").html(user.role);
    }
    function updateUser() {
        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();

        var userUpdates = new User(renderedUserId,username,password,firstName,lastName,role);
        userService.updateUser(renderedUserId,userUpdates,updateUserInList(userUpdates));
        $usernameFld.prop("readonly", false);
        clearform();
    }
    function renderUser(user) {
        $usernameFld
            .val(user.username)
            .prop("readonly", true);
        $passwordFld.val(user.password);
        $firstNameFld.val(user.firstName);
        $lastNameFld.val(user.lastName);
        $roleFld.val(user.role);
        renderedUserId = user.id;
    }
    function maskPassword(password){
        return Array(password.length + 1).join("*").toString();
    }
    function showUser(user) {
        var newUserRow = $userRowTemplate.clone();
        newUserRow
            .attr("id", user.id)
            .removeClass("wbdv-hidden")
            .addClass("wbdv-deletable")
            .find(".wbdv-username")
            .html(user.username);
        newUserRow
            .find(".wbdv-password")
            .html(maskPassword(user.password));
            // .html(user.password);
        newUserRow
            .find(".wbdv-first-name")
            .html(user.firstName);
        newUserRow
            .find(".wbdv-last-name")
            .html(user.lastName);
        newUserRow
            .find(".wbdv-role")
            .html(user.role);
        newUserRow
            .find(".wbdv-select")
            .click(findUserById);
        newUserRow
            .find(".wbdv-remove")
            .click(deleteUser);
        $tbody.append(newUserRow);
    }
    function renderUsers(users) {
        $(".wbdv-deletable").remove();
        clearform();
        for (var i in users) {
            showUser(users[i]);
        }
    }
    function search() {
        // FIXME: add flexible search
        // Use values of fields as occurring in the search items, e.g.,
        //username = "alice" returns all users with "alice" anywhere in their username
        //Example user[i].username.indexOf(usernameSearchFld) > 0
        var username = $usernameFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();
        var searchParams ={};
        if (username != "") {
            // searchParams.append("username:"+username);
            searchParams["username"] = username;
        }
        if (firstName != "") {
            // searchParams.append("firstName:"+firstName);
            searchParams["firstName"] = firstName;
        }
        if (lastName != "") {
            // searchParams.append("lastName:"+lastName);
            searchParams["lastName"] = lastName;
        }
        if (role != "BLANK") {
            // searchParams.append("role:"+role);
            searchParams["role"] = role;
        }
        var returnedUsers = userService.findUsersBySearch(searchParams);
        renderUsers(returnedUsers);
    }
})();