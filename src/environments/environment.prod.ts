export const environment = {
  production: true,
  // Vacío a propósito: el navegador pide "/api/..." al mismo origen del
  // sitio y nginx-proxy lo reenvía al contenedor del backend.
  apiUrl: ''
};
