import needle from 'needle';

needle.post('http://localhost:3000/add-book', 
    {
        bookName: 'SANSRITI',
        isbn: '978-81-933904-0-5',
        author: 'Dr. V. M. Sharma',
        yearPublished: '2017',
    },
    (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.body);  
    }
});


needle.post('http://localhost:3000/add-book', 
    {
        bookName: 'The Higgler',
        isbn: '1-86092-010-1',
        author: 'A. E. Coppard',
        yearPublished: '1930',
    },
    (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.body);  
    }
});