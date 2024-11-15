const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
  destination : function(req, file, cb){
    cb(null, 'uploads/');
  },
  filename : function(req, file, cb){
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    cb(null, new Date().valueOf() + path.basename(file.originalname));
  }
});

const upload = multer({ storage : storage });

app.post('/profile', upload.single('avatar'), (req, res)=>{ // avatar name='avatar'
  console.log(req.file); //단건
  console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req,res)=>{ // photos name='photos'
  for(let file of req.files){ //여러건
    console.log(file);
  }
})

app.listen(5000, ()=>{
  console.log('Server Start!!');
})