export type CatalogProject = {
  title: string;
  image: string;
  tall?: boolean;
};

export type CatalogCategory = {
  slug: string;
  label: string;
  description: string;
  coverImage: string;
  projects: CatalogProject[];
};

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "populares",
    label: "Casas Populares",
    description:
      "Steel frame e estruturas acessíveis com agilidade e qualidade repetível.",
    coverImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
    projects: [
      {
        title: "Conjunto Primavera Norte",
        image:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
        tall: true,
      },
      {
        title: "Módulos Residenciais Paraná",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        tall: false,
      },
      {
        title: "Vila Horizonte",
        image:
          "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
        tall: false,
      },
      {
        title: "Habitação Compacta 78m²",
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        tall: true,
      },
    ],
  },
  {
    slug: "alto-padrao",
    label: "Alto Padrão",
    description:
      "Residências com acabamentos premium, pé-direito generoso e desempenho térmico.",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    projects: [
      {
        title: "Residência Horizonte",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        tall: true,
      },
      {
        title: "Casa Terraço Sul",
        image:
          "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&q=80",
        tall: false,
      },
      {
        title: "Coberturas integradas Loft",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        tall: false,
      },
      {
        title: "Fachadas ventiladas Vale",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        tall: true,
      },
    ],
  },
  {
    slug: "corporativo",
    label: "Corporativo",
    description:
      "Escritórios, pavilhões industriais e obras corporativas com cronograma enxuto.",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    projects: [
      {
        title: "Hub Administrativo Centro",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
        tall: false,
      },
      {
        title: "Pavilhão Atlas",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
        tall: true,
      },
      {
        title: "Galpão Express Norte",
        image:
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
        tall: false,
      },
      {
        title: "Centro Operacional Modular",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        tall: false,
      },
      {
        title: "Coworking Light Steel",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        tall: true,
      },
    ],
  },
  {
    slug: "lazer",
    label: "Lazer",
    description:
      "Chalés, quiosques e estruturas de beira-rio com rapidez e integração ao entorno.",
    coverImage:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80",
    projects: [
      {
        title: "Chalé Rio Sereno",
        image:
          "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
        tall: true,
      },
      {
        title: "Deck Flutuante Norte",
        image:
          "https://images.unsplash.com/photo-1449158743715-f331cdbbbf4f?w=800&q=80",
        tall: false,
      },
      {
        title: "Quiosque Rancho Verde",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        tall: false,
      },
      {
        title: "Casa Campo Modular",
        image:
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
        tall: true,
      },
    ],
  },
  {
    slug: "agro",
    label: "AGRO",
    description:
      "Refeitórios, alojamentos, depósitos de defensivos e apoio operacional rural.",
    coverImage:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80",
    projects: [
      {
        title: "Refeitório Industrial Fazenda Oeste",
        image:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
        tall: false,
      },
      {
        title: "Alojamento Modular Safra",
        image:
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
        tall: true,
      },
      {
        title: "Depósito Defensivos Seco Seco",
        image:
          "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
        tall: false,
      },
      {
        title: "Centro Logístico Campo Norte",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        tall: false,
      },
      {
        title: "Armazém Grãos Estrutura Leve",
        image:
          "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
        tall: true,
      },
    ],
  },
];
