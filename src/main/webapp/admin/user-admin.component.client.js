(function () {
    var $usernameFld, $passwordFld; // note: the $ is a clue to where this came from/is mapped to.
    var $removeBtn, $selectBtn;
    var $createBtn, $updateBtn, $searchBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");

        $createBtn = $("#createBtn");
        $updateBtn = $("#updateBtn");
        $searchBtn = $("#searchBtn");

        $createBtn.click(createUser);
    }
    function createUser() {
        alert('create user')
    }
    function findAllUsers() {

    }
    function findUserById() {

    }
    function deleteUser() {

    }
    function selectUser() {

    }
    function updateUser() {

    }
    function renderUser(user) {

    }
    function renderUsers(users) {

    }
})();