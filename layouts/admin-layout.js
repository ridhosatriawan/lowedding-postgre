import NavAdmin from "../component/admin-nav";
import SideAdmin from "../component/admin-side";
import Head from "next/head"

const AdminLayout = (props) => {
    return(
        <>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"/>
        <link href="/css/sb-admin-2.min.css" rel="stylesheet"/>
        </Head>
        <div id="page-top">
            <div id="wrapper">
            <SideAdmin></SideAdmin>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <NavAdmin></NavAdmin>
                    {props.children}
            </div>
                <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Lowedding 2021</span>
                            </div>
                        </div>
                    </footer>
        </div>

    </div>
    <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

        </div>

        <script src="js/sb-admin-2.min.js"></script>
        </>
    )
}

export default AdminLayout;