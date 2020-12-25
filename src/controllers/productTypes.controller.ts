import { Request, Response } from "express";

export default {
  create: (request: Request, response: Response) => {
    try {
      return response.status(201).json({ ok: true });
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  index: (request: Request, response: Response) => {
    try {
      return response.status(200).json({ ok: true });
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  show: (request: Request, response: Response) => {
    try {
      return response.status(200).json({ ok: true });
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  update: (request: Request, response: Response) => {
    try {
      return response.status(201).json({ ok: true });
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  },
  delete: (request: Request, response: Response) => {
    try {
      return response.status(200).json({ ok: true });
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  }
}