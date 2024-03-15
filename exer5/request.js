import needle from 'needle';

needle.get('http://localhost:3000/add-book', 
    {
        bookName: '',
        isbn: '',
        author: '',
        yearPublished: '',
    },
    (err, res) => {
    console.log(res.body);  
});