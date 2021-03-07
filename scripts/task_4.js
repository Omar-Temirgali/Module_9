const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function request() {
    const value1 = Number(document.querySelector('#input1').value) ;
    const value2 = Number(document.querySelector('#input2').value);

    if (value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300 || isNaN(value1) || isNaN(value2)) {
        result.innerHTML = "Одно из чисел вне диапазона от 100 до 300";
    } else {
        fetch(`https://picsum.photos/${value1}/${value2}`)
            .then((res) => {
                result.innerHTML = "";
                let img = document.createElement('img');
                img.setAttribute('src', res.url);
                result.appendChild(img);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

btn.addEventListener('click', request);