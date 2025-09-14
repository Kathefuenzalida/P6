# 🚀 Proyecto 6 - API con Autenticación y CRUD de Productos

Backend desarrollado con **Node.js, Express, MongoDB y JWT** como parte del Bootcamp UDD.  
La aplicación permite gestionar usuarios y productos con autenticación basada en tokens.

---

## 📦 Tecnologías
- Node.js + Express
- MongoDB + Mongoose
- JWT (Json Web Tokens)
- bcryptjs (hash de contraseñas)
- CORS y Morgan
- Swagger (documentación de la API)

---

## ⚙️ Instalación y uso

### 1. Clonar repositorio
```bash
git clone <URL_REPO>
cd proyecto_6
2. Instalar dependencias
bash
Copiar código
npm install
3. Configurar variables de entorno
Crea un archivo .env en la raíz con:

env
Copiar código
MONGO_URI=mongodb://127.0.0.1:27017/BootcampUDD
PORT=3000
JWT_SECRET=nosenosabe
4. Levantar el servidor
bash
Copiar código
npm run dev
o

bash
Copiar código
node index.js
📖 Documentación de la API
Swagger UI está disponible en:
👉 http://localhost:3000/api-docs

Desde ahí puedes probar los endpoints directamente con ejemplos.

👤 Endpoints de Usuario
Método	Endpoint	Descripción	Auth
POST	/api/user/register	Registrar un nuevo usuario	❌
POST	/api/user/login	Iniciar sesión y obtener token	❌
GET	/api/user/verifytoken	Verificar validez del token	✅
PUT	/api/user/update	Actualizar datos del usuario	✅

📦 Endpoints de Producto
Método	Endpoint	Descripción	Auth
POST	/api/product/create	Crear un producto	✅
GET	/api/product/readall	Listar todos los productos	❌
GET	/api/product/readone/:id	Obtener un producto por ID	❌
PUT	/api/product/update/:id	Actualizar un producto	✅
DELETE	/api/product/delete/:id	Eliminar un producto	✅

🔑 Autenticación
Los endpoints marcados con ✅ requieren un JWT en el header:

makefile
Copiar código
Authorization: Bearer <token>
📸 Evidencia de pruebas
Aquí puedes pegar capturas de tus pruebas locales en Thunder Client o Postman:

Registro de usuario (/register)

Login de usuario (recibiendo el token)

Creación de producto con token válido

Listado de productos (/readall)

Update y Delete de producto

✍️ Autor: Katherine Fuenzalida Rojas
📅 Proyecto Fullstack Bootcamp - Módulo 6