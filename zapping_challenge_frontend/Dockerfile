FROM node:18.17.0-alpine

# instalar un simple servidor http para servir nuestro contenido estático
RUN npm install -g http-server

# hacer la carpeta 'app' el directorio de trabajo actual
WORKDIR /app

# copiar 'package.json' y 'package-lock.json' (si están disponibles)
COPY package*.json ./
COPY yarn*.lock ./

# instalar dependencias del proyecto
RUN yarn install

# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .

# construir aplicación para producción minificada
RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist" ]