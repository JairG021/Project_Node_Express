## Portafolio de Jair Gutierrez

Sitio web desarrollado con Node.js, Express y Pug. Incluye una página de presentación y una vista con las aplicaciones Netchb y GestionAppChb.

### Requisitos

- Node.js LTS

### Instalación y ejecución

Desde la carpeta raíz, instala las dependencias:

```bash
npm install
```

Para desarrollo local:

```bash
npm run dev
```

Para iniciar el servidor normalmente:

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000). El puerto se puede cambiar con la variable `PORT`.

### Producción

El proyecto está configurado para Netlify. Conecta el repositorio y Netlify usará `netlify.toml` para publicar los recursos y ejecutar las rutas con Functions. Configura `CORS_ORIGIN` en el entorno de producción solo si necesitas permitir solicitudes desde otros dominios.

### Rutas

- `/`: página de inicio.
- `/projects`: aplicaciones desarrolladas.
- Otras rutas muestran la página 404.
