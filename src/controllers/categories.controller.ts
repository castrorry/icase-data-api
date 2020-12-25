import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../models/Category";

export default {
  create: async (request: Request, response: Response) => {
    try {
      const { name } = request.body;

      const categoryRepository = getRepository(Category);
      const category = categoryRepository.create({ name });
      const categoryStored = await categoryRepository.save(category);

      return response.status(201).json(categoryStored);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  index: async (request: Request, response: Response) => {
    try {
      const categoryRepository = getRepository(Category);
      const categories = await categoryRepository.find();

      return response.status(200).json(categories);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  show: async (request: Request, response: Response) => {
    try {
      const {id: category_id} = request.params;

      const categoryRepository = getRepository(Category);
      const category = await categoryRepository.findOneOrFail(category_id);

      return response.status(200).json(category);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  update: async (request: Request, response: Response) => {
    try {
      const { name } = request.body;
      const {id: category_id} = request.params;

      const categoryRepository = getRepository(Category);
      const categoryStored = await categoryRepository.save({
        ...await categoryRepository.findOneOrFail(category_id),
        name
      });

      return response.status(201).json(categoryStored);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  delete: async (request: Request, response: Response) => {
    try {
      const {id: category_id} = request.params;

      const categoryRepository = getRepository(Category);
      const categoryDeleted = await categoryRepository.delete(category_id);

      return response.status(200).json(categoryDeleted);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  }
}