const axios = require("axios");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Content Loaded");

  //   Gestion du formulaire

  document.querySelector("form").addEventListener("submit", async (event) => {
    // empêcher le refresh de la page au submit
    event.preventDefault();
    console.log("submit");

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    console.log({
      firstname,
      lastname,
      email,
      message,
    });

    // réquête vers le serveur en local
    const { data } = await axios.post(
      "https://site--backform-project--zywd4pc2lg9z.code.run",
      {
        firstname,
        lastname,
        email,
        message,
      }
    );

    console.log("response>>", data);
  });
});
