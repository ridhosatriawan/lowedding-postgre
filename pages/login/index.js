const  logIn = () => {
    return (
<div className="text-center body">

<style jsx>
      {`.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }`}
    </style> 
    <main className="form-signin">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please Log In</h1>

            <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="inputEmail" class="sr-only">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="inputPassword" class="sr-only">Password</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Log In</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
    </main>
</div>
    )
}

export default logIn;