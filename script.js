// To-Do List
document.querySelector('#push').onclick = function () {
  if (document.querySelector('#task-input').value.length == 0) {
    alert("Please Enter a Task")
  }
  else {
    document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('#task-input').value}
              </span>
              <button class="delete">
                  X
              </button>
          </div>
      `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function (e) {
        e.stopPropagation();
        this.parentNode.remove();
      }
    }

    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle('completed');
      }
    }

    document.querySelector("#task-input").value = "";
  }
}

// Pomodoro Timer
let timer;
let timerSeconds = 1500;

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timerSeconds = 1500;
  document.getElementById('timer').textContent = '25:00';
}

function updateTimer() {
  timerSeconds--;
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  if (timerSeconds <= 0) {
    clearInterval(timer);
    timer = null;
    alert('Pomodoro session complete!');
  }
}
