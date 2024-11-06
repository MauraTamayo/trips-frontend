# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia los archivos package.json y package-lock.json e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación de Next.js
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]
