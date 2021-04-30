const appointment = [];
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const newAppointment = Object.fromEntries(new FormData(event.target));
  appointment.push(newAppointment);
  console.log(appointment);
});
// ToDo write a render function to display the array in a table.
// we will create table and append it to the body.
// we will use map function.
