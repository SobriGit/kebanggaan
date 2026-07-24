// components/Header.jsx
import React from 'react';
import { categories } from '../data/products';

export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory, 
  wishlistCount,
  openWishlistModal
}) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      {/* 1. Top Running Banner Promo (Berjalan Halus ke Kiri) */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white text-[11px] font-medium py-1.5 overflow-hidden relative">
        <div className="animate-marquee">
          🎉 Promo Hari Ini: Diskon s/d 20% + Gratis Ongkir Extra Shopee! &nbsp;•&nbsp; 👗 Rekomendasi Outfit Couple & Seragam Keluarga Terfavorit &nbsp;•&nbsp; ⚡ Flash Sale Produk Pilihan Setiap Hari!
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-3 pb-2">
        {/* 2. Top Bar: Logo, Search Bar, & Wishlist Icon */}
        <div className="flex items-center justify-between gap-3 md:gap-6 mb-2">
          
          {/* Brand Logo */}
          <div className="flex flex-col cursor-pointer select-none" onClick={() => setActiveCategory('all')}>
            <span className="font-logo text-xl md:text-2xl font-black text-[#C8102E] tracking-tight leading-none">
              OOTDKebanggaan
            </span>
          </div>

          {/* Search Bar Input */}
          <div className="flex-1 max-w-xl relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari baju merah putih anak, kaos couple, dress..."
              className="w-full bg-gray-100 text-xs md:text-sm text-gray-800 rounded-full pl-9 pr-8 py-2 md:py-2.5 border border-transparent focus:border-[#C8102E] focus:bg-white focus:outline-none transition-all shadow-inner"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Wishlist Icon Counter */}
          <button 
            onClick={openWishlistModal}
            className="relative p-2 text-gray-700 hover:text-[#C8102E] transition-colors cursor-pointer"
            aria-label="Wishlist"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#C8102E] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>
        </div>

        {/* 3. Categories Pills (Navigasi Kategori Atas yang Lebih Rapi & Presisi) */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pt-2 pb-1 touch-scroll">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer select-none border ${
                  isActive
                    ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-sm scale-105'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="text-sm">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}