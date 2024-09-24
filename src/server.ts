import app from './app';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  app.listen(PORT, () => {
    console.log('Environment variables:');
    console.log('PORT:', PORT);
    console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not set');
  });
};

startServer();
