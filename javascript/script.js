document.getElementById('bg-btn').addEventListener('click', function () {
  document.documentElement.style.backgroundColor = bgRandomColor();
})

document.getElementById('blog').addEventListener('click', function() {
  window.location.href = "blog.html";
})


// 

const dateBox = document.getElementById('date-box');

const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const formattedDate = now.toLocaleString('en-us', options);
dateBox.textContent = "" + formattedDate;



// 

const completedBtn = document.querySelectorAll('.completed-btn');
const taskCount = document.getElementById('task-count');
const taskPending = document.getElementById('task-pending');

completedBtn.forEach(btn => { btn.addEventListener('click', function () {
  alert("WOW! Task Completed!!!");

  let Count = parseInt(taskCount.textContent);
  taskCount.textContent = Count + 1; 

  let Pending = parseInt(taskPending.textContent);
  taskPending.textContent = Pending - 1; 
  btn.disabled = true;
});
});

// 
const clearBtn = document.getElementById('clear-history-btn');
const taskDiv = document.getElementById('task-div');

clearBtn.addEventListener('click', function() {
  taskDiv.innerHTML = "";
})

// 