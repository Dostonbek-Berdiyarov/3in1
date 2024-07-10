var elFizzBuzzForm = document.querySelector("#js-fizzbuzz-form"),
  elFizzBuzzInput = elFizzBuzzForm.querySelector("#js-fizzbuzz-input"),
  elFizzBuzzOutput = elFizzBuzzForm.querySelector("#js-fizzbuzz-output");
var elEvenOddForm = document.querySelector("#js-evenodd-form"),
  elEvenOddInput = elEvenOddForm.querySelector("#js-evenodd-input"),
  elEvenOddOutput = elEvenOddForm.querySelector("#js-evenodd-output");
var elRandomForm = document.querySelector("#js-random-form"),
  elRandomInput = elRandomForm.querySelector("#js-random-input"),
  elRandomBtn = elRandomForm.querySelector("#js-random-btn"),
  elRandomOutput = elRandomForm.querySelector("#js-random-output"),
  elRandomAttepts = elRandomForm.querySelector("#js-random-attepts"),
  elReload = elRandomForm.querySelector("#js-reload"),
  randomNumber = Math.round(Math.random() * 100),
  userAttempt = 10;
console.log(randomNumber);

elFizzBuzzForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  var elFizzBuzzInputInNumber = +elFizzBuzzInput.value;

  if (
    elFizzBuzzInputInNumber / 5 &&
    elFizzBuzzInputInNumber % 5 == 0 &&
    elFizzBuzzInputInNumber / 3 &&
    elFizzBuzzInputInNumber % 3 == 0
  ) {
    elFizzBuzzOutput.innerHTML = `Fizz<span class="text-purple-500">Buzz</span>`;
    elFizzBuzzOutput.classList.add("text-yellow-500");
  } else if (elFizzBuzzInputInNumber / 3 && elFizzBuzzInputInNumber % 3 == 0) {
    elFizzBuzzOutput.textContent = "Fizz";
    elFizzBuzzOutput.classList.remove("text-purple-500");
    elFizzBuzzOutput.classList.add("text-yellow-500");
  } else if (elFizzBuzzInputInNumber / 5 && elFizzBuzzInputInNumber % 5 == 0) {
    elFizzBuzzOutput.textContent = "Buzz";
    elFizzBuzzOutput.classList.remove("text-yellow-500");
    elFizzBuzzOutput.classList.add("text-purple-500");
  } else {
    elFizzBuzzOutput.textContent = "Not Fizz Not Buzz";
    elFizzBuzzOutput.classList.remove("text-yellow-500");
    elFizzBuzzOutput.classList.remove("text-purple-500");
  }
});
elEvenOddForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  var elEvenOddInputInNumber = +elEvenOddInput.value;
  if (elEvenOddInputInNumber == 0) {
    elEvenOddOutput.textContent =
      "Bu son ikkiga bo'linadi lekin siz 0 dan kattaroq bo'lgan son kiritishingiz kerak";
    elEvenOddOutput.classList.remove("text-yellow-500");
    elEvenOddOutput.classList.remove("text-purple-500");
  } else if (elEvenOddInputInNumber < 0) {
    elEvenOddOutput.textContent =
      "Siz 0 dan kattaroq bo'lgan son kiritishingiz kerak";
    elEvenOddOutput.classList.remove("text-yellow-500");
    elEvenOddOutput.classList.remove("text-purple-500");
  } else if (elEvenOddInputInNumber / 2 && elEvenOddInputInNumber % 2 == 0) {
    elEvenOddOutput.textContent = "Juft";
    elEvenOddOutput.classList.remove("text-yellow-500");
    elEvenOddOutput.classList.add("text-purple-500");
  } else {
    elEvenOddOutput.textContent = "Toq";
    elEvenOddOutput.classList.add("text-yellow-500");
    elEvenOddOutput.classList.remove("text-purple-500");
  }
});
elRandomForm.addEventListener("submit", (event) => {
  event.preventDefault();
  userAttempt--;
  elRandomAttepts.textContent = `Sizda ${userAttempt} urunish bor`;
  if (userAttempt / 2 && userAttempt % 2 == 0) {
    elRandomAttepts.classList.remove("text-yellow-500");
    elRandomAttepts.classList.add("text-purple-500");
  } else if (userAttempt == 0) {
    elRandomAttepts.classList.remove("text-yellow-500");
    elRandomAttepts.classList.remove("text-purple-500");
    elRandomAttepts.classList.add("text-red-500");
  } else {
    elRandomAttepts.classList.add("text-yellow-500");
    elRandomAttepts.classList.remove("text-purple-500");
  }
  var elRandomInputInNumber = +elRandomInput.value;
  if (elRandomInputInNumber == randomNumber) {
    elRandomOutput.textContent = `To'g'ri topdingiz!!`;
    elRandomOutput.classList.add("text-green-500");
    elRandomOutput.classList.remove("text-yellow-500");
    elRandomOutput.classList.remove("text-purple-500");
    elRandomOutput.classList.remove("text-red-500");
    elRandomAttepts.classList.add("text-green-500");
    elRandomInput.setAttribute("disabled", "true");
    elRandomBtn.setAttribute("disabled", "true");
    elReload.classList.add("block");
    elReload.classList.remove("hidden");
  } else if (elRandomInputInNumber < 0) {
    elRandomOutput.textContent = `Siz xato raqam kiritdingiz`;
    elRandomOutput.classList.remove("text-green-500");
    elRandomOutput.classList.remove("text-yellow-500");
    elRandomOutput.classList.add("text-red-500");
    elRandomOutput.classList.remove("text-purple-500");
  } else if (elRandomInputInNumber > 100) {
    elRandomOutput.textContent = `Siz 100 dan katta raqam kiritdingiz`;
    elRandomOutput.classList.remove("text-green-500");
    elRandomOutput.classList.remove("text-yellow-500");
    elRandomOutput.classList.add("text-red-500");
    elRandomOutput.classList.remove("text-purple-500");
  } else if (elRandomInputInNumber < randomNumber) {
    elRandomOutput.textContent = `Sal kamaytirib yubordingiz`;
    elRandomOutput.classList.remove("text-green-500");
    elRandomOutput.classList.remove("text-red-500");
    elRandomOutput.classList.add("text-yellow-500");
    elRandomOutput.classList.remove("text-purple-500");
  } else {
    elRandomOutput.textContent = `Sal oshirib yubordingiz`;
    elRandomOutput.classList.remove("text-green-500");
    elRandomOutput.classList.remove("text-yellow-500");
    elRandomOutput.classList.remove("text-red-500");
    elRandomOutput.classList.add("text-purple-500");
  }
  if (userAttempt == 0) {
    elRandomOutput.textContent = `Afsuski sizning urunishingiz tugadi to'g'ri javob ${randomNumber} edi`;
    elRandomOutput.classList.remove("text-green-500");
    elRandomOutput.classList.remove("text-yellow-500");
    elRandomOutput.classList.add("text-red-500");
    elRandomOutput.classList.remove("text-purple-500");
    elReload.classList.add("block");
    elReload.classList.remove("hidden");
    elRandomInput.setAttribute("disabled", "true");
    elRandomBtn.setAttribute("disabled", "true");
  }
});
elReload.addEventListener("click", () => {
  location.reload();
});
