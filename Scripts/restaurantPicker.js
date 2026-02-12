const greekFoodButton = document.getElementById("greekFoodButton");
const indianFoodButton = document.getElementById("indianFoodButton");
const koreanFoodButton = document.getElementById("koreanFoodButton");
const randomRestaurantOutput = document.getElementById("randomRestaurantOutput");

const base_api_url = "https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/RestaurantPicker/Restaurant";

const fetchKoreanFood = async () => {
    const response = await fetch(`${base_api_url}/korean`);
    const data = await response.text();
    return data;
};

const fetchIndianFood = async () => {
    const response = await fetch(`${base_api_url}/indian`);
    const data = await response.text();
    return data;
}

const fetchGreekFood = async () => {
    const response = await fetch(`${base_api_url}/greek`);
    const data = await response.text();
    return data;
};

koreanFoodButton.addEventListener("click", async () => {
    randomRestaurantOutput.innerText = await fetchKoreanFood();
});

indianFoodButton.addEventListener("click", async () => {
    randomRestaurantOutput.innerText = await fetchIndianFood();
});

greekFoodButton.addEventListener("click", async () => {
    randomRestaurantOutput.innerText = await fetchGreekFood();
});

