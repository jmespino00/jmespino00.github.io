import express from 'express';

const app =  express();




app.post('/add-book', (req, res) => {
    res.send('Books with its information');
})









app.listen(3000, () => { 
    
    console.log('Server started at port 3000')
    
} );