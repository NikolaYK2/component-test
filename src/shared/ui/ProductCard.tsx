import type { ProductCardProps } from "../types";

export const ProductCard = (props: ProductCardProps) => {
  const { title, origin, price, currency, imageUrl } = props;

  const formatted = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <section className="flex flex-col m-2 max-w-[300px] w-full">
      <div className={"max-w-[300px] w-full min-h-[300px]"}>
        <img className={"w-full h-full object-cover"} src={imageUrl ?? ""} alt={title} />
      </div>
      <section className={"flex flex-col max-w-[690px] w-full p-[2%] h-full"}>
        <h2 className={"text-3xl font-bold"}>{title}</h2>
        <p className={"text-2xl mx-0 my-0 mt-auto"}>Страна: {origin}</p>
        <p className={"text-1xl"}>
          Цена: <span className={"text-green-300"}>{formatted}</span>
        </p>
      </section>
    </section>
  );
};
