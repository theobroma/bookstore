/**
 * Created by Sasha on 01.02.2017.
 */
import express from 'express';
import Avatar from '../models/avatar';
let router = express.Router();

router.post('/api/avatar',function(req,res){
 var newAvatar = new Avatar();
 newAvatar.img.data = fs.readFileSync(req.files.userPhoto.path)
 newAvatar.img.contentType = 'image/png';
 newAvatar.save();
});

export default router;
