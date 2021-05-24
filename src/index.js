import { styleBody, addTitle } from './dom';

const greet = name => {
    let nam = name;
    console.log(`Hey ${nam}`);
};

greet('I am coming from the index.js');

addTitle('hellooo');
styleBody();
