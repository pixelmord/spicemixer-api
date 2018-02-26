import mongoose from 'mongoose';
import { cloudinaryImageSchema } from './CloudinaryImage';
export type SpiceModel = {
  name: string;
  description?: string;
};

export const spiceSchema = new mongoose.Schema(
  {
    name: { type: String!, unique: true },
    description: String,
    images: [cloudinaryImageSchema]
  },
  { timestamps: true }
);

const Spice = mongoose.model('Spice', spiceSchema);
export default Spice;
