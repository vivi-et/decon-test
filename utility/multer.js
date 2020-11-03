const fs = require('fs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './public/uploads/imgs/design',
  filename: (req, file, cb) => {
    if (file) {
      cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`);
      // console.log(`fieldName : ${file.fieldname}`);
      // console.log(`originalName : ${file.originalname}`);
    }
  },
});

// Init upload
const upload = multer({
  storage,
  limits: { files: 10, fileSize: 10000 },
  // fileFilter: (req, file, cb) => {
  //   if (file) {
  //     checkFileType(file, cb);
  //   }
  // },
}).any();

// FileTypeChecker
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check the extensions
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // check Mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }
  return cb('Error: Images Only');
}

module.exports = { upload };
