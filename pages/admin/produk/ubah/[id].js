import prisma from "../../../../client.ts";
import AdminLayout from "../../../../layouts/admin-layout";
import { useForm } from "react-hook-form";
import React, { useState, useEffect} from "react";
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export async function getServerSideProps(context) {
  let kode = context.params.id;
  let data = await prisma.product.findUnique({
    where: { id: Number(kode) },
  });

  let { id, nama, harga, deskripsi, gambar, promo } = data;
  return { props: { id, nama, harga, deskripsi, gambar, promo } };
}

const FormUbahProduct = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [nama, setNama] = useState(props.nama);
  const [harga, setHarga] = useState(props.harga);
  const [gambar, setGambar] = useState(props.gambar);
  const [deskripsi, setDeskripsi] = useState(props.deskripsi);
  const [promo, setPromo] = useState(props.promo);

  useEffect(() => {
    register("deskripsi", { required: true, });
  }, [register]);


  const onEditorStateChange = (value) => {
    setValue("deskripsi",value)
    setDeskripsi(value);
    console.log(deskripsi);
  };

  return (
    <div className="shadow mb-4 py-3 px-3">
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className="form-group">
          <label htmlFor="inputNama">Nama Produk</label>
          <input
            {...register("nama", { required: true })}
            type="text"
            className="form-control"
            id="namaProduk"
            placeholder="Masukan Nama"
            value={nama}
            onChange={(Event) => setNama(Event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputHarga">Harga</label>
          <input
            {...register("harga", { required: true })}
            type="text"
            className="form-control"
            id="harga"
            placeholder="Masukan Harga"
            value={harga}
            onChange={(Event) => setHarga(Event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputGambar">Foto</label>
          <input
            {...register("gambar", { required: true })}
            type="text"
            className="form-control"
            id="gambar"
            placeholder="Masukan path gambar"
            value={gambar}
            onChange={(Event) => setGambar(Event.target.value)}
          />
        </div>
        <div className="form-group">
        <textarea
            style={{display:"none"}}
            {...register("deskripsi")}
            className="form-control"
            id="deskripsi"
            rows="3"
            value={deskripsi}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="inputDeskripsi">Deskripsi Produk</label>
          <QuillNoSSRWrapper
            value={deskripsi}
            theme="snow"
            onChange={onEditorStateChange}
            placeholder="kampret"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPromo">Promo</label>
          <input
            {...register("promo", { required: true })}
            type="text"
            className="form-control"
            id="promo"
            placeholder="Masukan promo atau non promo"
            value={promo}
            onChange={(Event) => setPromo(Event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const DashboardUbahProduk = (props) => {
  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Ubah Produk</h1>
        </div>
      </div>
      <FormUbahProduct
        nama={props.nama}
        harga={props.harga}
        gambar={props.gambar}
        deskripsi={props.deskripsi}
        promo={props.promo}
        onSubmit={async (data, event) => {
          console.log(data.deskripsi);
          const produk = {
            nama: data.nama,
            harga: data.harga,
            gambar: data.gambar,
            deskripsi: data.deskripsi,
            promo: data.promo,
            id: props.id,
          };
          try {
            const respon = await fetch("/api/produk/update", {
              method: "POST",
              body: JSON.stringify(produk),
            });

            if (!respon.ok) throw new Error(respon.statusText);

            let status = await respon.json();

            if (status !== null) {
              event.target.reset();
              location.replace("/admin/produk");
            }
          } catch (error) {
            console.log(error);
          }
        }}
      ></FormUbahProduct>
    </AdminLayout>
  );
};

export default DashboardUbahProduk;
