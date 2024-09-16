# BitCode Task 2 - Bit Store Server

Problem:

An application that will fetch [https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json] and create/ update new entities according fetched data and generate report based on the latest data.

Approach:

1. Create express server and configure
2. Host a postgresql database on railway and connect it through CONNECTION URL
3. Create models on prisma according the sample data with proper relation among (user, product, purchase)
4. Fetch the third party API and merge with the database by $transaction and upsert for safe writing operation
5. Retrive latest history of entities along with few aggregation results

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
