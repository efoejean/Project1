export const appointments = [
  {
    Date: '2021-05-05',
    Name: 'Efoe',
    Phone: '618-409-6527',
    Price: '$150',
    Services: 'twist',
    Stylist: 'pamela',
    Time: '9:00',
  },
  {
    Date: '2021-05-06',
    Name: 'Abel',
    Phone: '618-409-6527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'chloe',
    Time: '9:00',
  },
  {
    Date: '2021-03-05',
    Name: 'Elizabeth',
    Phone: '314-342-7227',
    Price: '$150',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '8:00',
  },
  {
    Date: '2021-03-05',
    Name: 'Olivia',
    Phone: '314-469-9623',
    Price: '$150',
    Services: 'microbraids',
    Stylist: 'Abi',
    Time: '8:00',
  },
  {
    Date: '2021-05-19',
    Name: 'louane',
    Phone: '963-985-9625',
    Price: '$180',
    Services: 'cornrows',
    Stylist: 'marina',
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
    Name: 'AEmily',
    Phone: '618-409-6527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '9:00',
  },
  {
    Date: '2021-04-15',
    Name: 'Emma',
    Phone: '314-423-6227',
    Price: '$220',
    Services: 'cornrows',
    Stylist: 'chloe',
    Time: '9:00',
  },
  {
    Date: '2021-05-15',
    Name: 'Ava',
    Phone: '718-379-6927',
    Price: '$200',
    Services: 'twist',
    Stylist: 'marina',
    Time: '15:00',
  },
  {
    Date: '2021-03-25',
    Name: 'Sophia',
    Phone: '318-974-7123',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'chloe',
    Time: '16:00',
  },
  {
    Date: '2021-03-17',
    Name: 'Mia',
    Phone: '321-257-6431',
    Price: '$150',
    Services: 'microbraids',
    Stylist: 'Abi',
    Time: '8:00',
  },
  {
    Date: '2021-06-01',
    Name: 'Isabella',
    Phone: '328-985-2527',
    Price: '$200',
    Services: 'senegalese',
    Stylist: 'pamela',
    Time: '15:00',
  },
  {
    Date: '2021-05-12',
    Name: 'Charlotte',
    Phone: '314-989-1534',
    Price: '$200',
    Services: 'cornrows',
    Stylist: 'Abi',
    Time: '15:00',
  },
  {
    Date: '2021-05-12',
    Name: 'Amelia',
    Phone: '315-462-8527',
    Price: '$220',
    Services: 'senegalese',
    Stylist: 'chloe',
    Time: '16:00',
  },
];

export const filterAppoint = (lists, bDate, eDate) =>
  lists.filter(({ Date }) => Date >= bDate && Date <= eDate);

export const nameFilter = (lists, textInput) =>
  lists.filter(({ Name }) =>
    Name.toLowerCase().includes(textInput.toLowerCase()),
  );
export const sortApp = lists =>
  lists.sort((a, b) => (a.Date < b.Date ? -1 : 1));

export const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const phoneFilter = (lists, textInput) =>
  lists.filter(({ Phone }) => Phone.includes(textInput));

export const ServiceFilter = (lists, textInput) =>
  lists.filter(({ Services }) => Services === textInput);

export const StylistFilter = (lists, textInput) =>
  lists.filter(({ Stylist }) => Stylist === textInput);

export const reducePrice = lists =>
  lists.reduce((total, { Price }) => total + Number(Price.slice(1)), 0);
