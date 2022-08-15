let btn = document.querySelector('.btn');
let bookList = document.getElementById('book-list');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let year = document.getElementById('year');

    if ((title.value == '') || (author.value == '')) {
        alert('Fill empty places');
    } else {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td1.innerHTML = title.value;
        td2.innerHTML = author.value;
        td3.innerHTML = year.value;
        tr.append(td1, td2, td3);
        bookList.appendChild(tr);
        title.value = '';
        author.value = '';
        year.value = '';
    }



});