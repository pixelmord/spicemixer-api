import mongoose from 'mongoose';

export type CloudinaryImage = {
  name: string;
  altText?: string;
  publicId: string;
};

export const cloudinaryImageSchema = new mongoose.Schema(
  {
    name: String!,
    altText: String,
    publicId: String!
  },
  { timestamps: true }
);

const CloudinaryImage = mongoose.model(
  'CloudinaryImage',
  cloudinaryImageSchema
);
export default CloudinaryImage;
