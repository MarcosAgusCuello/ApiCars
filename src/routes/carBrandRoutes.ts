import express from "express";
import {
  getAllBrands,
  getBrandByName,
  getModelByName,
  getVariantByName,
} from "../controllers/carBrandControllers";

const router = express.Router();

router.get("/brands", getAllBrands);
router.get("/brands/:brandName", getBrandByName);
router.get("/brands/:brandName/models/:modelName", getModelByName);
router.get("/brands/:brandName/models/:modelName/variants/:variantName", getVariantByName);

export default router;