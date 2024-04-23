function displayStudentDetails() {
    // Get values from input fields
    var rollNumber = document.getElementById("roll-number").value;
    var name = document.getElementById("name").value;
    var batch = document.getElementById("batch").value;
    var section = document.getElementById("section").value;

    // Display the values
    document.getElementById("display-roll-number").textContent = rollNumber;
    document.getElementById("display-name").textContent = name;
    document.getElementById("display-batch").textContent = batch;
    document.getElementById("display-section").textContent = section;
}
