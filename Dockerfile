# Base image
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies only
FROM base AS deps
COPY package*.json ./
RUN npm ci

# Build the app
FROM deps AS builder
COPY . .
RUN npm run build

# Production image
FROM base AS runner
COPY --from=builder /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 4173
CMD ["npm", "run", "preview"]