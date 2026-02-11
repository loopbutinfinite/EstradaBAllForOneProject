const greetingTextOutput = document.getElementById("greetingTextOutput");
const greetingTextInput = document.getElementById("greetingTextInput");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/";

const fetchAPI = async () => {
    const response = await fetch(`${base_api_url}HelloWorld/Greeting/${greetingTextInput.value}`);
    const data = await response.text();
    console.log(data);
    return data;
};


greetingTextInput.addEventListener("keypress", async (event) => {
    if(event.key === "Enter"){
        greetingTextOutput.innerText = await fetchAPI();
        greetingTextInput.value = "";
    }
});
