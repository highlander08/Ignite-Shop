import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useShoppingCart } from "use-shopping-cart";
import logoImg from "../../assets/logo-ignite-shop.svg";
import Cart from "../Cart";
import { HeaderContainer } from "./styles";

export default function Header() {
  const { pathname } = useRouter();
  const { cartCount } = useShoppingCart();

  const showCart = pathname !== "/success";

  return (
    <HeaderContainer>
      <Link href="/" prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>

      {showCart && <Cart />}
    </HeaderContainer>
  );
}
