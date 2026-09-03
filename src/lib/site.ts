export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.exitoemimoveis.com.br";

export const site = {
  name: "Êxito em Imóveis",
  url: siteUrl,
  creci: "CRECI 59048F",
  email: "exito-imoveis@uol.com.br",
  phone: {
    display: "(11) 3271-3828",
    tel: "+551132713828",
  },
  whatsapp: {
    display: "(11) 95330-1611",
    number: "5511953301611",
    href: "https://wa.me/5511953301611",
  },
  address: {
    street: "Rua da Mooca, 265",
    postalCode: "03103-000",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    full: "Rua da Mooca, 265 — CEP 03103-000, São Paulo/SP",
  },
} as const;
