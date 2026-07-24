// components/Footer.jsx
import React from 'react';

export default function Footer({ setActiveCategory }) {
  // Ganti nomor WA berikut dengan nomor WhatsApp kamu sendiri
  const whatsappNumber = "6281234567890"; 
  const waMessage = encodeURIComponent("Halo Admin kebanggaanootd, saya ingin bertanya rekomendasi baju / bantuan ukuran produk.");

  return (
    <footer className="bg-white border-t border-gray-200 pt-8 pb-24 md:pb-10 text-gray-600 text-xs mt-12">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        
        <div className="grid grid-cols-4 gap-2 md:gap-8 mb-8">
          
          {/* Col 1: Brand Info & Social Media Links */}
          <div className="space-y-2 md:space-y-3">
            <span className="font-logo text-xs md:text-xl font-black text-[#C8102E] block leading-tight">
              OOTDKebanggaan
            </span>
            <p className="text-gray-500 text-[9px] md:text-xs leading-relaxed hidden sm:block">
              Platform kurasi busana Merah Putih & outfit harian keluarga.
            </p>

            {/* Social Media Section */}
            <div className="pt-1">
              <span className="text-[9px] md:text-[11px] font-bold text-gray-900 block mb-1.5">
                Ikuti Kami:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                <a
                  href="https://instagram.com/kebanggaanootd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-sm hover:opacity-90 transition-opacity"
                  aria-label="Instagram kebanggaanootd"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://tiktok.com/@kebanggaanootd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-black text-white flex items-center justify-center shadow-sm hover:bg-gray-800 transition-colors"
                  aria-label="TikTok kebanggaanootd"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.52-1.28 2.51.02.97.55 1.87 1.4 2.33.91.51 2.05.49 2.93-.04.79-.47 1.28-1.35 1.28-2.27.01-4.07-.01-8.14.02-12.21z"/>
                  </svg>
                </a>

                <a
                  href="https://facebook.com/kebanggaanootd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-sm hover:bg-blue-700 transition-colors"
                  aria-label="Facebook kebanggaanootd"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links / Categories */}
          <div>
            <h4 className="font-bold text-gray-900 text-[10px] md:text-sm mb-2 leading-tight">Kategori</h4>
            <ul className="space-y-1 md:space-y-2 text-[9px] md:text-xs">
              <li>
                <button onClick={() => setActiveCategory('anak')} className="hover:text-[#C8102E] text-left leading-tight transition-colors cursor-pointer">
                  Baju Anak
                </button>
              </li>
              <li>
                <button onClick={() => setActiveCategory('family')} className="hover:text-[#C8102E] text-left leading-tight transition-colors cursor-pointer">
                  Family Set
                </button>
              </li>
              <li>
                <button onClick={() => setActiveCategory('pria-wanita')} className="hover:text-[#C8102E] text-left leading-tight transition-colors cursor-pointer">
                  Pria & Wanita
                </button>
              </li>
              <li>
                <button onClick={() => setActiveCategory('17an')} className="hover:text-[#C8102E] text-left leading-tight transition-colors cursor-pointer">
                  Edisi Merah Putih
                </button>
              </li>
              <li>
                <button onClick={() => setActiveCategory('aksesori')} className="hover:text-[#C8102E] text-left leading-tight transition-colors cursor-pointer">
                  Aksesori
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Info (Diperbarui dengan Link Interaktif) */}
          <div>
            <h4 className="font-bold text-gray-900 text-[10px] md:text-sm mb-2 leading-tight">Bantuan</h4>
            <ul className="space-y-1 md:space-y-2 text-[9px] md:text-xs text-gray-600">
              <li>
                <a 
                  href="https://help.shopee.co.id/portal/4/article/72958" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C8102E] leading-tight transition-colors block"
                >
                  Cara Belanja
                </a>
              </li>
              <li>
                <a 
                  href="https://help.shopee.co.id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C8102E] leading-tight transition-colors block"
                >
                  Garansi Shopee
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${waMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C8102E] leading-tight transition-colors block font-semibold text-[#C8102E]"
                >
                  💬 Chat Admin WA
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Safe Payment */}
          <div>
            <h4 className="font-bold text-gray-900 text-[10px] md:text-sm mb-2 leading-tight">Keamanan</h4>
            <p className="text-gray-500 text-[8px] md:text-xs mb-2 leading-tight hidden sm:block">
              Transaksi via **Shopee Indonesia** (COD, ShopeePay, Bank).
            </p>
            <div className="flex flex-col md:flex-row flex-wrap gap-1 text-[8px] md:text-[10px] font-semibold text-gray-700">
              <span className="border border-gray-200 px-1.5 py-0.5 rounded bg-gray-50 text-[8px] md:text-[10px] text-center">🔒 Secure</span>
              <span className="border border-gray-200 px-1.5 py-0.5 rounded bg-gray-50 text-[8px] md:text-[10px] text-center">🚚 Ongkir</span>
              <span className="border border-gray-200 px-1.5 py-0.5 rounded bg-gray-50 text-[8px] md:text-[10px] text-center">💵 COD</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-200 my-4" />

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left text-gray-400 text-[9px] md:text-[11px]">
          <div>
            <p>© {new Date().getFullYear()} <strong>OOTDKebanggaan</strong>. All rights reserved.</p>
            <p className="mt-0.5 text-[8px] md:text-[10px]">
              Disclaimer: OOTDKebanggaan merupakan situs kurasi produk affiliate.
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 text-gray-500 font-medium text-[8px] md:text-[11px]">
            <span>Syarat & Ketentuan</span>
            <span>•</span>
            <span>Privasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}