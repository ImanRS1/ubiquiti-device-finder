export default function defaultTheme() {
  return {
    grey1: "#F6F6F8",
    grey2: "#838691",
    grey3: "#EDEDF0",
    grey4: "#BDBDBD",
    grey5: "#FBFBFB",
    grey6: "#DBDCE1",
    font1: "Lato",
    black45: "rgba(0, 0, 0, 0.45)",
    black65: "rgba(0, 0, 0, 0.65)",
    black85: "rgba(0, 0, 0, 0.85)",
    blue1: "#006FFF",
    breakpoints: {
      smallMobile: "@media (max-width: 550px)",
      mobile: "@media (max-width: 767px)",
      tablet: "@media (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media (min-width: 1025px)",
      productsViewBreak: "@media (max-width: 1310px)",
      mobileAndTablet: "@media (max-width: 1024px)",
      tabletAndDesktop: "@media (min-width: 768px)",
    },
  };
}
