export default function LoadingRandomShoe() {
  const stockImage =
    "https://stockx-assets.imgix.net/media/Product-Placeholder-Default-20210415.jpg?fit=fill&bg=FFFFFF&auto=compress&q=90&dpr=1&trim=color&w=480&h=320&fm=avif";

  return (
    <section className="random-sneaker-holder">
      <article className="random-sneaker-left">
        <h3>Loading Name</h3>
        <article className="random-sneaker-image">
          <img src={stockImage} loading="lazy"></img>
        </article>
        <h3>Retail Price: Loading Price</h3>
      </article>
      <article className="random-sneaker-right">
        <p>Loading Description</p>

        <h2>Loading Price</h2>
        <h2>Loading Company</h2>
        <button>Random Shoe</button>
        <button>Shoe Info</button>
      </article>
    </section>
  );
}
