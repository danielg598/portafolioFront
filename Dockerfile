# ---- Etapa 1: build ----
# Imagen oficial de Node (multi-arch: amd64 y arm64), solo para compilar.
FROM node:20-alpine AS build

WORKDIR /app

# Se copian primero los manifiestos de dependencias para aprovechar el cache
# de capas: si no cambian, el "npm ci" se reutiliza aunque cambie el código.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx ng build --configuration production

# ---- Etapa 2: runtime ----
# Nginx sin privilegios (no corre como root; escucha en 8080). Multi-arch,
# solo sirve estáticos: no queda Node ni código fuente en la imagen.
FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY security-headers.conf /etc/nginx/security-headers.conf

# El builder "application" de Angular genera dist/portafolio/browser/.
COPY --from=build /app/dist/portafolio/browser/ /usr/share/nginx/html/

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
