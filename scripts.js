import {
  appointments,
  filterAppoint,
  nameFilter,
  sortApp,
  getRandomIntInclusive,
  phoneFilter,
  ServiceFilter,
  StylistFilter,
  reducePrice,
} from './data.js';

let startDate = '';
let endDate = '';

const p = document.querySelector('p');
const resultP = document.querySelector('#totalResult');
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

// random function

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const newAppointment = Object.fromEntries(new FormData(event.target));
  appointments.push(newAppointment);
  renderAppointment(appointments);
});
document.querySelector('button[id="sort"]').addEventListener('click', () => {
  renderAppointment(sortApp(appointments));
});

// filter query
document.querySelector('#filterForm').addEventListener('submit', event => {
  event.preventDefault();

  startDate = event.target.elements[0].value;
  endDate = event.target.elements[1].value;
  const filterResult = filterAppoint(appointments, startDate, endDate);
  renderAppointment(filterResult);
});

document.querySelector('#delete').addEventListener('click', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', ({ target: { checked } }) => {});
  });
});
document
  .querySelector('input[id="nameSearch"]')
  .addEventListener('input', ({ target: { value } }) => {
    renderAppointment(nameFilter(appointments, value));
  });

document
  .querySelector('input[id="filterSearch"]')
  .addEventListener('input', ({ target: { value } }) => {
    renderAppointment(phoneFilter(appointments, value));
  });
document
  .querySelector('select[id="styleSearch"]')
  .addEventListener('change', ({ target: { value } }) => {
    if (value === 'default') {
      renderAppointment(appointments);
    } else {
      renderAppointment(ServiceFilter(appointments, value));
    }
  });

document
  .querySelector('select[id="stylistSearch"]')
  .addEventListener('change', ({ target: { value } }) => {
    if (value === 'default') {
      renderAppointment(appointments);
    } else {
      renderAppointment(StylistFilter(appointments, value));
    }
  });

document.querySelector('#total').addEventListener('click', () => {
  resultP.innerHTML = `The total amount is $${reducePrice(
    filterAppoint(appointments, startDate, endDate),
  )}`;
});

document.querySelector('showAll').addEventListener('click', () => {
  renderAppointment(appointments);
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
