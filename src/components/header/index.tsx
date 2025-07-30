import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";

type Input = {
  isMobile?: boolean;
};

export default function Header({ isMobile = false }: Input) {
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
