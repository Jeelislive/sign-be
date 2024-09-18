import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import cloudinary from 'cloudinary';

export const test = (req, res) => {
  res.json({
    message: 'API is working!',
  });
};

// update user

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can update only your account!'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


// delete user


export const deleteUser = async (req, res, next) => {
  console.log(req.user.id);
  console.log(req.params.id);
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can delete only your account!'));
  }
  try {
   const user =  await User.findByIdAndDelete(req.params.id);
    console.log(user);
    res.status(200).json('User has been deleted...');
  } catch (error) {
    next(error);
  }

}



// // upload signature
// export const signUpload = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }
//     console.log(req.file);

//     const user = await User.findById(id);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const uploadedSignature = await cloudinary.uploader.upload(req.file.path, {
//       folder: 'signatures',
//       public_id: `signature_${user._id}`,
//       overwrite: true,
//     });

//     user.signatureUrl = uploadedSignature.secure_url;
//     await user.save();

//     res.status(200).json({ message: 'Signature uploaded successfully', signatureUrl: uploadedSignature.secure_url });
//   } catch (error) {
//     console.error('Error uploading signature:', error);
//     res.status(500).json({ message: 'Error uploading signature' });
//   }
// }