import { CarBrand } from "../models/Car";

export const findBrandByName = async (name: string) => {
  return CarBrand.findOne({
    brand: new RegExp(`^${name}$`, "i"),
  });
};

export const findModelInBrandByName = (brand: any, modelName: string) => {
  return brand.models.find(
    (m: any) => m.name.toLowerCase() === modelName.toLowerCase()
  );
};

export const findVariantInModelByName = (model: any, variantName: string) => {
  return model.variants.find(
    (v: any) => v.name.toLowerCase() === variantName.toLowerCase()
  );
};
