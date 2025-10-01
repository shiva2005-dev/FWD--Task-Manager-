function addTask() {
      let input = document.getElementById("taskInput");
      let taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      let li = document.createElement("li");
      li.textContent = taskText;  

      
     
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.onclick = function() {
        li.remove();
        let li1 = document.createElement("li");
        li1.textContent=taskText;
        document.getElementById("taskList1").appendChild(li1);
      };

      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);

      input.value = "";
    }
    // Function to update clock
function updateClock() {
    const now = new Date(); 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

   
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
