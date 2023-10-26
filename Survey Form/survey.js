const form = document.getElementById("survey-form");
  const popup = document.getElementById("popup");
  const popupData = document.getElementById("popup-data");

  function submitForm() {
    popupData.innerHTML = "";
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      const label = form.querySelector(`[for=${key}]`).textContent;
      const listItem = document.createElement("li");
      listItem.textContent = `${label}: ${value}`;
      popupData.appendChild(listItem);
    }
    popup.style.display = "block";
  }

  function closePopup() {
    popup.style.display = "none";
    form.reset();
  }

  function resetForm() {
    form.reset();
  }