// Save vehicle info in browser localStorage
document.addEventListener("DOMContentLoaded", () => {
    // Staff form handling
    const form = document.getElementById("vehicleForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const vehicle = {
                mileage: document.getElementById("mileage").value,
                color: document.getElementById("color").value,
                price: document.getElementById("price").value,
                engine: document.getElementById("engine").value,
                fuel: document.getElementById("fuel").value,
                year: document.getElementById("year").value,
                brand: document.getElementById("brand").value,
                transmission: document.getElementById("transmission").value,
                seating: document.getElementById("seating").value
            };
            const name = document.getElementById("name").value;

            let vehicles = JSON.parse(localStorage.getItem("vehicles")) || {};
            vehicles[name] = vehicle;
            localStorage.setItem("vehicles", JSON.stringify(vehicles));

            alert("Vehicle saved!");
            form.reset();
        });
    }

    // Customer page vehicle buttons
    const vehicleButtonsDiv = document.getElementById("vehicleButtons");
    if (vehicleButtonsDiv) {
        let vehicles = JSON.parse(localStorage.getItem("vehicles")) || {};
        for (let name in vehicles) {
            let btn = document.createElement("button");
            btn.innerText = name;
            btn.onclick = () => {
                localStorage.setItem("selectedVehicle", name);
                window.location.href = "vehicle.html";
            };
            vehicleButtonsDiv.appendChild(btn);
            vehicleButtonsDiv.appendChild(document.createElement("br"));
        }
    }

    // Vehicle details page
    const vehicleNameEl = document.getElementById("vehicleName");
    if (vehicleNameEl) {
        let vehicles = JSON.parse(localStorage.getItem("vehicles")) || {};
        let selected = localStorage.getItem("selectedVehicle");
        if (selected && vehicles[selected]) {
            vehicleNameEl.innerText = selected + " Information";
            for (let key in vehicles[selected]) {
                if (document.getElementById(key)) {
                    document.getElementById(key).innerText = vehicles[selected][key];
                }
            }
        }
    }
});

