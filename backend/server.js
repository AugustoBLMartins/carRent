import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MySQL
const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Teste de rota
app.get('/api', (req, res) => {
  res.send('API funcionando!');
});

// Rota exemplo para pegar carros
app.get('/api/cars', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM cars');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar carros' });
  }
});

// Servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
