const table = document.createElement('table');
const th = table.createTHead('Name', 'date');
document.body.appendChild(table);

const appointment = [
  {
    Date: '2021-05-05',
    Name: 'Efoe',
    Phone: '618-409-6527',
    Price: '$150',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '8h',
  },
  {
    Date: '2021-05-06',
    Name: 'Abel',
    Phone: '618-409-6527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '9h',
  },
  {
    Date: '2021-03-05',
    Name: 'jaque',
    Phone: '618-409-6527',
    Price: '$150',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '8h',
  },
  {
    Date: '2021-06-05',
    Name: 'Abelito',
    Phone: '618-409-6527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '9h',
  },
];

function renderAppointment(lists) {
  table.innerHTML = lists
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
