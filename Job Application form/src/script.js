document.getElementById("jobForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let phone = document.getElementById("phone").value;
    let experience = document.getElementById("experience").value;

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must contain 10 digits");
        return;
    }

    if (experience < 0) {
        alert("Experience cannot be negative");
        return;
    }

    document.getElementById("message").innerHTML =
        "Application submitted successfully!";
});