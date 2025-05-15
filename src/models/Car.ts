import mongoose, {Schema, Document} from "mongoose";

interface Variant {
    id: number;
    name: string;
    type: string;
    transmition: String;
    sheet: string;
}

interface Model {
    id: number;
    name: string;
    type: string;
    description: string;
    variants: Variant[];
}

export interface CarBrandDocument extends Document {
    brand: string;
    models: Model[];
}

const VariantSchema = new Schema<Variant> ({
    id: {type: Number},
    name: {type: String},
    type: {type: String},
    transmition: {type: String},
    sheet: {type: String}
});

const ModelSchema = new Schema<Model> ({
    id: {type: Number},
    name: {type: String},
    type: {type: String},
    description: {type: String},
    variants: [VariantSchema]
});

const CarBrandSchema = new Schema<CarBrandDocument>({
    brand: {type: String},
    models: [ModelSchema]
});

export const CarBrand = mongoose.model<CarBrandDocument>("CarBrand", CarBrandSchema);