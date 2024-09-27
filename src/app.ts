import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import { AppError, NotFoundError } from './util/errors';

// Cargar variables de entorno
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

// Middleware
app.use(helmet()); // Middleware de seguridad
app.use(morgan('dev')); // Middleware de logging
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

// Middleware de Content Security Policy
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'",
  );
  next();
});

app.use(express.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Swagger setup
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de PetBook');
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  next(new NotFoundError());
});

// Manejo de errores global
app.use((err: AppError, req: Request, res: Response) => {
  console.error(err);

  const status = err.status || 500;
  const message = err.message || 'Algo salió mal';

  res.status(status).json({
    success: false,
    status,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  });
});

export default app;
