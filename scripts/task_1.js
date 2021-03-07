const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;


const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const result = [];
const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');

for (let i = 0; i < studentNode.length; i++) {
    const student = studentNode[i];
    const name = student.querySelector('name');
    const langAttr = name.getAttribute('lang');
    const firstNode = name.querySelector('first');
    const secondNode = name.querySelector('second');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof');

    const studentObj = {
        name: firstNode.textContent + ' ' + secondNode.textContent,
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: langAttr
    };
    result.push(studentObj);
}

console.log(result);
