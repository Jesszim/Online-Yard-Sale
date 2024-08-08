import { GridFsStorage } from 'multer-gridfs-storage';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGO_URI, // Ensure this is correctly set in your .env file
    options: { useNewUrlParser: true, useUnifiedTopology: true }, // Recommended options for MongoDB driver
    file: (req, file) => {
        // Check for the file type
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
     
            return {
                bucketName: "image",
                filename: `${Date.now()}_${file.originalname}`, // Custom filename with timestamp
            };
        } else {
          
            return {
                bucketName: "other", 
                filename: `${Date.now()}_${file.originalname}`
            };
        }
    },
});

export const upload = multer({storage});
