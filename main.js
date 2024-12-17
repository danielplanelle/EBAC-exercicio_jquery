// 'div' will slide down upon clicking on header button. Toggle provides 'div's' collapse  
// and expanse even when clicking on header button more than one time
$(document).ready(function() {
  $('header').click(function() {
    $('div').slideToggle();
    
  })
})

$(document).ready(function() {
  $('.task-list').on('click', 'li', function() {
    $(this).toggleClass('second-time');
  });
});


$('form').on('submit', function(e){
  e.preventDefault();
  const insertNewTask = $('#insert-new-task').val();
  const newTask = $('<style="display:none">');
  $(`<li>${insertNewTask}</li>`).appendTo(newTask);
  
  $(`
    <div class="container-list">
    <li>"${insertNewTask}"</li>

    </div>
  `).appendTo(newTask);
  $(newTask).appendTo('ul');
  $(newTask).fadeIn();

  $('#insert-new-task').val('');
})



