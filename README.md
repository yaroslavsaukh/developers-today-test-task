# Developers Today Test Task

Цей проєкт реалізований на **NestJS** з використанням **TypeScript** та бази даних **PostgreSQL**.
Для локального запуску БД використовується **Docker**.

---

## 🚀 Як стартанути проєкт

### 1. Клонування репозиторію

```bash
git clone git@github.com:yaroslavsaukh/developers-today-test-task.git
cd developers-today-test-task
```

### 2. Встановлення залежностей

```bash
pnpm install
```

### 3. Налаштування середовища

Створи файл `.env` у корені проєкту та додай такі змінні (можеш змінити під себе):

```env
POSTGRES_USER=root
POSTGRES_PASSWORD=123456
POSTGRES_HOST=localhost
POSTGRES_PORT=5433
POSTGRES_DATABASE=develops_today_test
POSTGRES_URI=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}
```

### 4. Запуск PostgreSQL через Docker

```bash
docker-compose up -d
```

### 5. Ініціалізація бази даних

Використовуємо Prisma для міграцій:

```bash
npx prisma migrate dev
```

### 6. Запуск проєкту

```bash
npm run start:dev
```

---

## 🛠️ Доступні скрипти

* `npm run start:dev` – запуск у режимі розробки
* `npm run build` – збірка проєкту
* `npm run start:prod` – запуск у production режимі

---

## 📖 API

Після запуску бекенд доступний за адресою:

```
http://localhost:3000
```

## 📦 Використані технології

* [NestJS](https://nestjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Prisma](https://www.prisma.io/)
* [Docker](https://www.docker.com/)
