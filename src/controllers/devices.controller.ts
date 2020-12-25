import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { IDeviceDTO } from "../interfaces/device";
import { Device } from "../models/Device";
import { DeviceBrand } from "../models/DeviceBrand";

export default {
  create: async (request: Request, response: Response) => {
    try {
      const {
        name,
        brand,
        launched
      }: IDeviceDTO = request.body;

      const brandRepository = getRepository(DeviceBrand);
      let [deviceBrand] = await brandRepository.find({
        where: { name: brand.toLowerCase() }
      });

      if (!deviceBrand) {
        const newBrand = brandRepository.create({ name: brand.toLowerCase() });
        deviceBrand = await brandRepository.save(newBrand);
      }

      const deviceRepository = getRepository(Device);
      const device = deviceRepository.create({
        name, launched, brand: deviceBrand
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
      const devices = await deviceRepository.find({
        relations: ['brand']
      });

      return response.status(200).json(devices);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  show: async (request: Request, response: Response) => {
    try {
      const { id: device_id } = request.params;

      const deviceRepository = getRepository(Device);
      const device = await deviceRepository.findOneOrFail(device_id, {
        relations: ['brand']
      });

      return response.status(200).json(device);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  update: async (request: Request, response: Response) => {
    try {
      const deviceDTO: IDeviceDTO = request.body;
      const { id: device_id } = request.params;

      const deviceRepository = getRepository(Device);

      const brandRepository = getRepository(DeviceBrand);
      let [deviceBrand] = deviceDTO.brand != undefined ? await brandRepository.find({
        where: { name: deviceDTO.brand.toLowerCase() }
      }) : [undefined];

      if (!deviceBrand && deviceDTO.brand != undefined) {
        const newBrand = brandRepository.create({ name: deviceDTO.brand.toLowerCase() });
        deviceBrand = await brandRepository.save(newBrand);
      }
      
      const deviceStored = await deviceRepository.save({
        ...(await deviceRepository.findOneOrFail(device_id)),
        ...deviceDTO,
        brand: deviceBrand
      });

      return response.status(201).json(deviceStored);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  delete: async (request: Request, response: Response) => {
    try {
      const { id: device_id } = request.params;

      const deviceRepository = getRepository(Device);
      const deviceDeleted = await deviceRepository.delete(device_id);

      return response.status(200).json(deviceDeleted);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  }
}