import mongoose from 'mongoose';

export type SpiceModel = {
  name: string;
};

export const spiceSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true }
  },
  { timestamps: true }
);

const Spice = mongoose.model('Spice', spiceSchema);
export default Spice;
