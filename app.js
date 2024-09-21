

const selectedSeatEl = document.getElementById('selected-seat');
          
const totalBookedEl = document.getElementById('total-booked')

const availableSeat = document.getElementById('available-seat')
let selectedSeat = [];

function handleSelectSeat (event) {

    event.classList.add('bg-primary');
    event.classList.add('text-white');
    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

  const  availableSeatValue =parseFloat(availableSeat.innerText)

  const newavilableSeat = availableSeatValue -1;
availableSeat.innerText = newavilableSeat;

    selectedSeatEl.innerHTML += `<li class='text-base font-normal flex justify-between'>
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>Price</span>

    </li>`

    
}