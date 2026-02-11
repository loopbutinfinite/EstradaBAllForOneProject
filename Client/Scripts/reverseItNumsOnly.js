const numbersReversedOutput = document.getElementById("numbersReversedOutput");
const userDigitInputField = document.getElementById("userDigitInputField");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/ReverseItNumbersOnly/srebmuN";

const fetchNumReversalApi = async () => {
    const response = await fetch (`${base_api_url}/${userDigitInputField.value}`);
    const data = await response.text();
    return data;
};

userDigitInputField.addEventListener("keypress", async (event) => {
    if(event.key === "Enter"){
        numbersReversedOutput.innerText = await fetchNumReversalApi();
    }
});