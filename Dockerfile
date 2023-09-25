# Use a oficial Node.js LTS (Long Term Support) como base
FROM node:lts

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json (se disponível)
# Isso é feito separadamente para aproveitar o cache do Docker durante o build
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o código da aplicação para o container
COPY . .

# Exponha a porta que a aplicação usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]
