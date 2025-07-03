import ProductCard from "./components/ProductCard/ProductCard"
import styles from "./App.module.css"

export interface IProduct {
  title: string
  origin: string
  price: number
  currency: "RUB" | "USD" | "EUR"
  imageUrl: string
}

const products: IProduct[] = [
  {
    title: 'Кофе в зёрнах "Арабика"',
    origin: "Бразилия",
    price: 34900,
    currency: "RUB",
    imageUrl: "https://placehold.co/600x400?text=Кофе",
  },
  {
    title: 'Премиум Чай "Эрл Грей"',
    origin: "Шри-Ланка",
    price: 1250,
    currency: "USD",
    imageUrl: "https://placehold.co/600x400?text=Чай",
  },
  {
    title: "Швейцарский шоколад",
    origin: "Швейцария",
    price: 899,
    currency: "EUR",
    imageUrl: "https://placehold.co/600x400?text=Шоколад",
  },
]

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Каталог товаров</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            origin={product.origin}
            price={product.price}
            currency={product.currency}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default App
