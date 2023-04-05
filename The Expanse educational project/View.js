'use strict';

const bookCard = document.querySelector('.leviathan-wakes');
const bookCardExpanded = document.querySelector('.book-expanded-card');
bookCard.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('opened');
  bookCardExpanded.style.display = 'grid';
});

const iconClose = document.querySelector('.icon-close');
iconClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('closed');
  bookCardExpanded.style.display = 'none';
});
