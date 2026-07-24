// data/products.js

export const categories = [
  { id: 'all', label: 'Semua Outfit', icon: '✨' },
  { id: 'anak', label: 'Baju Anak & Balita', icon: '👶' },
  { id: 'family', label: 'Family Set / Couple', icon: '👨‍👩‍👧' },
  { id: 'pria-wanita', label: 'Pria & Wanita', icon: '👕' },
  { id: '17an', label: 'Spesial 17-an', icon: '🇲🇨' },
  { id: 'aksesori', label: 'Aksesori & Topi', icon: '🎗️' },
];

export const products = [
  // --- KATEGORI: BAJU ANAK & BALITA ('anak') ---
  {
    id: "prod-001",
    title: "KAOS ANAK 17 AGUSTUS KICAU MANIA 1-12 TAHUN KAOS KEMERDEKAAN",
    category: "anak",
    isFlashSale: true,
    ageBadge: "Anak 1-12 Thn",
    originalPrice: 69000,
    discountedPrice: 21999,
    discountPercent: 48,
    rating: 4.9,
    soldCount: "4.3rb+",
    sellerBadge: "Star+",
    imageUrl: "/products/baju-anak-1.jpg",
    affiliateUrl: "https://s.shopee.co.id/9V08CqNPEt"
  },
  {
    id: "prod-002",
    title: "Kaos Jersey Kemerdekaan Indonesia 2026 Baju Agustusan Merah Putih Panitia 17 Karang Taruna",
    category: "pria-wanita",
    isFlashSale: true,
    ageBadge: "Anak,Dewasa,Family",
    originalPrice: 200000,
    discountedPrice: 50950,
    discountPercent: 150,
    rating: 4.9,
    soldCount: "1.2rb+",
    sellerBadge: "Star+",
    imageUrl: "/products/kaos-jersy.jpg",
    affiliateUrl: "https://s.shopee.co.id/AKZFAqxdjX"
  },

  // --- KATEGORI: FAMILY SET / COUPLE ('family') ---
  {
    id: "prod-003",
    title: "Kaos Kemerdekaan RI Family Couple Merah (Baju Keluarga Anak & Dewasa)",
    category: "family",
    isFlashSale: true,
    ageBadge: "Family Set (S-XXL)",
    originalPrice: 75000,
    discountedPrice: 32000,
    discountPercent: 57,
    rating: 4.8,
    soldCount: "1.8rb+",
    sellerBadge: "Star+",
    imageUrl: "/products/kaos-couple-merah.jpg",
    affiliateUrl: "https://s.shopee.co.id/8V7awezl5s"
  },
  {
    id: "prod-004",
    title: "Setelan Anak 17 Agustus Baju Kemerdekaan Anak Kostum 17 Agustus Anak Merah Putih HUT RI 1945 ",
    category: "anak",
    isFlashSale: true,
    ageBadge: "Set 3 bln-5 tahun",
    originalPrice: 30000,
    discountedPrice: 30000,
    discountPercent: 30,
    rating: 4.7,
    soldCount: "600+",
    sellerBadge: "Star+",
    imageUrl: "/products/baju-anak-2.jpg",
    affiliateUrl: "https://s.shopee.co.id/192uAdqb2"
  },

  // --- KATEGORI: PRIA & WANITA ('pria-wanita') ---
  {
    id: "prod-005",
    title: "Kaos Jersey Kemerdekaan Couple Keluarga 2026 Indonesia Dirgahayu Baju Laki Laki Wanita Perempuan 17 Agustus 1945",
    category: "pria-wanita",
    isFlashSale: true,
    ageBadge: "Dewasa S-XXL",
    originalPrice: 180000,
    discountedPrice: 50000,
    discountPercent: 50,
    rating: 4.8,
    soldCount: "10rb+",
    sellerBadge: "Star+",
    imageUrl: "/products/polo-pria.jpg",
    affiliateUrl: "https://s.shopee.co.id/1VxqhzSvQN"
  },
  {
    id: "prod-006",
    title: "jepit rambut clips/bando merah putih 17 agustus kemerdekaan",
    category: "wanita",
    isFlashSale: false,
    ageBadge: "All Size",
    originalPrice: 18000,
    discountedPrice: 9200,
    discountPercent: 35,
    rating: 4.8,
    soldCount: "3+",
    sellerBadge: "Star+",
    imageUrl: "/products/wanita.jpg",
    affiliateUrl: "https://s.shopee.co.id/1BL0N5lPsM"
  },

  // --- KATEGORI: SPESIAL 17-AN ('17an') ---
  {
    id: "prod-007",
    title: "Topi Kemerdekaan Indonesia Agustusan Untuk Wanita Model Golf Full Printing",
    category: "17an",
    isFlashSale: true,
    ageBadge: "ALL Size wanita",
    originalPrice: 40000,
    discountedPrice: 27000,
    discountPercent: 32,
    rating: 4.9,
    soldCount: "157+",
    sellerBadge: "Star+",
    imageUrl: "/products/kostum-pejuang.jpg",
    affiliateUrl: "https://s.shopee.co.id/9fJYU3RZ0B"
  },
  {
    id: "prod-008",
    title: "Topi Sablon Bucket anak dan dewasa Karakter Tema Kemerdekaan HUT RI 17 AGUSTUS AGUTUSAN Topi BUCKET 2 Warna Merah Putih",
    category: "17an",
    isFlashSale: false,
    ageBadge: "bayi-Dewasa",
    originalPrice: 85000,
    discountedPrice: 45000,
    discountPercent: 47,
    rating: 4.7,
    soldCount: "10,2rb+",
    sellerBadge: "Star+",
    imageUrl: "/products/merah-putih.jpg",
    affiliateUrl: "https://s.shopee.co.id/AUsfScjflC"
  },

  // --- KATEGORI: AKSESORI & TOPI ('aksesori') ---
  {
    id: "prod-009",
    title: "bendera background Garuda merah putih berbagai macam model (asesoris agustusan)",
    category: "aksesori",
    isFlashSale: true,
    ageBadge: "Semua Umur",
    originalPrice: 0,
    discountedPrice: 56000,
    discountPercent: 47,
    rating: 4.8,
    soldCount: "2.3rb+",
    sellerBadge: "Star+",
    imageUrl: "/products/bendera1.jpg",
    affiliateUrl: "https://s.shopee.co.id/8fR1FyYNYK"
  },
  {
    id: "prod-010",
    title: "Iket Kemerdekaan Indonesia Agustusan iket kepala dedi mulyadi sunda jawa barat tradisional udeng sunda totopong mahkuta wangsa",
    category: "aksesori",
    isFlashSale: false,
    ageBadge: "Semua Umur",
    originalPrice: 30000,
    discountedPrice: 25000,
    discountPercent: 37,
    rating: 4.7,
    soldCount: "3rb+",
    sellerBadge: "Star+",
    imageUrl: "/products/aksesori-karnaval.jpg",
    affiliateUrl: "https://s.shopee.co.id/1VxqjWloaP"
  }
];