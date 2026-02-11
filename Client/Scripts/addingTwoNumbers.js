const firstNumberInput = document.getElementById("firstNumberInput");
const secondNumberInput = document.getElementById("secondNumberInput");
const submitAnswersButton = document.getElementById("submitAnswersButton");
const sumOutputText = document.getElementById("sumOutputText");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/";

const fetchAddingTwoNumbers = async () => {
    const response = await fetch(`${base_api_url}/AddingTwoNumbers/Sum/${firstNumberInput.value}/${secondNumberInput.value}`);
    const data = await response.text();
    return data;
};

submitAnswersButton.addEventListener("click", async () => {
    if(firstNumberInput === "" || secondNumberInput === ""){
        sumOutputText.innerText = "Please make to input something into both fields.";
    }
    sumOutputText.innerText = await fetchAddingTwoNumbers();
    firstNumberInput.value = "";
    secondNumberInput.value = "";
});
