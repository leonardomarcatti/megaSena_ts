FROM node:24

WORKDIR /app

# Habilita o gerenciador de pacotes moderno
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# Copia apenas arquivos de dependência primeiro (melhora cache)
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

# Agora copia o resto do projeto
COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev", "--host", "0.0.0.0", "--port", "3000"]