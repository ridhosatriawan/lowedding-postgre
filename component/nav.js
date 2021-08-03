import Link from "next/link";

const Nav = () => {
return (
    <header className="top-header">
	<nav className="navbar header-nav navbar-expand-lg" >
		<div className="container">
			<Link href="/">
			<a className="navbar-brand">
                <img src="images/LOGO.png" alt="img" style={{maxWidth: 50 + "px"}} />
                </a>
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
				<ul className="navbar-nav">
					<li><a className="nav-link" href="#home">Home</a></li>
					<li><a className="nav-link" href="#product">Product</a></li>
					<li><a className="nav-link" href="#about">About Us</a></li>
					<li><a className="nav-link" href="#contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
</header>
)
}

export default Nav;