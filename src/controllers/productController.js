const Product = require('../models/productModel');

// POST /api/product/create  (protegido)
exports.create = async (req, res) => {
  try {
    const { name, description = '', price } = req.body;
    if (!name || price == null) return res.status(400).json({ error: 'name y price son obligatorios' });

    const product = await Product.create({
      name,
      description,
      price,
      owner: req.userId
    });

    return res.status(201).json({ product });
  } catch (err) {
    return res.status(500).json({ error: 'Error creando producto', detail: err.message });
  }
};

// GET /api/product/readall (público)
exports.readAll = async (_req, res) => {
  try {
    const products = await Product.find().populate('owner', 'username email');
    return res.json({ products });
  } catch (err) {
    return res.status(500).json({ error: 'Error listando productos', detail: err.message });
  }
};

// GET /api/product/readone/:id (público)
exports.readOne = async (req, res) => {
  try {
    const p = await Product.findById(req.params.id).populate('owner', 'username email');
    if (!p) return res.status(404).json({ error: 'Producto no encontrado' });
    return res.json({ product: p });
  } catch (err) {
    return res.status(500).json({ error: 'Error obteniendo producto', detail: err.message });
  }
};

// PUT /api/product/update/:id (protegido)
exports.update = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const upd = {};
    if (name) upd.name = name;
    if (description != null) upd.description = description;
    if (price != null) upd.price = price;

    const p = await Product.findByIdAndUpdate(req.params.id, upd, { new: true });
    if (!p) return res.status(404).json({ error: 'Producto no encontrado' });
    return res.json({ product: p });
  } catch (err) {
    return res.status(500).json({ error: 'Error actualizando producto', detail: err.message });
  }
};

// DELETE /api/product/delete/:id (protegido)
exports.remove = async (req, res) => {
  try {
    const p = await Product.findByIdAndDelete(req.params.id);
    if (!p) return res.status(404).json({ error: 'Producto no encontrado' });
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: 'Error eliminando producto', detail: err.message });
  }
};
