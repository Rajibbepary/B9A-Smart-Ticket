

const selectedSeatEl = document.getElementById('selected-seat');
          
const totalBookedEl = document.getElementById('total-booked');

const availableSeat = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponFiled = document.getElementById('coupon-filed');
const couponBtn = document.getElementById('coupon-btn');
const defuiltText = document.getElementById('defuilt-text')


let selectedSeat = [];
let totalPrice = 0;


function handleSelectSeat (event) {

    const value = event.innerText;
    if(selectedSeat.includes(value)){
        return alert('Seat already Booked')
    }else if (selectedSeat.length < 4){

        event.classList.add('bg-primary');
    event.classList.add('text-white');
    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

  const  availableSeatValue =parseFloat(availableSeat.innerText)

  const newavilableSeat = availableSeatValue -1;
availableSeat.innerText = newavilableSeat;

// remove defuilt text
defuiltText.classList.add('hidden');


    selectedSeatEl.innerHTML += `<li class='text-base font-normal flex justify-between'>
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>Price</span>

    </li>`

    totalPrice+= 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    if(selectedSeat.length > 3){
        couponFiled.removeAttribute('disabled');
        couponBtn.removeAttribute('disabled');
    }
    }else{
        return alert('maximum seat booke')


    }


//     event.classList.add('bg-primary');
//     event.classList.add('text-white');
//     selectedSeat.push(event.innerText);
//     totalBookedEl.innerText = selectedSeat.length;

//   const  availableSeatValue =parseFloat(availableSeat.innerText)

//   const newavilableSeat = availableSeatValue -1;
// availableSeat.innerText = newavilableSeat;

//     selectedSeatEl.innerHTML += `<li class='text-base font-normal flex justify-between'>
//     <span>${event.innerText}</span>
//     <span>Economy</span>
//     <span>Price</span>

//     </li>`

//     totalPrice+= 550;
//     totalPriceEl.innerText = totalPrice.toFixed(2);

//     if(selectedSeat.length > 3){
//         couponFiled.removeAttribute('disabled');
//         couponBtn.removeAttribute('disabled');
//     }

}