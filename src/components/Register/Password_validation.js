// import Register from "./Register";

// import PropTypes from "prop-types";
// import "./Register.scss";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// import React, { useEffect } from "react";

// const PasswordValidator = () => {
//   const passwordCriteria = [
//     {
//       name: "length",
//       message: "Doit contenir au moins 10 caractères",
//       regex: /.{10,}/,
//     },
//     {
//       name: "lowercase",
//       message: "Doit contenir au moins une lettre minuscule",
//       regex: /(?:.[a-z]){1}/,
//     },
//     {
//       name: "uppercase",
//       message: "Doit contenir au moins une lettre majuscule",
//       regex: /(?:.[A-Z]){1}/,
//     },
//     {
//       name: "number",
//       message: "Doit contenir au moins un chiffre",
//       regex: /(?:.\d){1}/,
//     },
//     {
//       name: "special",
//       message: "Doit contenir au moins un caractère spécial",
//       regex: /(?:.[\W_]){1}/,
//     },
//   ];

//   useEffect(() => {
//     const passwordInput = document.getElementById("password");
//     const passwordConfirmInput = document.getElementById("confirm-password");
//     const passwordErrors = document.querySelector(".password-errors");

//     function validatePassword() {
//       let validCount = 0;
//       passwordCriteria.forEach((criterion) => {
//         const span = passwordErrors.querySelector(
//           `[data-criterion="${criterion.name}"]`
//         );
//         if (criterion.regex.test(passwordInput.value)) {
//           span.classList.add("valid");
//           validCount++;
//         } else {
//           span.classList.remove("valid");
//         }
//       });
//       if (validCount === passwordCriteria.length) {
//         passwordInput.setCustomValidity("");
//       } else {
//         passwordInput.setCustomValidity(
//           "Le mot de passe ne respecte pas les critères"
//         );
//       }
//     }

//     function checkPasswordsMatch() {
//       const passwordInputValue = passwordInput.value;
//       const passwordConfirmInputValue = passwordConfirmInput.value;
//       if (passwordInputValue !== passwordConfirmInputValue) {
//         passwordConfirmInput.setCustomValidity(
//           "Les mots de passe ne correspondent pas"
//         );
//         return false;
//       } else {
//         passwordConfirmInput.setCustomValidity("");
//         return true;
//       }
//     }

//     function handleFormSubmit(event) {
//       if (!checkPasswordsMatch()) {
//         event.preventDefault();
//       }
//     }

//     passwordInput.addEventListener("input", validatePassword);
//     passwordConfirmInput.addEventListener("input", checkPasswordsMatch);
//     document.querySelector("form").addEventListener("submit", handleFormSubmit);

//     return () => {
//       passwordInput.removeEventListener("input", validatePassword);
//       passwordConfirmInput.removeEventListener("input", checkPasswordsMatch);
//       document
//         .querySelector("form")
//         .removeEventListener("submit", handleFormSubmit);
//     };
//   }, []);

//   return null;
// };

// export default PasswordValidator;
