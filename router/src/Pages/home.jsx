function Home() {
  return (
    <div className="container mt-2">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://tse3.mm.bing.net/th/id/OIP.gfwRnYycPq_c0FRH0-10XAHaEK?pid=Api&P=0&h=180" height="300" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://tse3.mm.bing.net/th/id/OIP.VM9O_pU15c59ydu4OFGawgHaEK?pid=Api&P=0&h=180" height="300" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://tse2.mm.bing.net/th/id/OIP.M4fymycrMlaAJSNQbS-JtgHaE8?pid=Api&P=0&h=180" height="300" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
