(function () {
    var $usernameFld, $passwordFld; // note: the $ is a clue that this variable is bound to an element in the DOM.
    // var $removeBtn, $selectBtn;
    var $createBtn, $updateBtn, $searchBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
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

        $createBtn.click(createUser);
        findAllUsers();
    }
    function createUser() {
        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();
        var id = (new Date()).getTime();
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
    }
    function findAllUsers() {
        renderUsers(userService.findAllUsers());
    }
    function findUserById() {

    }
    function deleteUser(event) {
        var button = $(event.currentTarget);
        var tr = button.parents(".wbdv-template");
        var id = tr.get(0).id;
        userService.deleteUser(id,tr.remove());
    }
    function selectUser() {

    }
    function updateUser() {

    }
    function renderUser(user) {

    }
    function showUser(user) {
        var newUserRow = $userRowTemplate.clone();
        newUserRow
            .attr("id", user.id)
            .removeClass("wbdv-hidden")
            .find(".wbdv-username")
            .html(user.username);
        newUserRow
            .find(".wbdv-password")
            .html(user.password);
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
            .find(".wbdv-remove")
            .click(deleteUser);
        $tbody.append(newUserRow);
    }
    function renderUsers(users) {
        for (var i in users) {
            showUser(users[i]);
        }
    }
})();