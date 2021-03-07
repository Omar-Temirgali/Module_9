const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const data = localStorage.getItem('localData');

function request(e) {
    const value1 = Number(document.querySelector('#page-num').value);
    const value2 = Number(document.querySelector('#limit').value);

    if ((value1 < 1 || value1 > 10 || isNaN(value1)) && (value2 < 1 || value2 > 10 || isNaN(value2))) {
        result.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if (value1 < 1 || value1 > 10 || isNaN(value1)) {
        result.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    } else if (value2 < 1 || value2 > 10 || isNaN(value2)) {
        result.innerHTML = "Лимит вне диапазона от 1 до 10";
    } else {
        result.innerHTML = "";
        fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                localStorage.setItem('localData', JSON.stringify(data));
                displayResult(data);
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

function displayResult(data) {
    if (data) {
        data.forEach((item) => {
            let img = document.createElement('img');
            img.setAttribute('src', item.download_url);
            img.setAttribute('width', '250px');
            img.setAttribute('height', '250px');
            result.appendChild(img);
        })
    }
}
displayResult(JSON.parse(data));

btn.addEventListener('click', request);