document.addEventListener("DOMContentLoaded", () => {

  const inputSlider = document.getElementById("customSlider");
  const customSliderInfo = document.getElementById("customSliderInfo");

  inputSlider.addEventListener("change", () => {
    customSliderInfo.innerHTML = inputSlider.value + "%";
  })
});