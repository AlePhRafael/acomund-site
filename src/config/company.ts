export const company = {
  name: "Açomund",
  email: "acomund@uol.com.br",
  whatsapp: {
    display: "(11) 97832-9518",
    tel: "5511978329518",
  },
  phone: {
    display: "(11) 2214-4530",
    tel: "551122144530",
  },
} as const;

export const companyLinks = {
  whatsapp: `https://wa.me/${company.whatsapp.tel}`,
  phone: `tel:+${company.phone.tel}`,
  email: `mailto:${company.email}`,
} as const;
