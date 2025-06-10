import type { ProductCardProps } from "./shared/types";
import { ProductCard } from "./shared/ui";

const PRODUCTS: ProductCardProps[] = [
  {
    title: "Керамическая кружка",
    origin: "Россия",
    price: 12900,
    currency: "RUB",
    imageUrl: "https://www.kuchenland.ru/upload/iblock/761/qcxm1q3kkboqma9xyyg5t7qdvgj1eliw/img_6836cf897555c.webp",
  },
  {
    title: "Кожаный рюкзак",
    origin: "Италия",
    price: 74900,
    currency: "EUR",
    imageUrl: "https://avatars.mds.yandex.net/i?id=bce4036f0786511070cfddc2e6d327163a26696d-2743775-images-thumbs&n=13",
  },
  {
    title: "Настольная лампа",
    origin: "Германия",
    price: 5499,
    currency: "USD",
    imageUrl: "https://avatars.mds.yandex.net/i?id=c82e32dcf664bdfbe6d704ac9c5753768c238b5c-5911250-images-thumbs&n=13",
  },
  {
    title: "Деревянный стул",
    origin: "США",
    price: 15900,
    currency: "USD",
    imageUrl: "https://avatars.mds.yandex.net/i?id=f5bdda90eb5752eb93e0d623293eddd27fac76ee-5704842-images-thumbs&n=13",
  },
  {
    title: "Беспроводные наушники",
    origin: "Китай",
    price: 119990,
    currency: "RUB",
    imageUrl: "https://avatars.mds.yandex.net/i?id=d9961db2db8b053b68332f0e2c0476db09d16e8d-4662540-images-thumbs&n=13",
  },
  {
    title: "Умные часы",
    origin: "Япония",
    price: 19900,
    currency: "EUR",
    imageUrl: "https://avatars.mds.yandex.net/i?id=1bbdb0aca3762c3485fa21af884807751648b1cc-3548851-images-thumbs&n=13",
  },
];

function App() {
  return (
    <section className={"flex max-w-[1600px] justify-center w-full mx-auto flex-wrap"}>
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.title}
          title={product.title}
          origin={product.origin}
          price={product.price}
          currency={product.currency}
          imageUrl={product.imageUrl}
        />
      ))}
    </section>
  );
}

export default App;
