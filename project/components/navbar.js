const navbar = () => {
  return `            <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/addproduct.html">Addto cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/cart.html">Cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/product.html">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/signup.html">Sign in</a>
              </li>
               <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./pages/login.html">Log in</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>`;
};



export default navbar;