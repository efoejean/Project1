export const appointments = [
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

export const filterAppoint = (lists, bDate, eDate) =>
  lists.filter(({ Date }) => Date >= bDate && Date <= eDate);

export const nameFilter = (lists, textInput) =>
  lists.filter(({ Name }) =>
    Name.toLowerCase().includes(textInput.toLowerCase()),
  );
