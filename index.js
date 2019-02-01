document.addEventListener("DOMContentLoaded", function() {
  const myForm = document.getElementById("myForm");
  const myInput = document.getElementById("myInput");
  const myList = document.getElementById("myList");

  myForm.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    if (myInput.value) {
      let node = document.createElement("LI");
      let textnode = document.createTextNode(myInput.value);
      node.appendChild(textnode);
      myList.appendChild(node);
      myInput.value = "";
    }
  }
});
