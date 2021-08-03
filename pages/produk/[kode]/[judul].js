import MainLayout from "../../../layouts/layout";
import prisma from "../../../client.ts";
import Link from "next/link";
// ssg rendering
// export async function getStaticProps(context){
//   let kode = context.params.kode;
//   let data = Pernikahan.find((nikah) => nikah.id == kode);

//   let { nama, harga, detail, gambar } = data;
//   return {props: { nama, harga, detail, gambar }};
// }

// export async function getStaticPaths(){
//   return{
//     paths: Pernikahan.map((nikah)=>({
//       params:{
//         kode: `${nikah.id}`,
//         judul: `${nikah.nama.replace(/\s+/g, "-").toLowerCase()}`,
//       },
//     })),
//     fallback : false,
//   };
// }

export async function getServerSideProps(context) {
  let kode = context.params.kode;
  let data = await prisma.product.findUnique({
    where: { id: Number(kode) },
  });

  let { id, nama, harga, deskripsi, gambar } = data;
  console.log(data);
  return { props: { id, nama, harga, deskripsi, gambar } };
}

const Detail = (props) => {
  return (
    <MainLayout>
      <div className="container detail">
        <div className="row" style={{ marginTop: 20 + "px" }}>
          <div className="col-sm-3 col-md-12 col-lg-6">
            <img src={props.gambar} class="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-sm-9 col-md-12 col-lg-6">
            <h1 class="display-4">{props.nama}</h1>

            <div dangerouslySetInnerHTML={{ __html: props.deskripsi }} />
            <Link
              href="/kontak"
              as={`/kontak`}
            >
              <button
                className="btn"
                style={{ backgroundColor: "#f48a93", color: "white" }}
              >
                Konsultasi Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Detail;
