import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

try {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    formData = JSON.parse(saveData);

    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
} catch (error) {
  console.error('Error parsing saved data from localStorage:', error);
}

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();

  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
}

function onSubmit(event) {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Please fill in all fields');
    return;
  }

  console.log(formData);

  try {
    localStorage.removeItem('feedback-form-state');
  } catch (error) {
    console.error('Error removing data from localStorage:', error);
  }

  form.reset();
  formData = { email: '', message: '' };
}
