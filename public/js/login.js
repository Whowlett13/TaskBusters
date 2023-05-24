const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/Users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        contact_number,
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to sign up.");
    }
  }
};
document
  .querySelector("#first-name")
  .addEventListener("submit", loginFormHandler);
  document
  .querySelector("#contact-number")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector("#last-name")
  .addEventListener("submit", loginFormHandler);
document.querySelector("#login").addEventListener("submit", loginFormHandler);

document.querySelector("#signUp").addEventListener("submit", signupFormHandler);
