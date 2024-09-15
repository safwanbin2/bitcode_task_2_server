import axios from "axios";
import prisma from "../../constants/prisma";
import { TPurchaseIncoming } from "../../interfaces/purchase";

const generateReport = async () => {
  const { data: purchaseData }: { data: TPurchaseIncoming[] } = await axios.get(
    "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json"
  );

  for (const purchase of purchaseData) {
    const {
      created_at,
      name,
      order_no,
      user_phone,
      product_code,
      product_name,
      product_price,
      purchase_quantity,
    } = purchase ?? {};

    await prisma.$transaction(async (tx) => {
      await tx.user.upsert({
        where: {
          user_phone,
        },
        update: {
          name,
        },
        create: {
          user_phone,
          name,
        },
      });

      await tx.product.upsert({
        where: {
          product_code,
        },
        update: {
          product_name,
          product_price: parseFloat(purchase?.product_price),
        },
        create: {
          product_code,
          product_name,
          product_price: parseFloat(purchase?.product_price),
        },
      });

      await tx.purchase.upsert({
        where: {
          order_no,
        },
        update: {
          purchase_quantity,
          created_at,
          user_phone,
          product_code,
          total: parseFloat(product_price) * purchase_quantity,
        },
        create: {
          order_no,
          purchase_quantity,
          created_at,
          user_phone,
          product_code,
          total: parseFloat(product_price) * purchase_quantity,
        },
      });
    });
  }

  const purchases = await prisma.purchase.findMany({
    orderBy: {
      total: "desc",
    },
    include: {
      product: true,
      user: true,
    },
  });

  // ? Another approach to retreive the report
  // const users = await prisma.user.findMany({
  //   include: {
  //     purchase: {
  //       orderBy: {
  //         total: "desc",
  //       },
  //       include: {
  //         product: true,
  //       },
  //     },
  //   },
  // });

  const totalData = await prisma.purchase.aggregate({
    _sum: {
      total: true,
      purchase_quantity: true,
    },
  });

  const totalPrice = await prisma.product.aggregate({
    _sum: {
      product_price: true,
    },
  });

  return {
    purchases,
    totalPurchasePrice: totalData?._sum?.total,
    totalPurchaseQuantity: totalData?._sum?.purchase_quantity,
    totalPrice: totalPrice?._sum?.product_price,
  };
};

export const ReportService = {
  generateReport,
};
