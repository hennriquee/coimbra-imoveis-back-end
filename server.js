import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import cloudinary from "./cloudinary.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

// LOGINS DE ACESSO
const admLogins = [
  { email: "mateus@gmail.com", password: "1234" },
  { email: "luana@gmail.com", password: "1233" },
];

const prisma = new PrismaClient();

// Acordar o servidor
app.get("/", (req, res) => {
  res.sendStatus(200);
});

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
  try {
    const { id } = req.params;
    const { title, text, price, removedImages, addedImages } = req.body;

    // Primeiro, busca o imóvel atual
    const imovelAtual = await prisma.imovel.findUnique({
      where: { id },
      select: { images: true },
    });

    if (!imovelAtual) {
      return res.status(404).json({ error: "Imóvel não encontrado." });
    }

    // Remove imagens antigas que foram excluídas
    let novasImagens = imovelAtual.images;
    if (removedImages && removedImages.length > 0) {
      novasImagens = imovelAtual.images.filter(
        (url) => !removedImages.includes(url)
      );

      // Remove do Cloudinary
      for (const imageUrl of removedImages) {
        const parts = imageUrl.split("/");
        const fileName = parts[parts.length - 1];
        const publicId = fileName.split(".")[0];

        try {
          await cloudinary.uploader.destroy(publicId);
        } catch (err) {
          console.error("Erro ao deletar do Cloudinary:", err.message);
        }
      }
    }

    // Adiciona novas imagens, se houver
    if (addedImages && addedImages.length > 0) {
      novasImagens = [...novasImagens, ...addedImages];
    }

    // Atualiza no banco
    const imovel = await prisma.imovel.update({
      where: { id },
      data: {
        title,
        text,
        price,
        images: novasImagens,
      },
    });

    res.status(200).json(imovel);
  } catch (error) {
    console.error("Erro ao editar imóvel:", error);
    res.status(500).json({ error: "Erro ao editar imóvel." });
  }
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
