# Imagem base do Node.js
FROM node:12 AS builder

# Diretório de trabalho
WORKDIR /app

# Copia o arquivo package.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto dos arquivos
COPY . .

# Compila o aplicativo
RUN npm run build

# Imagem base do Nginx
FROM nginx:latest

# Copia os arquivos compilados para o diretório padrão do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
