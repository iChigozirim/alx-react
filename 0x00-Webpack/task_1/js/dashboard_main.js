import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
  $('body').append("<p>Holberton Dashboard</p>");
  $('body').append("<p>Dashboard data for the students</p>");
  $('body').append("<button>Click here to get started</button>");
  $('body').append("<p id='count'></p>");
  $('body').append("<p>Copyright - Holberton School</p>");

  function updateCounter() {
    let count = $('#count').html() || 0;
    $('button').click(function () {
      count += 1
      $('#count').html(`${count} clicks on the button`);
    });
  };

  _.debounce(updateCounter, 500)
  updateCounter();

});
