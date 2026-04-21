## Invitación web de casamiento - Facu y Andre

Este proyecto es una página web estática servida por un proyecto sencillo de **Node.js + Express**.  
Contiene todas las secciones de la invitación (Landing, Save the date, Lugar, Dress code, Cronograma, Preguntas y RSVP) en una sola página desplazable y responsive.

### Requisitos previos

- Tener instalado **Node.js** (versión 16 o superior recomendada).
- Tener instalado **npm** (se instala junto con Node).

### Instalación

1. Abrí una terminal en la carpeta del proyecto:

   ```bash
   cd "c:\Users\fchem\OneDrive\Documentos\CasaCasa"
   ```

2. Instalá las dependencias del proyecto (incluye `express`):

   ```bash
   npm install
   ```

   Si ejecutaste `npm start` antes de este paso y viste el error:

   ```text
   Cannot find module 'express'
   ```

   simplemente volvé a correr:

   ```bash
   npm install express
   ```

### Ejecutar la página en modo desarrollo

1. Levantá el servidor con:

   ```bash
   npm start
   ```

2. Abrí tu navegador y visitá:

   ```text
   http://localhost:3000
   ```

La página se servirá desde la carpeta `public`, y el servidor quedará escuchando en el puerto **3000** (o el que definas en la variable de entorno `PORT`).

### Scripts de `package.json`

- **`npm start`**: arranca el servidor Express en producción o local. Usa `process.env.PORT` si existe (por ejemplo en plataformas como Vercel o Heroku); si no, usa el puerto **3000**.
- **`npm run dev`**: en este proyecto hace lo mismo que `start` (servidor local). Podés usar cualquiera de los dos para desarrollo; algunos equipos usan `dev` para más adelante añadir recarga automática (por ejemplo con `nodemon`).

### Despliegue en Vercel (GitHub)

1. Subí el proyecto completo a un repositorio de GitHub (incluye `public/`, `Media/`, `api/`, `server.js`, `package.json`, `vercel.json`).
2. En [Vercel](https://vercel.com), importá el repositorio y dejá los valores por defecto: **Build Command** vacío o `npm install`, **Install Command** `npm install`, **Output Directory** no aplica a esta app Node (Vercel usa la función en `api/`).
3. El archivo `vercel.json` redirige todas las rutas a la app Express en `api/index.js`, que sirve los mismos archivos que en local. **No se modifica el contenido** de la carpeta `public`.

Si Vercel te pide una versión de Node, el `package.json` incluye `engines.node` (>= 18).

### Estructura básica del proyecto

- `package.json`: configuración del proyecto Node.js y scripts `npm start` / `npm run dev`.
- `server.js`: pequeño servidor Express que sirve los archivos estáticos (también se exporta para Vercel).
- `api/index.js`: punto de entrada serverless en Vercel.
- `vercel.json`: reglas de enrutado para el deploy en Vercel.
- `public/index.html`: estructura principal de la invitación y todas las secciones.
- `public/styles.css`: estilos globales y responsivos.
- `public/main.js`: lógica del contador regresivo y scroll suave entre secciones.

### Personalización

- Podés reemplazar los **fondos** y las **imágenes de ejemplo** en `public/index.html` y `public/styles.css` cuando tengas los archivos definitivos.
- El contador está configurado para el **22 de agosto de 2026, 20:00 hs** (hora local); si necesitás otra fecha, podés editarla en `public/main.js`.

