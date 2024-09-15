-- CreateTable
CREATE TABLE "users" (
    "user_phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_phone")
);

-- CreateTable
CREATE TABLE "products" (
    "product_code" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_code")
);

-- CreateTable
CREATE TABLE "purchases" (
    "order_no" SERIAL NOT NULL,
    "purchase_quantity" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_phone" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("order_no")
);

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_user_phone_fkey" FOREIGN KEY ("user_phone") REFERENCES "users"("user_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "products"("product_code") ON DELETE RESTRICT ON UPDATE CASCADE;
