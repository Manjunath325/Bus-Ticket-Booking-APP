const seats = document.querySelectorAll(".seat:not(.booked)");
const selectedSeatsDisplay = document.getElementById("selectedSeats");
const totalFareDisplay = document.getElementById("totalPrice");

const seatPrice = 500;
let selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener("click", () => {
        const seatNumber = seat.innerText;

        if (seat.classList.contains("selected")) {
            seat.classList.remove("selected");
            selectedSeats = selectedSeats.filter(s => s !== seatNumber);
        } else {
            seat.classList.add("selected");
            selectedSeats.push(seatNumber);
        }

        updateSummary();
    });
});

function updateSummary() {
    selectedSeatsDisplay.innerText = selectedSeats.length > 0 ? selectedSeats.join(", ") : "None";
    totalFareDisplay.innerText = selectedSeats.length * seatPrice;
}

document.getElementById("confirmBtn").addEventListener("click", () => {
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat!");
    } else {
        alert("Booking Confirmed for seats: " + selectedSeats.join(", ")
        +","+" and total Amount is::"+selectedSeats.length*seatPrice);
    document.getElementById("OKbtn").addEventListener("click",() =>{
        alert("THANK YOU ,HAPPY JOURNEY!!")
    })
    }
   
});
