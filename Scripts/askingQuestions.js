const responseOutputText = document.getElementById("responseOutputText");
const nameInputField = document.getElementById("nameInputField");
const timeInputField = document.getElementById("timeInputField");
const submitAnswersButton = document.getElementById("submitAnswersButton")

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/";

const fetchApi = async () => {
    const response = await fetch(`${base_api_url}/AskingQuestions/Responses/${nameInputField.value}/${timeInputField.value}`);
    const data = await response.text();
    return data;
};

submitAnswersButton.addEventListener("click", async () => {
    if (nameInputField.value === "" || timeInputField === ""){
        responseOutputText.innerText = "Please make sure to enter your responses."
    }
    responseOutputText.innerText = await fetchApi();
    nameInputField.value = "";
    timeInputField.value = "";
});