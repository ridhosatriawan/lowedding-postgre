import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Component } from "react";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})

const FormTambahProduct = (props) => {

    // const [editorState, setEditorState] = React.useState(
    //     () => EditorState.createEmpty(),
    //   );

    const [deskripsi, setDeskripsi] = useState("");
    const onEditorChange = (value) => {
        setDeskripsi(value)
        console.log(deskripsi)
    }


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    
  
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputDeskripsi">Deskripsi Produk</label>
            <QuillNoSSRWrapper value={deskripsi}  theme="snow" onChange={onEditorChange} placeholder="isikan deskripsi disini"/>
        </div>
        <div className="form-group">
        <textarea
            // style={{display:"none"}}
            {...register("deskripsi", { required: true })}
            className="form-control"
            id="deskripsi"
            rows="3"
            value={deskripsi}
            placeholder="jangan isi deskripsi di sini"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="inputPromo">Promo</label>
          <input
            {...register("promo")}
            type="text"
            className="form-control"
            id="promo"
            placeholder="Masukan promo atau non promo"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={()=>console.log("coba")}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormTambahProduct;
