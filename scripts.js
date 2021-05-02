const table = document.createElement('table');

document.body.appendChild(table);

const appointment = [
  {
    Date: '2021-05-05',
    Name: 'Efoe ',
    Phone: '6184096527',
    Price: '$150',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '8h',
  },
  {
    Date: '2021-05-06',
    Name: 'Abel ',
    Phone: '6184096527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '9h',
  },
  {
    Date: '2021-06-05',
    Name: 'Abelito ',
    Phone: '6184096527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '9h',
  },
];

function renderAppointment(lists) {
  table.innerHTML = lists
    .map(
      ({ Date, Name, Phone, Price, Services, Stylist, Time }) => `<tr>
  <th>${Date}</th>
  <th>${Name}</th>
  <th>${Phone}</th>
  <th>${Price}</th>
  <th>${Services}</th>
  <th>${Stylist}</th>
  <th>${Time}</th>
  </tr>`,
    )
    .join('');
}
renderAppointment(appointment);
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const newAppointment = Object.fromEntries(new FormData(event.target));
  appointment.push(newAppointment);
  renderAppointment(appointment);
});

// ToDo add textbox and button  to sort , filter
