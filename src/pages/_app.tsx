import { CartProvider } from "use-shopping-cart";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { globalStyles } from "../styles/global";

globalStyles(); // é posto aqui pq a cada renderização do App o css global seria recarregado do zero, serai ruim para perfomance

export default function App({ Component, pageProps }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      shouldPersist={true}
    >
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </CartProvider>
  );
}
