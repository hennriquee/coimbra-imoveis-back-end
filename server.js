import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import cloudinary from "./cloudinary.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

const prisma = new PrismaClient();

app.get("/imoveis", async (req, res) => {
  const imoveis = await prisma.imovel.findMany();

  res.status(200).json(imoveis);
});

app.get("/imoveis/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const imovel = await prisma.imovel.findFirst({
      where: { id: id },
    });

    if (!imovel) {
      return res.status(404).json({ error: "Imóvel não encontrado" });
    }

    res.status(200).json(imovel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar o imóvel." });
  }
});

app.post("/imoveis/cadastro", async (req, res) => {
  const imovel = await prisma.imovel.create({
    data: {
      category: req.body.category,
      title: req.body.title,
      state: req.body.state,
      city: req.body.city,
      images: req.body.images,
      text: req.body.text,
      price: req.body.price,
    },
  });
  res.status(201).json(imovel);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const admin = admLogins.find(
    (adm) => adm.email === email && adm.password === password
  );

  if (admin) {
    return res.json({ token: "admloggado.200" });
  } else {
    return res.status(401).json({ error: "Email ou senha inválidos" });
  }
});

app.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const imovel = await prisma.imovel.update({
    where: {
      id: id,
    },

    data: {
      ...req.body,
    },
  });
  res.status(200).json(imovel);
});

app.delete("/imoveis/:id", async (req, res) => {
  const { id } = req.params;
  const imovel = await prisma.imovel.findUnique({ where: { id } });

  if (!imovel) {
    return res.status(404).json({ error: "Imóvel não encontrado" });
  }

  if (imovel.images && imovel.images.length > 0) {
    for (const imageUrl of imovel.images) {
      // Extrair o public_id da URL
      const parts = imageUrl.split("/");
      const fileName = parts[parts.length - 1];
      const publicId = fileName.split(".")[0]; // remove extensão

      await cloudinary.uploader.destroy(publicId);
    }
  }

  await prisma.imovel.delete({
    where: { id: id },
  });

  res.status(200).json({ message: "Imóvel deletado com sucesso!" });
});

app.listen(3000);
