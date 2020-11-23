import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { IDeviceDTO } from "../interfaces/device";
import { Device } from "../models/Device";

export default {
  create: async (request: Request, response: Response) => {
    try {
      const {
        name,
        model,
        brand,
        year
      }: IDeviceDTO = request.body;

      const deviceRepository = getRepository(Device);
      const device = deviceRepository.create({
        name, model, brand, year
      });
      const deviceStored = await deviceRepository.save(device);

      return response.status(201).json(deviceStored);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  index: async (request: Request, response: Response) => {
    try {
      const deviceRepository = getRepository(Device);
      const devices = await deviceRepository.find();

      return response.status(200).json(devices);
    } catch ({ message }) {
      return response.status(400).json({ message })
    }
  },
  show: async (request: Request, response: Response) => {
    try {
      const { id: device_id } = request.params;

      const deviceRepository = getRepository(Device);
      const device = await deviceRepository.findOneOrFail(device_id);

      return response.status(200).json(device);
    } catch ({ message }) {
      return response.status(400).json({ message })
    }
  }
}