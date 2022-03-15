#Primera etapa
# Obtenemos la imagen Node (hay que utilizar la adecuada por las dependencias)
FROM node:12-alpine as build-step
# Monta el directorio de trabajo por defecto
WORKDIR /app
# Copia los ficheros fuente de la app en el directorio de trabajo
COPY ./ /app
# Instalamos dependencias
RUN npm i -D typescript@3.4.5
RUN npm install
# Hacemos la construcción de la app
RUN npm run build --prod

#Segunda etapa
# Obtenemos y montamos la imagen del server NGINX
FROM nginx:latest
# Copiamos lo que se ha generado en el stage anterior (--from=build-step) al directorio de despliegue de aplicaciones del server
COPY --from=build-step /app/dist/apps-casa /usr/share/nginx/html
# Informamos a Docker que el server escucha por el puerto 80 por lo que exponemos ese puerto
EXPOSE 80

# Instrucción para construir el contenedor: docker build -t augus67/apps-casa-front:latest .
# Instrucción para ejecutar la app en docker: docker run -d -p 8180:80 augus67/apps-casa-front:latest