// main.js
document.addEventListener("DOMContentLoaded", () => {
    // Set location link
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const link = `https://www.google.com/maps?q=${latitude},${longitude}`;
        document.getElementById("locationField").value = link;
    });

    // Generate slot picker dynamically
    const slotPicker = document.getElementById("slotPicker");
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = [10, 11, 12, 14, 15]; // 1PM = break, 2 ramps = 2 slots per hour

    days.forEach(day => {
        hours.forEach(hour => {
            for (let ramp = 1; ramp <= 2; ramp++) {
                const option = document.createElement("option");
                option.value = `${day} at ${hour}:00 (Ramp ${ramp})`;
                option.textContent = `${day} at ${hour}:00 (Ramp ${ramp})`;
                slotPicker.appendChild(option);
            }
        });
    });
});

function confirmBooking() {
    document.querySelector("form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("progressBar").style.width = "100%";
    return true;
}