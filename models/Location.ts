import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILocation extends Document {
    latitude: number;
    longitude: number;
    timestamp: Date;
}

const LocationSchema: Schema = new Schema({
    latitude: {
        type: Number,
        required: [true, 'Latitude is required'],
    },
    longitude: {
        type: Number,
        required: [true, 'Longitude is required'],
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

// Check if the model is already compiled to prevent OverwriteModelError
const Location: Model<ILocation> = mongoose.models.Location || mongoose.model<ILocation>('Location', LocationSchema);

export default Location;
