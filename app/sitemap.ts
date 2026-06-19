import { MetadataRoute }
from "next";

export default function sitemap():
MetadataRoute.Sitemap {

  return [
    {
      url:
        "https://cosmolix.co.in",
      priority: 1,
    },

    {
      url:
        "https://cosmolix.co.in/about",
      priority: 0.8,
    },

    {
      url:
        "https://cosmolix.co.in/contact",
      priority: 0.8,
    },

    {
      url:
        "https://cosmolix.co.in/services/ai-ml",
      priority: 0.9,
    },
  ];
}