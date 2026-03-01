const addBtn = document.querySelector(".add_benefit");
const benefitInput = document.getElementById("benefit");
const benefitList = document.querySelector(".home ol");

function addDeleteFunction(button) {
    button.addEventListener("click", function () {
        this.parentElement.remove();
    });
}

document.querySelectorAll(".delete_button").forEach(addDeleteFunction);

addBtn.addEventListener("click", function () {
    const benefitText = benefitInput.value.trim();

    if (benefitText === "") {
        alert("Please enter a benefit");
        return;
    }

    const li = document.createElement("li");
    li.textContent = benefitText + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete_button";

    addDeleteFunction(deleteBtn);

    li.appendChild(deleteBtn);
    benefitList.appendChild(li);

    benefitInput.value = "";
});

const contactForm = document.querySelector(".form form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted successfully.");
    contactForm.reset();
});

const footer = document.querySelector("footer .same");

const dateTimeDiv = document.createElement("p");
dateTimeDiv.style.color = "white";
dateTimeDiv.style.textAlign = "center";
dateTimeDiv.style.marginTop = "10px";
footer.appendChild(dateTimeDiv);

function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    };

    const date = now.toLocaleDateString("en-GB", options);
    const time = now.toLocaleTimeString("en-GB");

    dateTimeDiv.textContent = `${date}, ${time}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);