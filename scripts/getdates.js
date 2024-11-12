const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const today = new Date();
copyright = new Date();
let oLastModif = new Date(document.lastModified);

currentyear.innerHTML = `current year is: <span class="highlight">${today.getFullYear()}</span>`;
copyrightyear.innerHTML = `©️ <span class="highlight">${copyright.getFullYear()}</span>`;
last_modified.innerHTML = `last modified <span class="highlight">${oLastModif}</span>`;