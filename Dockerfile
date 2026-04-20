# ---------- Build stage ----------
FROM oven/bun:1.3.12 AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ---------- Runtime stage ----------
FROM oven/bun:1.3.12
WORKDIR /app

COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
