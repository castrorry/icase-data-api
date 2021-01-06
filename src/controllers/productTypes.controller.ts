import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ProductType } from "../models/ProductType";

export default {
  create: async (request: Request, response: Response) => {
    try {
      const { name, category_id } = request.body;

      const productTypeRepository = getRepository(ProductType);
      const productType = productTypeRepository.create({
        name, category_id
      });
      const productTypeStored = await productTypeRepository.save(productType);

      return response.status(201).json(productTypeStored);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  index: async (request: Request, response: Response) => {
    try {
      const productTypeRepository = getRepository(ProductType);
      const productTypes = await productTypeRepository.find({
        relations: ['category']
      });

      return response.status(200).json(productTypes);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  show: async (request: Request, response: Response) => {
    try {
      const { id: product_type_id } = request.params;

      const productTypeRepository = getRepository(ProductType);
      const productType = await productTypeRepository.findOneOrFail(product_type_id, {
        relations: ['category']
      });

      return response.status(200).json(productType);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  update: async (request: Request, response: Response) => {
    try {
      const productTypeDTO = request.body;
      const { id: product_type_id } = request.params;

      const productTypeRepository = getRepository(ProductType);
      const productTypeUpdated = await productTypeRepository.save({
        ...await productTypeRepository.findOneOrFail(product_type_id),
        ...productTypeDTO
      })

      return response.status(201).json(productTypeUpdated);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  delete: async (request: Request, response: Response) => {
    try {
      const { id: product_type_id } = request.params;

      const productTypeRepository = getRepository(ProductType);
      const productTypeDeleted = await productTypeRepository.delete(product_type_id);

      return response.status(200).json(productTypeDeleted);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  }
}