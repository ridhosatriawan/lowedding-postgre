import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ message: "Request method tidak di inginkan" });

  const produk = JSON.parse(req.body);
  const hapus = await prisma.product.delete({
    where: { id: produk.id },
  });

  res.json(hapus);
};
