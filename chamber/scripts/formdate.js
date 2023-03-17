// Form hidden date field
document.addEventListener("DOMContentLoaded", function() {
    var hiddenField = document.getElementById("formDate");
    if (hiddenField) {
      hiddenField.value = new Date().toISOString();
    } else {
      console.log("Could not find element with id 'formDate'");
    }
  });