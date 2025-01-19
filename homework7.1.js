var arr = [
  {
    userName: 'Test',
    lastName: 'Test',
    email: 'test.test@gmail.com',
  },
  {
    userName: 'Dmitro',
    lastName: 'Porohov',
    email: 'dmitro.porohov@yahoo.com',
  },
  {
    userName: 'Andrii',
    lastName: '',
    email: 'andrii@mail.ru', // Нам такі не підходять
  },
];
const jsonString = JSON.stringify(arr);
const trustedEmailRegex = /[\w.-]+@(gmail|yahoo)\.com/g;
const trustedEmails = jsonString.match(trustedEmailRegex);
console.log(trustedEmails);
