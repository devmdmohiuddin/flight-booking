document
  .getElementById("first-class-ticket-increase")
  .addEventListener("click", function () {
    ticketDetails("first", true);
  });

document
  .getElementById("first-class-ticket-decrease")
  .addEventListener("click", function () {
    ticketDetails("first", false);
  });

document
  .getElementById("second-class-ticket-increase")
  .addEventListener("click", function () {
    ticketDetails("second", true);
  });

document
  .getElementById("second-class-ticket-decrease")
  .addEventListener("click", function () {
    ticketDetails("second", false);
  });

document.querySelector("#book-btn").addEventListener("click", function () {
  let newDiv = document.createElement("div");
  newDiv.innerText = "Successfully ticket booked";
  newDiv.className = "success";
  const bookingForm = document.getElementById("booking-form");
  bookingForm.insertAdjacentElement("afterbegin", newDiv);
  setTimeout(function() {
    newDiv.remove()
  }, 2000)
});

function ticketDetails(category, isIncrease) {
  const ticketCount = document.getElementById(category + "-class-ticket-count");
  const ticketNumber = parseInt(ticketCount.value);
  let newTicketNumber = 0;
  if (isIncrease === true) {
    newTicketNumber = ticketNumber + 1;
  }
  if (isIncrease === false && ticketNumber > 0) {
    newTicketNumber = ticketNumber - 1;
  }
  ticketCount.value = newTicketNumber;
  if (category === "first") {
    document.getElementById(category + "-class-ticket-price").innerText =
      newTicketNumber * 150;
  }
  if (category === "second") {
    document.getElementById(category + "-class-ticket-price").innerText =
      newTicketNumber * 100;
  }
  calculateTotal();
}

function calculateTotal() {
  const firstClassTicketCount = document.getElementById(
    "first-class-ticket-count"
  );
  const firstClassTicketNumber = getInputNumber("first-class-ticket-count");
  const secondClassTicketNumber = getInputNumber("second-class-ticket-count");

  const subtotalPrice =
    firstClassTicketNumber * 150 + secondClassTicketNumber * 100;
  const taxPrice = Math.round(subtotalPrice * 0.1);
  const totalPrice = subtotalPrice + taxPrice;

  document.getElementById("subtotal").innerText = subtotalPrice;
  document.getElementById("tax").innerText = taxPrice;
  document.getElementById("total").innerText = totalPrice;
}

function getInputNumber(id) {
  const ticketCount = document.getElementById(id);
  const ticketNumber = parseInt(ticketCount.value);
  return ticketNumber;
}
