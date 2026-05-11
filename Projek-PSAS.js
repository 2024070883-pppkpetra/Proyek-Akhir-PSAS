document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
        e.preventDefault();
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var exp = document.getElementById("exp");
        var interest = document.querySelector("input[name='interest']:checked");
        var topics = document.querySelectorAll("input[type='checkbox']:checked");
        if (!name.value || !email.value || exp.selectedIndex === 0 || !interest || topics.length === 0) {
            alert("Please fill all fields.");
            return;
        }
        alert("Registered successfully!");
        form.reset();
        });
    }
});