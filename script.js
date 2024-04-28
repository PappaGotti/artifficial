const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files

const app = express();

app.post('/upload', upload.array('files'), (req, res) => {
    // 'req.files' contains the uploaded files
    console.log(req.files);

    // You can perform additional operations here, such as saving the files to a database or cloud storage

    res.status(200).send('Files uploaded successfully');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});