const formData = {
    email: "",
    message: "",
}
const form = document.querySelector(".feedback-form");
if(localStorage.getItem("feedback-form-state")) {
    const parseData = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.elements.email.value = parseData.email;
    form.elements.message.value = parseData.message;
    formData.email = parseData.email;
    formData.message = parseData.message;
}
const saveData = (event) => {
    event.preventDefault();
    formData.email = event.currentTarget.elements.email.value.trim();
    formData.message = event.currentTarget.elements.message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
form.addEventListener("input", saveData);
const submitData = (event) => {
    event.preventDefault();
    const parseData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if(!parseData.email || !parseData.message) {
        alert("Fill please all fields")
    }
    else {
        console.log(formData);
        localStorage.clear();
        formData.email = "";
        formData.message = "";
        form.elements.email.value = "";
        form.elements.message.value = "";
    }
}
form.addEventListener("submit", submitData);