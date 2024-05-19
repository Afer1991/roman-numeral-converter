const numberToConvert = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkNumber = () => {
  const input = numberToConvert.value;
  if (input === "") {
    output.innerText = "Please enter a valid number";
    output.classList.add("wrong-output");
  } else if (input > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.classList.add("wrong-output");
  } else if (input < 1){
    output.innerText = "Please enter a number greater than or equal to 1";
    output.classList.add("wrong-output");
  } else {
    return convertToRomanNumeral();
  }
};

const convertToRomanNumeral = () => {}; 

convertBtn.addEventListener("click", checkNumber);
numberToConvert.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkNumber();
  }
});


