const userNumberInput1 = document.getElementById("userNumberInput1");
const userNumerInput2 = document.getElementById("userNumberInput2");
const submitAnswersButton = document.getElementById("submitAnswersButton");
const resultTextOutput = document.getElementById("resultTextOutput");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/GreaterThanLessThan/Result";

const fetchGreaterLessThanApi = async () => {
    const response = await fetch(`${base_api_url}/${userNumberInput1.value}/${userNumerInput2.value}`);
    const data = await response.text();
    return data;
};

submitAnswersButton.addEventListener("click", async () => {
    resultTextOutput.innerText = await fetchGreaterLessThanApi();
});