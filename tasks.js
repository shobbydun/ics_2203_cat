// ICS 2203 - Internet Apllication Programming;
// ToDo LIST assignment;

/*KITAVI DUNCAN _ sct211-0031/20221
  AMY NJERI _ sct211-0010/2021
  JORAM KIREKI _ sct211-0079/2022
  BRIAN KIPNG'ENO _ SCT211-0078/2022
  KITAVI DOUGLAS _ SCT211-0085/2022

*
*/


document.addEventListener("DOMContentLoaded", function() {
    // Query for input and submit fields
    const submit = document.getElementById("submit");
    const newTask = document.getElementById("task");

    submit.disabled = true;
  
    newTask.addEventListener("input", function() {
      // Update the value when there is input
      submit.disabled = !newTask.value.trim();
      console.log(newTask.value);
    });
  
    document.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault(); 
  
      // Access submitted task
      const userTask = newTask.value;
  
      // Adding task to list
      var taskList = document.getElementById("tasks");
      var task = document.createElement("li"); // Create list element
      task.textContent = userTask;
      taskList.appendChild(task); // Append list element
  
      // Reset form
      document.querySelector("form").reset();

      //inhibit form resubmission
      e.preventDefault();
    });
    return false;
  });
