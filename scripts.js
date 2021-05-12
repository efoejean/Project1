let startDate = '';
let endDate = '';
let filterSearch = '';
const p = document.querySelector('p');
const tbody = document.querySelector('tbody');
const { content } = document.querySelector('template');
const appointment = [
  {
    Date: '2021-05-05',
    Name: 'Efoe',
    Phone: '618-409-6527',
    Price: '$150',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '8:00',
  },
  {
    Date: '2021-05-06',
    Name: 'Abel',
    Phone: '618-409-6527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '9:00',
  },
  {
    Date: '2021-03-05',
    Name: 'jaque',
    Phone: '618-409-6527',
    Price: '$150',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '8:00',
  },
  {
    Date: '2021-05-19',
    Name: 'louane',
    Phone: '963-985-9625',
    Price: '$180',
    Services: 'cornrows',
    Stylist: 'Abi',
    Time: '15:00',
  },
  {
    Date: '2021-05-17',
    Name: 'beau',
    Phone: '963-955-9625',
    Price: '$150',
    Services: 'twist',
    Stylist: 'Abi',
    Time: '9:00',
  },
  {
    Date: '2021-05-20',
    Name: 'bella',
    Phone: '618-955-9625',
    Price: '$220',
    Services: 'microbraids',
    Stylist: 'chloe',
    Time: '15:00',
  },
  {
    Date: '2021-05-20',
    Name: 'andrea',
    Phone: '618-355-9625',
    Price: '$180',
    Services: 'cornrows',
    Stylist: 'marina',
    Time: '9:00',
  },
  {
    Date: '2021-06-05',
    Name: 'Abelito',
    Phone: '618-409-6527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '9:00',
  },
];

function renderAppointment(lists) {
  lists.forEach(({ Date, Name, Phone, Price, Services, Stylist, Time }) => {
    const newRow = content.cloneNode(true);
  });
}

renderAppointment(appointment);

// Sort filter function
function filterAppoint(lists, bDate, eDate) {
  return lists.filter(({ Date }) => Date >= bDate && Date <= eDate);
}

// Search by Name and Phone filter function
function startWithFilter(lists, textInput) {
  return lists.filter(({ Phone, Name }) => (Phone, Name).startsWith(textInput));
}

// randomn function
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const newAppointment = Object.fromEntries(new FormData(event.target));
  appointment.push(newAppointment);
  renderAppointment(appointment);
});
document.querySelector('button[id="sort"]').addEventListener('click', () => {
  const sortApp = appointment.sort((a, b) => (a.Date < b.Date ? -1 : 1));
  renderAppointment(sortApp);
});

// filter query
document.querySelector('#filterForm').addEventListener('submit', event => {
  event.preventDefault();
  startDate = event.target.elements[0].value;
  endDate = event.target.elements[1].value;
  const filterResult = filterAppoint(appointment, startDate, endDate);
  renderAppointment(filterResult);
});

document.querySelectorAll('select[name="status"]').forEach(select => {
  select.addEventListener('change', event => {
    console.log(event.target.value);
  });
});
document
  .querySelector('input[id="filterSearch"]')
  .addEventListener('input', event => {
    filterSearch = event.target.value;
    renderAppointment(startWithFilter(appointment, filterSearch));
  });

// random form query
document.querySelector('#rewardForm').addEventListener('submit', event => {
  event.preventDefault();
  startDate = event.target.elements[0].value;
  endDate = event.target.elements[1].value;
  const filterRewardResult = filterAppoint(appointment, startDate, endDate);
  const rewardResult = getRandomIntInclusive(0, filterRewardResult.length - 1);
  const randomName = filterRewardResult[rewardResult];
  p.innerHTML = `The winner is ${randomName.Name}, please contact her at ${randomName.Phone}`;
});
