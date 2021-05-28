alert('I am coming from the dom.js file');

const styleBody = () => {
    alert('styleBody!!!');
};

const addTitle = (text: string) => {
    alert(text);
};

interface User {
    id: number
    firstName: string
    lastName: string
    role: string
}

function updateUser(id: number, update: Partial<User>) {
    const newUser = {...update}
    console.log(id, newUser)
}

updateUser(1, {id: 1, firstName:'Angel', lastName:'Peña', role:'Programador'});

export { styleBody, addTitle };
