const express = require('express');
const multer  = require('multer');
const app = express();
const port = 3000;

// Configure storage for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Make sure this uploads directory exists
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
});

const upload = multer({ storage: storage });

// Serving static files in Express
app.use(express.static('public'));

// POST handler for file upload
app.post('/upload', upload.single('artwork'), (req, res) => {
    console.log(req.file); // Log file information to your console
    res.send('File uploaded successfully.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
