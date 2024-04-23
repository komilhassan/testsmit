document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate quiz results
    function calculateResults() {
        // Get quiz form and quiz topic
        var quizForm = document.getElementById("quiz-form");
        var quizTopic = document.getElementById("quiz-topic").value;

        // Get user's answers
        var userAnswers = {
            q1: quizForm.elements.q1.value,
            q2: quizForm.elements.q2.value,
            q3: quizForm.elements.q3.value,
            q4: quizForm.elements.q4.value,
            q5: quizForm.elements.q5.value
        };

        // Correct answers
        var correctAnswers = {
            q1: "1",
            q2: "1",
            q3: "2",
            q4: "4",
            q5: "2"
        };

        // Calculate total marks
        var totalMarks = 0;
        for (var key in userAnswers) {
            if (userAnswers[key] === correctAnswers[key]) {
                totalMarks++;
            }
        }

        // Display results
        var displayResults = document.getElementById("display-results");
        displayResults.innerHTML = `
            <h2>Quiz Results</h2>
            <p><strong>Quiz Topic:</strong> ${quizTopic}</p>
            <p><strong>Total Marks:</strong> ${totalMarks}</p>
        `;

        // Store total marks in session storage
        sessionStorage.setItem("totalMarks", totalMarks);
    }

    // Attach submit event listener to quiz form
    var quizForm = document.getElementById("quiz-form");
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        calculateResults(); // Calculate and display results
    });

    // Check if total marks are stored in session storage and display them if available
    var storedMarks = sessionStorage.getItem("totalMarks");
    if (storedMarks) {
        var displayResults = document.getElementById("display-results");
        displayResults.innerHTML = `
            <h2>Quiz Results</h2>
            <p><strong>Total Marks:</strong> ${storedMarks}</p>
        `;
    }
});






