import Link from "next/link"

const SideAdmin = () =>{
return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <Link href='/admin/produk'>
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-text mx-3">Admin Lowedding</div>
        </a>
    </Link>
        <hr className="sidebar-divider my-0"/>
        <li className="nav-item active">
            <Link href="/admin/produk">
            <a className="nav-link" >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
            </Link>
            <Link href="/">
            <a className="nav-link" >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Halaman Utama</span></a>
            </Link>
        </li>
    </ul>
)
}

export default SideAdmin;