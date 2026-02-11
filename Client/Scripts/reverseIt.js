const userInputReversedOutput = document.getElementById("userInputReversedOutput");
const userInputField = document.getElementById("userInputField");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/ReverseItAlphanumeric/Alphanumeric";

const fetchApi = async () => {
    const response = await fetch(`${base_api_url}/${userInputField.value}`);
    const data = await response.text();
    return data;
};

userInputField.addEventListener("keypress", async (event) => {
    if(event.key === "Enter"){
        userInputReversedOutput.innerText = await fetchApi();
    }
});