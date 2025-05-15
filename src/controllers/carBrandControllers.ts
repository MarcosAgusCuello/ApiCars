import { Request, Response } from "express";
import { CarBrand } from "../models/Car";

// Obtener todas las marcas
export const getAllBrands = async (_req: Request, res: Response): Promise<void> => {
    try {
        const brands = await CarBrand.find();
        res.json(brands);

    } catch (error) {
        res.status(500).json({ message: "Error al obtener las marcas", error });

    }
};

// Obtener una marca por nombre
export const getBrandByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { brandName } = req.params;

        const brand = await CarBrand.findOne({
            brand: new RegExp(`^${brandName}$`, "i")
        });

        if (!brand) {
            res.status(404).json({ message: "Marca no encontrada" });
            return;
        }

        res.json(brand);
        
    } catch (error) {
        res.status(500).json({ message: "Error al buscar la marca", error });
    }
};



// Obtener un modelo específico por nombre dentro de una marca
export const getModelByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { brandName, modelName } = req.params;

        const brand = await CarBrand.findOne({
            brand: new RegExp(`^${brandName}$`, "i")
        });

        if (!brand) {
            res.status(404).json({ message: "Marca no encontrada" });
            return;
        }

        const model = brand.models.find(
            (m) => m.name.toLowerCase() === decodeURIComponent(modelName).toLowerCase()
        );

        if (!model) {
            res.status(404).json({ message: "Modelo no encontrado" });
            return;
        }

        res.json(model);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar el modelo", error });
    }
};

// Obtener una variante por nombre dentro de un modelo
export const getVariantByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { brandName, modelName, variantName } = req.params;

        const brand = await CarBrand.findOne({
            brand: new RegExp(`^${brandName}$`, "i"),
        });

        if (!brand) {
            res.status(404).json({ message: "Marca no encontrada" });
            return;
        }

        const model = brand.models.find(
            (m) => m.name.toLowerCase() === decodeURIComponent(modelName).toLowerCase()
        );

        if (!model) {
            res.status(404).json({ message: "Modelo no encontrado" });
            return;
        }

        const variant = model.variants.find(
            (v) => v.name.toLowerCase() === decodeURIComponent(variantName).toLowerCase()
        );

        if (!variant) {
            res.status(404).json({ message: "Variante no encontrada" });
            return;
        }

        res.json(variant);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar la variante", error });
    }
};
