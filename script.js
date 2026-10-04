const form = document.getElementById("scheduleForm");
const result = document.getElementById("scheduleResult");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const staffName = document.getElementById("staffName").value;
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;
    const shift = document.getElementById("shift").value;

    result.innerHTML = `
        <div class="schedule-card">
            <h3>✓ Schedule Added Successfully</h3>

            <p><strong>Staff Name:</strong> ${staffName}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Shift:</strong> ${shift}</p>
            <p><strong>Status:</strong> Scheduled</p>
        </div>
    `;

    form.reset();
});