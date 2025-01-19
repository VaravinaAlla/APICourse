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
    email: 'andrii@mail.ru', 
  },
];

const trustedEmailRegex = /^[\w.-]+@(gmail\.com|yahoo\.com)$/;

const trustedEmails = arr
  .map((obj) => obj.email) 
  .filter((email) => trustedEmailRegex.test(email)); 

console.log(trustedEmails);
