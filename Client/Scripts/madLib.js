const submitResponsesButton = document.getElementById("submitResponsesButton");
const storyOutputTextBox = document.getElementById("storyOutputTextBox");
const unusualObjectInputBox = document.getElementById("unusualObjectInputBox");
const occupationInputBox = document.getElementById("occupationInputBox");
const nameInputBox = document.getElementById("nameInputBox");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/";

const fetchMadLibStory = async () => {
    const response = await fetch(`${base_api_url}/MadLib/MadLib/${nameInputBox.value}/${occupationInputBox.value}/${unusualObjectInputBox.value}`);
    const data = await response.text();
    return data;
};

submitResponsesButton.addEventListener("click", async () => {
    if (occupationInputBox.value === "" || nameInputBox.value === "" || unusualObjectInputBox === ""){
        storyOutputTextBox.innerText = "Please make sure to input something into each of the fields."
    }
        storyOutputTextBox.innerText = await fetchMadLibStory();
        nameInputBox.value = "";
        occupationInputBox.value = "";
        unusualObjectInputBox.value = "";
});