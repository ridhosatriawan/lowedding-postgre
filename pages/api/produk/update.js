import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ message: "Request method tidak di inginkan" });

  const produk = JSON.parse(req.body);
  console.log(produk);

  const update = await prisma.product.update({
    where: {
      id: produk.id,
    },
    data: {
      nama: produk.nama,
      harga: Number(produk.harga),
      gambar: produk.gambar,
      deskripsi: produk.deskripsi,
      promo: produk.promo,
    },
  });

  res.json(update);
};
