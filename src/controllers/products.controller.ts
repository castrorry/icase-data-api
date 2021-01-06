import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../models/Product";

export default {
  create: async (request: Request, response: Response) => {
    try {
      const {
        name,
        category_id,
        product_type_id,
        count,
        price,
        stock_price
      } = request.body;

      const productRepository = getRepository(Product);
      const product = productRepository.create({
        name,
        category_id,
        product_type_id,
        count,
        price,
        stock_price
      });
      const productStored = await productRepository.save(product);

      return response.status(201).json(productStored);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  index: async (request: Request, response: Response) => {
    try {
      const productRepository = getRepository(Product);
      const products = await productRepository.find({
        relations: ['category', 'product_type']
      });

      return response.status(200).json(products);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  show: async (request: Request, response: Response) => {
    try {
      const { id: product_id } = request.params;

      const productRepository = getRepository(Product);
      const product = await productRepository.findOneOrFail(product_id, {
        relations: ['category', 'product_type']
      });

      return response.status(200).json(product);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  update: async (request: Request, response: Response) => {
    try {
      const productDTO = request.body;
      const { id: product_id } = request.params;

      const productRepository = getRepository(Product);
      const productUpdated = productRepository.save({
        ...await productRepository.findOneOrFail(product_id),
        ...productDTO
      });

      return response.status(201).json(productUpdated);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  delete: async (request: Request, response: Response) => {
    try {
      const {id: product_id} = request.params;

      const productRepository = getRepository(Product);
      const productDeleted = await productRepository.delete(product_id);

      return response.status(200).json(productDeleted);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  }
}