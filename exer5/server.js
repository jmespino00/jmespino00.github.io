import express from 'express';

const app =  express();


app.use(express.json());

app.post('/add-book', (req, res) => {
    const bookData = req.body.bookName + ',' + req.body.isbn + ',' + req.body.author + ',' + req.body.yearPublished + '\n';


    if (bookName && isbn && author && yearPublished) {
        const bookData = req.body.bookName + ',' + req.body.isbn + ',' + req.body.author + ',' + req.body.yearPublished + '\n';

        try {
            fs.appendFileSync('books.txt', bookData);
            console.log('Success.');
            res.json({ success: true });
        } catch (err) {
            console.error(err);
            res.json({ success: false });
        }
    } else {
        res.json({ success: false });
    }


});






app.listen(3000, () => { 
    
    console.log('Server started at port 3000')
    
} );