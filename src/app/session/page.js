import SessionsByDeviceType from "@/components/pieChart";
import SessionsByLandingPage from "@/components/sessionByLandingPage";
import React from "react";

function page() {
  const sessionData = [
    {
      page: "Homepage",
      path: "/",
      sessions: 131,
      change: 12,
    },
    {
      page: "Product",
      path: "/products/bikini-art-7104",
      sessions: 88,
      change: 13,
    },
    {
      page: "Product",
      path: "/collections/ofertas-sale/products/art-7056",
      sessions: 73,
      change: 6,
    },
    {
      page: "Product",
      path: "/products/bombacha-art-7258",
      sessions: 47,
      change: 42,
    },
    {
      page: "Product",
      path: "/products/art-700223-traje-de-bano-entero-rayado",
      sessions: 35,
      change: 19,
    },
    {
      page: "Product",
      path: "/products/malla-entera-art-7005",
      sessions: 31,
      change: 35,
    },
    {
      page: "Product",
      path: "/collections/ofertas-sale/products/malla-entera-art-7044",
      sessions: 28,
      change: 38,
    },
  ];
  return (
    <div>
      <SessionsByLandingPage
        data={sessionData}
        title="Sessions by landing page"
      />
    </div>
  );
}

export default page;
