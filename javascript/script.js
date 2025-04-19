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

const btn = document.getElementById('complete');

btn.addEventListener('click', function () {
  alert("Task Completed!!!");
  btn.disabled = true;
})
