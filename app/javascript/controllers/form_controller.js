const form = document.querySelector("#slogan-form");
const result = document.querySelector("#result");

if (form) {
  console.log({ form });
  form.addEventListener("submit", async (e) => {
    console.log({ e });
    e.preventDefault();

    const formData = new FormData(form);

    let data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
      // data = {...data, [key]: value}
    }

    const errors = {};
    if (!data.first_name) errors.first_name = "Must enter your first name";
    if (!data.last_name) errors.last_name = "Must enter your last name";
    if (!data.email) errors.email = "Must enter your email";
    if (!data.suggestion) errors.suggestion = "Must enter a slogan";

    if (Object.keys(errors).length > 0) {
      for (const error of Object.keys(errors)) {
        const input = document.querySelector(`#${error}`);
        input.classList.add("is-invalid");
        input.nextElementSibling.innerText = errors[error];
      }
    } else {
      let res = await fetch(`/api/slogans`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          "Content-Type": "application/json",
        },
      });

      res = await res.json();

      if (res.status === "ok") {
        result.innerHTML = `<div class="alert alert-success">${res.message}</div>`;
      } else {
        result.innerHTML = `<div class="alert alert-danger">Oops! something went wrong.</div>`;
      }

      form.reset();

      console.log({ res });
    }
  });
}
