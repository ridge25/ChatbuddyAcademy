document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.target.querySelector("input").value;
    console.log("New signup:", email);
    alert("Thanks for joining the waitlist!");
    e.target.reset();
  });