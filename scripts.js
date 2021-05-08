let startDate = '';
let endDate = '';

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

const tbody = document.querySelector('tbody');

function renderAppointment(lists) {
  tbody.innerHTML = lists
    .map(
      ({ Date, Name, Phone, Price, Services, Stylist, Time }) =>
        `
   <tr>
<td>${Date}</td>
<td>${Name}</td>
<td>${Phone}</td>
<td>${Price}</td>
<td>${Services}</td>
<td>${Stylist}</td>
<td>${Time}</td>
<td><select name="status" id="time">
<option value="Scheduled">Scheduled</option>
<option value="Complete">Complete</option>
<option value="Cancel">Cancel</option>
</select></td></tr>`,
    )
    .join('');
}
renderAppointment(appointment);

function filterAppoint(lists, bDate, eDate) {
  return lists.filter(({ Date }) => Date >= bDate && Date <= eDate);
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

// Todo search by phone number.
