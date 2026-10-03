export const environment = {
  production: true,
  // Vacío a propósito: el navegador siempre pide "/api/..." al mismo origen
  // del sitio. Quién resuelve esa ruta hacia el backend cambia según dónde
  // se despliegue, pero desde este archivo es transparente:
  //  - VM propia: Nginx (nginx.conf / nginx-proxy) hace proxy_pass a /api/.
  //  - Render (Static Site, temporal): render.yaml define un rewrite de
  //    /api/* hacia la URL del backend en Render.
  apiUrl: ''
};
