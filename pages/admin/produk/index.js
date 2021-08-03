import AdminLayout from "../../../layouts/admin-layout";
import prisma from "../../../client.ts";
import FormTambahProduct from "../../../component/form-tambah";
import Link from "next/link";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

export async function getServerSideProps(context) {
  const pernikahan = await prisma.product.findMany();

  return { props: { pernikahan } };
}

const HapusProduk = (props) => {
  const { handleSubmit } = useForm();

  return <form onSubmit={handleSubmit(props.onSubmit)}>{props.children}</form>;
};

const dashboardInputProduk = (props) => {
  const [id, setId] = useState(1);
  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Input Produk</h1>
        </div>
      </div>
      <FormTambahProduct
        onSubmit={async (data, event) => {
          const produk = {
            nama: data.nama,
            harga: data.harga,
            gambar: data.gambar,
            deskripsi: data.deskripsi,
            promo: data.promo,
          };

          console.log("berhasil");

          try {
            const respon = await fetch("/api/produk/tambah", {
              method: "POST",
              body: JSON.stringify(produk),
            });

            if (!respon.ok) throw new Error(respon.statusText);

            let status = await respon.json();

            if (status !== null) {
              event.target.reset();
              location.reload();
            }
          } catch (error) {
            console.log(error);
          }
        }}
      />

      <div className="shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Produk
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {props.pernikahan.map((nikah) => (
                  <tr key={nikah.id}>
                    <td>{nikah.id}</td>
                    <td>{nikah.nama}</td>
                    <td>{nikah.harga}</td>
                    <td>
                      <Link
                        href="/admin/produk/ubah/[id]"
                        as={`/admin/produk/ubah/${nikah.id}`}
                      >
                        <a className="btn btn-primary">Ubah</a>
                      </Link>{" "}
                      |{" "}
                      <button
                        href="#"
                        className="btn btn-danger btn-icon-split"
                        data-toggle="modal"
                        data-target="#deleteModal"
                        onClick={() => setId(nikah.id)}
                      >
                        <span className="text">Delete</span>
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* deleteModal */}
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Yakin Hapus ?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Jika yakin hapus pilih Delete.</div>
              <HapusProduk
                onSubmit={async (data, event) => {
                  const produk = {
                    id: id,
                  };
                  try {
                    const respon = await fetch("/api/produk/hapus", {
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
              >
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button className="btn btn-danger" type="submit">
                    Delete
                  </button>
                </div>
              </HapusProduk>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default dashboardInputProduk;
