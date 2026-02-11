const magicBallResponseText = document.getElementById("magicBallResponseText");
const questionInputBox = document.getElementById("questionInputBox");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/";

const fetchMagic8Ball = async () => {
    const response = await fetch(`${base_api_url}/Magic8Ball/Magic8/${questionInputBox.value}`);
    const data = await response.text();
    return data;
};

questionInputBox.addEventListener("keypress", async (event) => {
    if(event.key === "Enter"){
        magicBallResponseText.innerText = await fetchMagic8Ball();
        questionInputBox.value = "";
    }
});