function check() {
    const inputValue = document.getElementById("text-input").value.toLowerCase();
    const cleanedInput = inputValue.replace(/[\W_]/g, "");
    let reverseValue = cleanedInput.split('').reverse().join('');
    const resultDiv = document.getElementById("result");
    if (cleanedInput.trim() === ""){
        alert("Please input a value")
    }
    if (cleanedInput === reverseValue) {
        resultDiv.textContent = `${inputValue} is a palindrome`;
    } else {
        resultDiv.textContent = `${inputValue} is not a palindrome`;
    }
}