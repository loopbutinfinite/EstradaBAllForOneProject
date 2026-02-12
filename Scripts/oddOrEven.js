const resultOutputBox = document.getElementById("resultOutputBox");
const submitUserResponseButton = document.getElementById("submitUserResponseButton");
const userNumberInputBox = document.getElementById("userNumberInputBox");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/OddOrEven/Result";

const fetchOddOrEvenApi = async () => {
    const response = await fetch(`${base_api_url}/${userNumberInputBox.value}`);
    const data = response.text();
    return data;
};

submitUserResponseButton.addEventListener("click", async () => {
    if(userNumberInputBox === ""){
        resultOutputBox.innerText = "Please enter digits only and don't leave this blank.";
    }
    resultOutputBox.innerText = await fetchOddOrEvenApi();
    userNumberInputBox.value = "";
});