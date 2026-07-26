// components/MobileBottomNav.jsx
import React, { useState } from 'react';
import { categories } from '../data/products';

export default function MobileBottomNav({ 
  activeTab, 
  setActiveTab, 
  activeCategory,
  setActiveCategory,
  wishlistCount, 
  onOpenWishlist 
}) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const whatsappNumber = "6283837330214"; 
  const waMessage = encodeURIComponent("Halo Admin ootdkebanggaan, saya ingin bertanya rekomendasi outfit / bantuan ukuran baju.");

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    setIsCategoryOpen(false); // Tutup drawer
    setActiveTab('home');
    
    // Scroll halus ke katalog
    const target = document.getElementById('katalog-produk');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Pop-up Category Drawer (Bottom Sheet ala App Shopee/Tokopedia) */}
      {isCategoryOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 z-50 flex items-end animate-fadeIn">
          <div className="bg-white w-full rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto animate-slideUp">
            
            {/* Header Drawer */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <div>
                <h3 className="font-bold text-sm text-gray-900">Pilih Kategori Outfit</h3>
                <p className="text-[10px] text-gray-400">Temukan busana pilihan keluarga kamu</p>
              </div>
              <button 
                onClick={() => setIsCategoryOpen(false)}
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs"
              >
                ✕
              </button>
            </div>

            {/* List Kategori Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                    activeCategory === cat.id 
                      ? 'border-[#C8102E] bg-red-50 text-[#C8102E] font-bold shadow-xs' 
                      : 'border-gray-100 bg-gray-50 text-gray-700 font-medium'
                  }`}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-xs">{cat.label}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Floating Bottom Nav Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40 px-2 py-1.5 shadow-lg">
        <div className="flex justify-around items-center">
          
          {/* 1. Beranda */}
          <button 
            onClick={handleHomeClick}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold cursor-pointer transition-colors ${
              activeTab === 'home' && !isCategoryOpen ? 'text-[#C8102E]' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Beranda</span>
          </button>

          {/* 2. Kategori (Buka Pop-up Drawer) */}
          <button 
            onClick={() => setIsCategoryOpen(true)}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold cursor-pointer transition-colors ${
              isCategoryOpen ? 'text-[#C8102E]' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <span>Kategori</span>
          </button>

          {/* 3. Wishlist */}
          <button 
            onClick={() => {
              setActiveTab('wishlist');
              onOpenWishlist();
            }}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold cursor-pointer transition-colors relative ${
              activeTab === 'wishlist' ? 'text-[#C8102E]' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>Wishlist</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 right-2 bg-[#C8102E] text-white text-[9px] font-extrabold w-3.5 h-3.5 rounded-full flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* 4. Chat Admin WA */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${waMessage}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 text-[10px] font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Chat Admin</span>
          </a>

        </div>
      </nav>
    </>
  );
}