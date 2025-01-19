const jsonString = JSON.stringify(arr);

const trustedEmailRegex = /^[\w.-]+@(gmail\.com|yahoo\.com)$/;

const trustedEmails = jsonString.match(trustedEmailRegex);
console.log(trustedEmails);
