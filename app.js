document.getElementById("homework-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const time = document.getElementById("time").value;

  fetch("https://your-backend-url.com/set-reminder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, time })
  })
  .then(response => response.json())
  .then(data => alert("Reminder set successfully!"))
  .catch(error => console.error("Error:", error));
});
