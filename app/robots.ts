import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
            "/services",
            "/products",
            "/_next/static/css/8fc3dccbd1c92dc2.css?dpl=dpl_HNv9K4WNRHuw2g1fo58AoZkU2DQD",
            "/favicon.ico", "/services/equipment-alignment-and-calibration",
            "/_next/static/css/6df8fa5141181bf6.css?dpl=dpl_HTKxMA3HPpP3CiLrGGerjF532tBH",
            "/_next/static/css/977bf035335eb788.css?dpl=dpl_8Z3U87GX8km8qJP43Qbhvprpp414",
            "/_next/static/css/86e48aff0fa52541.css?dpl=dpl_GgJ3JeeHWuhv8cnFWhgxUyYUPsYm",
            "/_next/static/css/86e48aff0fa52541.css?dpl=dpl_GgJ3JeeHWuhv8cnFWhgxUyYUPsYm",
            "/_next/static/css/977bf035335eb788.css?dpl=dpl_C7tAUfH6QZEndDnkraCLrB2SJQDg",
            "/_next/static/media/e4af272ccee01ff0-s.p.woff2",
            "/_next/static/css/86e48aff0fa52541.css?dpl=dpl_EKKdHcew31uzbH1g4s4J9ggihGwg"],
      },
    ],
    sitemap: "https://tpicnc.com/sitemap.xml",
  };
}