var regname = document.getElementById("reg-name");
var regage = document.getElementById("reg-age");
var regcourse = document.getElementById("reg-course");
var regmail = document.getElementById("reg-mail");
var adddata = document.getElementById("add-data");
var data = document.getElementById("data")



adddata.addEventListener("click", function (event) {
    event.preventDefault();
    var reggender = document.querySelector('input[name="gender"]:checked');
    var table = document.createElement("tr");
    table.style.border = "2";
    table.innerHTML = `
    <td>${regname.value}</td>
    <td>${regage.value}</td>
    <td>${reggender.value}</td>
    <td>${regcourse.value}</td>
    <td>${regmail.value}</td>
    <td><button id="del-btn">Delete</button></td>`
    data.appendChild(table);

    regname.value = "";
    regage.value = "";
    regmail.value = "";
    regcourse.value = "---SELECT---";
    reggender.checked = false;
    
    table.querySelector("#del-btn").addEventListener("click", function () {
        table.remove();
    });


});