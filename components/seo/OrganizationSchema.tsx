export default function OrganizationSchema() {
  const schema = {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    name:
      "Cosmolix Private Limited",

    url:
      "https://cosmolix.co.in",

    logo:
      "https://cosmolix.co.in/brand/cosmolix-mark.png",

    email:
      "info@cosmolix.co.in",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          schema
        ),
      }}
    />
  );
}