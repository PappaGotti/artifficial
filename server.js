const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle file uploads
app.post('/upload', upload.array('files'), (req, res) => {
  // 'req.files' contains the uploaded files
  console.log(req.files);

  // You can perform additional operations here, such as saving the files to a database or cloud storage

  res.status(200).send('Files uploaded successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});