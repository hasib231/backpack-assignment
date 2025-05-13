type person = {
    name: string;
    age: number;
    gender: 'male' | 'female';
}

const people:person[] = [{name: "Hasib", age: 24, gender: "male"},
    {name: "Hasib", age: 26, gender: "male"},
    {name: "Manisha", age: 22, gender: "female"},
    { name: "Ashik", age: 25, gender: "male"},
    { name: "Megla", age: 24, gender: "female"},
    {name: "Mitu", age: 25, gender: "female"},
]

function getFemaleNames(persons:person[]):string[] {
    return persons
        .filter(person => person.gender === 'female')
        .map(person=>person.name)
}

console.log(getFemaleNames(people));