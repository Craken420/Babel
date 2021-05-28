import { styleBody, addTitle } from './dom';

const greet = (name: string) => {
    let nam = name;
    alert(`Hey ${nam}`);
};

greet('I am coming from the index.js');

addTitle('hellooo');
styleBody();
