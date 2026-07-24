// components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ product, isWishlisted, onToggleWishlist }) {
  const formatIDR = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAffiliateClick = () => {
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Product Image Box */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Age / Size Badge */}
          <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded">
            {product.ageBadge}
          </span>

          {/* Seller Status Badge */}
          <span className="absolute top-2 right-2 bg-[#C8102E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
            {product.sellerBadge}
          </span>

          {/* Wishlist Toggle Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className="absolute bottom-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm text-gray-500 hover:text-[#C8102E] transition-colors"
          >
            <svg 
              className={`w-4 h-4 ${isWishlisted ? 'fill-[#C8102E] stroke-[#C8102E]' : 'stroke-current fill-none'}`} 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Content Box */}
        <div className="p-3">
          <h3 className="text-xs font-medium text-gray-800 line-clamp-2 h-8 leading-snug mb-2">
            {product.title}
          </h3>

          {/* Price Container */}
          <div className="flex items-baseline gap-1.5 mb-1">
            <span className="text-sm font-bold text-[#C8102E]">
              {formatIDR(product.discountedPrice)}
            </span>
            <span className="text-[10px] text-gray-400 line-through">
              {formatIDR(product.originalPrice)}
            </span>
          </div>

          {/* Rating & Sales Meta */}
          <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-3">
            <span className="text-[#D4AF37] font-bold">⭐ {product.rating}</span>
            <span>•</span>
            <span>{product.soldCount} terjual</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-3 pt-0">
        <button 
          onClick={handleAffiliateClick}
          className="w-full bg-gradient-to-r from-[#C8102E] to-[#A00C23] hover:from-[#A00C23] hover:to-[#80091B] text-white font-bold text-xs py-2 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <span>Cek & Beli di Shopee</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
    </div>
  );
}