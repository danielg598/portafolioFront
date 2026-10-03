# Dockerfile para el deploy en VM propia (Nginx + Docker). NO se usa
# mientras el deploy temporal esté en Render (Static Site, ver render.yaml) —
# se mantiene intacto para cuando se retome el plan original.

# ---- Etapa 1: build ----
# Imagen oficial de Node (multi-arch: amd64 y arm64), solo para compilar.
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos primero los manifiestos de dependencias para aprovechar el cache
# de capas de Docker: si package.json/package-lock.json no cambian, esta capa
# (y el "npm ci") se reutiliza aunque cambie el código fuente después.
COPY package.json package-lock.json ./
RUN npm ci

# Ahora sí copiamos el resto del código y construimos el bundle de producción.
COPY . .
RUN npx ng build --configuration production

# ---- Etapa 2: runtime ----
# Nginx alpine — liviana y multi-arch (amd64/arm64), ideal para Oracle Cloud
# Ampere ARM. Solo sirve archivos estáticos, no queda Node ni código fuente.
FROM nginx:1.27-alpine

# Config personalizada con el fallback de rutas para Angular Router.
# El enrutamiento de /api/ hacia el backend NO se hace aquí: lo resuelve
# el proxy central (nginx-proxy, ver C:\desarrollos\nginx-proxy), que
# reenvía directo al contenedor "backend" sin pasar por este Nginx.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# El builder "application" de Angular 17 genera dist/portafolio/browser/
# (separa el bundle de navegador del de SSR), así que copiamos esa subcarpeta,
# no dist/portafolio directamente.
COPY --from=build /app/dist/portafolio/browser/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
