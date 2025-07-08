const bookList = document.getElementById("book-list");

function addReview() {
  const title = document.getElementById("bookTitle").value.trim();
  const name = document.getElementById("reviewerName").value.trim();
  const text = document.getElementById("reviewText").value.trim();

  if (!title || !name || !text) {
    alert("Please fill in all fields.");
    return;
  }

  // Create review box
  const reviewBox = document.createElement("div");
  reviewBox.classList.add("review-box");

  reviewBox.innerHTML = `
    <h3>${title}</h3>
    <p><strong>${name}:</strong> ${text}</p>
  `;

  // Add to list
  bookList.prepend(reviewBox); // newest first

  // Clear form
  document.getElementById("bookTitle").value = "";
  document.getElementById("reviewerName").value = "";
  document.getElementById("reviewText").value = "";
}
