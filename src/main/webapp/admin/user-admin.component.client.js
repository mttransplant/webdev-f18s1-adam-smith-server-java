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
        clearform();

        var timestamp = (new Date()).getTime();

        var newUser = $userRowTemplate.clone();
        newUser
            .removeClass("wbdv-hidden")
            .find(".wbdv-username")
            .html(username);
        newUser
            .find(".wbdv-password")
            .html(password);
        newUser
            .find(".wbdv-first-name")
            .html(firstName);
        newUser
            .find(".wbdv-last-name")
            .html(lastName);
        newUser
            .find(".wbdv-role")
            .html(role);
        newUser
            .find(".wbdv-remove")
            .attr("id", timestamp)
            .click(deleteUser);

        $tbody.append(newUser);
    }
    function clearform() {
        $usernameFld.val("");
        $passwordFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $roleFld.val("FACULTY");
    }
    function findAllUsers() {
        renderUsers(userService.findAllUsers())
    }
    function findUserById() {

    }
    function deleteUser(event) {
        var button = $(event.currentTarget);
        var tr = button.parents(".wbdv-template");
        tr.remove();
    }
    function selectUser() {

    }
    function updateUser() {

    }
    function renderUser(user) {

    }
    function renderUsers(users) {
        for (var i in users) {
            var newUserRow = $userRowTemplate.clone();
            newUserRow
                .attr("id", users[i].id)
                .removeClass("wbdv-hidden")
                .find(".wbdv-username")
                .html(users[i].username);
            newUserRow
                .find(".wbdv-password")
                .html(users[i].password);
            newUserRow
                .find(".wbdv-first-name")
                .html(users[i].firstName);
            newUserRow
                .find(".wbdv-last-name")
                .html(users[i].lastName);
            newUserRow
                .find(".wbdv-role")
                .html(users[i].role);
            newUserRow
                .find(".wbdv-remove")
                .click(deleteUser);

            $tbody.append(newUserRow);
        }
    }
})();