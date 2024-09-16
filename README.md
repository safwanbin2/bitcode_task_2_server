# BitCode Task 2 - Bit Store Server

# API - [https://bit-store-roan.vercel.app/api/v1/]

## How to run locally

1. Clone the repo
2. Run `npm install` to install dependencies
3. Create a `.env` file at the root and paste this envs to that file
   `PORT=5000`
   `DATABASE_URL="postgresql://postgres:nejiJuUevrccDPTPBCgJVtJOCtmaNduc@junction.proxy.rlwy.net:56874/railway"`
4. Run `npx prisma migrate dev` for latest build
5. Run `npm run dev` to start the development application
6. Open your postman and navigate to `http://localhost:5000/`
