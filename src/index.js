require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const swaggerDocs = require('./swagger');

const app = express(); // <- primero defines app

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

connectDB();

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

app.get('/', (_, res) => res.json({ ok: true, msg: 'API funcionando 🚀' }));

// Swagger docs (después de montar rutas)
swaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
