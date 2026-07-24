// pages/index.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import MobileBottomNav from '../components/MobileBottomNav';
import { products, categories } from '../data/products';
import Footer from '../components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMobileTab, setActiveMobileTab] = useState('home');
  const [wishlist, setWishlist] = useState([]);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);

  // Timer State for Flash Sale Countdown
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  // Load Saved Wishlist from LocalStorage on Mounting
  useEffect(() => {
    const saved = localStorage.getItem('kebanggaan_wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved wishlist', e);
      }
    }
  }, []);

  // Flash Sale Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Toggle Wishlist Logic
  const handleToggleWishlist = (id) => {
    let updated;
    if (wishlist.includes(id)) {
      updated = wishlist.filter(item => item !== id);
    } else {
      updated = [...wishlist, id];
    }
    setWishlist(updated);
    localStorage.setItem('kebanggaan_wishlist', JSON.stringify(updated));
  };

  // Filtered Products Computing Logic
  const filteredProducts = products.filter(p => {
    const matchesCategory = 
      activeCategory === 'all' ? true :
      activeCategory === '17an' ? p.isFlashSale :
      p.category === activeCategory;

    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = 
      activeMobileTab === 'flashsale' ? p.isFlashSale : true;

    return matchesCategory && matchesSearch && matchesTab;
  });

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  // Handle Smooth Scroll
  const handleHeroButtonClick = () => {
    setActiveCategory('all');
    const productSection = document.getElementById('katalog-produk');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pb-20 md:pb-12 bg-[#F8F9FA]">
      {/* Header Component (Satu-satunya Menu Kategori Utama di Atas) */}
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        wishlistCount={wishlist.length}
        openWishlistModal={() => setIsWishlistModalOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 pt-4">
        {/* Hero Promotional Banner (Elegat & All-Season) */}
        <section className="bg-gradient-to-br from-[#C8102E] via-[#A00C23] to-[#700616] text-white rounded-2xl p-5 md:p-8 mb-5 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <span className="inline-block bg-[#D4AF37] text-gray-900 text-[10px] md:text-xs font-black uppercase px-2.5 py-1 rounded-md mb-2">
              Koleksi Outfit Keluarga Terfavorit
            </span>
            <h1 className="text-xl md:text-3xl font-extrabold leading-tight mb-2">
              Tampil Kompak & Bangga Bersama Keluarga
            </h1>
            <p className="text-xs md:text-sm text-red-100 mb-4">
              Pusat kurasi busana anak, pakaian couple, family set, hingga rekomendasi baju Merah Putih Kemerdekaan pilihan Shopee Star Seller.
            </p>
            
            {/* Tombol Interaktif ke Katalog Utama */}
            <button 
              onClick={handleHeroButtonClick}
              className="bg-white text-[#C8102E] font-bold text-xs md:text-sm px-5 py-2.5 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Jelajahi Semua Koleksi</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Feature Highlights Grid (Bukan Kategori Ganda, Tapi Value Proposition ala Shopee/Tokopedia) */}
        <section className="grid grid-cols-4 gap-2 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm mb-6 text-center">
          <div className="flex flex-col items-center p-1">
            <span className="text-xl md:text-2xl mb-1">🚚</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-800">Gratis Ongkir</span>
            <span className="text-[9px] text-gray-400 hidden md:block">Voucher Shopee Extra</span>
          </div>
          <div className="flex flex-col items-center p-1">
            <span className="text-xl md:text-2xl mb-1">⭐</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-800">Star Seller</span>
            <span className="text-[9px] text-gray-400 hidden md:block">Toko Terpercaya</span>
          </div>
          <div className="flex flex-col items-center p-1">
            <span className="text-xl md:text-2xl mb-1">💵</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-800">Bisa COD</span>
            <span className="text-[9px] text-gray-400 hidden md:block">Bayar Di Tempat</span>
          </div>
          <div className="flex flex-col items-center p-1">
            <span className="text-xl md:text-2xl mb-1">🏷️</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-800">Promo Diskon</span>
            <span className="text-[9px] text-gray-400 hidden md:block">Potongan s/d 70%</span>
          </div>
        </section>

        {/* Section Promo Hot Deals / Rekomendasi Diskon (Aman & Akurat untuk Affiliate) */}
        <section className="flex items-center justify-between mb-4 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-red-600 font-extrabold text-xs md:text-base flex items-center gap-1.5">
              🔥 PROMO HOT DEALS HARI INI
            </span>
            <span className="bg-red-100 text-[#C8102E] text-[10px] font-bold px-2 py-0.5 rounded-full hidden sm:inline-block">
              Diskon s/d 70%
            </span>
          </div>
          
          {/* Tombol yang mengarah langsung ke katalog produk berdiskon */}
          <button 
            onClick={() => {
              setActiveMobileTab('flashsale');
              setActiveCategory('all');
              const target = document.getElementById('katalog-produk');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-bold text-[#C8102E] hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>Lihat Semua Promo</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </section>

        {/* Product Grid Area dengan Target Scroll */}
        <section id="katalog-produk" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={handleToggleWishlist}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-400">
              <p className="text-sm font-medium">Produk tidak ditemukan untuk kata kunci ini.</p>
            </div>
          )}
        </section>
      </main>

      {/* Komponen Footer */}
      <Footer setActiveCategory={setActiveCategory} />

      {/* Floating Bottom Nav */}
      <MobileBottomNav 
        activeTab={activeMobileTab}
        setActiveTab={setActiveMobileTab}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistModalOpen(true)}
      />

      {/* Wishlist Modal Drawer */}
      {isWishlistModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-4 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b pb-3 mb-4">
                <h2 className="font-bold text-sm text-gray-800 flex items-center gap-1.5">
                  ❤️ Wishlist Saya ({wishlist.length})
                </h2>
                <button 
                  onClick={() => setIsWishlistModalOpen(false)}
                  className="text-gray-400 font-bold hover:text-gray-600 text-sm cursor-pointer"
                >
                  Tutup ✕
                </button>
              </div>

              {wishlistedProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {wishlistedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isWishlisted={true}
                      onToggleWishlist={handleToggleWishlist}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 text-center py-10">Belum ada produk favorit disimpan.</p>
              )}
            </div>

            <button 
              onClick={() => setIsWishlistModalOpen(false)}
              className="w-full bg-gray-100 text-gray-700 font-bold text-xs py-2.5 rounded-lg mt-4 cursor-pointer"
            >
              Kembali Belanja
            </button>
          </div>
        </div>
      )}
    </div>
  );
}