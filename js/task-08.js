const form = document.querySelector(".login-form");
const input = document.querySelectorAll("input");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (!email.value || !password.value) {
    return alert("Please fill in all the fields!");
  }

  const result = {};

  input.forEach(function (item) {
    result[item.name] = item.value;
  });

  console.log(result);
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
