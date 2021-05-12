import { appointments, filterAppoint } from './data.js';

let startDate = '';
let endDate = '';

const p = document.querySelector('p');
const tbody = document.querySelector('tbody');
const { content } = document.querySelector('template');

function renderAppointment(lists) {
  tbody.innerHTML = '';

  lists.forEach(({ Date, Name, Phone, Price, Services, Stylist, Time }) => {
    const newRow = content.cloneNode(true);
    const tds = newRow.querySelectorAll('td');
    tds[0].innerHTML = `<input type="checkbox" id="" name="selectCheckbox">`;
    tds[1].innerHTML = Date;
    tds[2].innerHTML = Name;
    tds[3].innerHTML = Phone;
    tds[4].innerHTML = Price;
    tds[5].innerHTML = Services;
    tds[6].innerHTML = Stylist;
    tds[7].innerHTML = Time;
    tbody.appendChild(newRow);
  });
}

renderAppointment(appointments);

// filter function

// Search by Name and Phone filter function
function startWithFilter(lists, textInput) {
  return lists.filter(({ Phone, Name }) =>
    (Phone, Name.toLowerCase()).startsWith(textInput),
  );
}

// random function
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const newAppointment = Object.fromEntries(new FormData(event.target));
  appointments.push(newAppointment);
  renderAppointment(appointments);
});
document.querySelector('button[id="sort"]').addEventListener('click', () => {
  const sortApp = appointments.sort((a, b) => (a.Date < b.Date ? -1 : 1));
  renderAppointment(sortApp);
});

// filter query
document.querySelector('#filterForm').addEventListener('submit', event => {
  event.preventDefault();
  startDate = event.target.elements[0].value;
  endDate = event.target.elements[1].value;
  const filterResult = filterAppoint(appointments, startDate, endDate);
  renderAppointment(filterResult);
});

document.querySelectorAll('input[type="checkbox"]').forEach(input => {
  input.addEventListener('change', event => {
    console.log(event.target.value);
  });
});
document
  .querySelector('input[id="filterSearch"]')
  .addEventListener('input', ({ target: { value } }) => {
    renderAppointment(startWithFilter(appointments, value));
  });

// random form query
document.querySelector('#rewardForm').addEventListener('submit', event => {
  event.preventDefault();
  startDate = event.target.elements[0].value;
  endDate = event.target.elements[1].value;
  const filterRewardResult = filterAppoint(appointments, startDate, endDate);
  const rewardResult = getRandomIntInclusive(0, filterRewardResult.length - 1);
  const randomName = filterRewardResult[rewardResult];
  p.innerHTML = `The winner is ${randomName.Name}, please contact her at ${randomName.Phone}`;
});
