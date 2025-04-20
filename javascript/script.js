document.getElementById('bg-btn').addEventListener('click', function () {
  document.documentElement.style.backgroundColor = bgRandomColor();
})

document.getElementById('blog').addEventListener('click', function () {
  window.location.href = "blog.html";
})

// 

const dateBox = document.getElementById('date-box');

const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const formattedDate = now.toLocaleString('en-us', options);
dateBox.textContent = "" + formattedDate;

// 

const btns = document.querySelectorAll('.completed-btn');
const taskDiv = document.getElementById('task-div');

btns.forEach(button => {
  button.addEventListener('click', () => {

    const taskTitle = button.closest('.card').querySelector('.task-title').innerText;

    const newDiv = document.createElement('div');
    newDiv.className = 'font-semibold bg-gray-300 p-4 border rounded-xl mb-3';
    newDiv.innerText = `You have completed the task "${taskTitle}" at 03:48:56 AM.`

    taskDiv.appendChild(newDiv);
  });
});

// 
const completedBtn = document.querySelectorAll('.completed-btn');
const taskCount = document.getElementById('task-count');
const taskPending = document.getElementById('task-pending');

completedBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    alert("Board updated Successfully!");

    let Count = parseInt(taskCount.innerText);
    taskCount.innerText = Count + 1;

    let Pending = parseInt(taskPending.innerText);
    taskPending.innerText = Pending - 1;
    btn.disabled = true;
  });
});

// 
const clearBtn = document.getElementById('clear-history-btn');
const taskdiv = document.getElementById('task-div');
clearBtn.addEventListener('click', function () {
  taskdiv.innerHTML = "";
})