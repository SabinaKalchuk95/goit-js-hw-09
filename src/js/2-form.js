// console.log('ne rabotaet');
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input[name="email"]');
const textarea = form.querySelector('textarea[name="message"]');
const btn = form.querySelector('button[type="submit"]');
const localStorageKey = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

form.addEventListener('input', () => {
  formData = {
    email: input.value,
    message: textarea.value
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    input.value = parsedData.email;
    textarea.value = parsedData.message;
  }
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData = { email: "", message: "" };
});
