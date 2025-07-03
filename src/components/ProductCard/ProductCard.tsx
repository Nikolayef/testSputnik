import styles from "./ProductCard.module.css"
import type { IProduct } from "../../App"

function ProductCard({ title, origin, price, currency, imageUrl }: IProduct) {
  const formattedPrice = () => {
    const locale = {
      RUB: "ru-RU",
      USD: "en-US",
      EUR: "de-DE",
    }[currency]

    const priceInMainUnit = price / 100

    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    })

    return formatter.format(priceInMainUnit)
  }

  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.origin}>Страна происхождения: {origin}</p>
        <p className={styles.price}>{formattedPrice()}</p>
      </div>
    </article>
  )
}

export default ProductCard
