import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { mockMarketplaceAPI } from './marketplace-data';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Icons for marketplace
export const ShoppingCartIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M15 20a1 1 0 100-2 1 1 0 000 2zM9 20a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

export const TagIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

export const FilterIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
  </svg>
);

export const StarIcon = ({ className, filled = false }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export const DownloadIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
  </svg>
);

export const UploadIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

// Rating component
export const RatingStars = ({ rating, size = 'sm' }) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4', 
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          filled={star <= rating}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  );
};

// Price component
export const PriceDisplay = ({ price, originalPrice, pricingType }) => {
  if (pricingType === 'free') {
    return <span className="text-lg font-bold text-green-600">FREE</span>;
  }
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-lg font-bold text-gray-900">${price}</span>
      {originalPrice && originalPrice > price && (
        <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
      )}
    </div>
  );
};

// Marketplace item card
export const MarketplaceItemCard = ({ item, onPurchase, isPurchased = false }) => {
  const getItemTypeColor = (type) => {
    const colors = {
      campaign_template: 'bg-blue-100 text-blue-800',
      workflow_recipe: 'bg-green-100 text-green-800',
      creative_asset: 'bg-purple-100 text-purple-800',
      analytics_dashboard: 'bg-orange-100 text-orange-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getItemTypeLabel = (type) => {
    const labels = {
      campaign_template: 'Campaign Template',
      workflow_recipe: 'Workflow Recipe',
      creative_asset: 'Creative Asset',
      analytics_dashboard: 'Analytics Dashboard'
    };
    return labels[type] || type;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:scale-105">
      {/* Item Image */}
      <div className="relative mb-4">
        <img 
          src={item.preview_images?.[0] || 'https://picsum.photos/400/200'} 
          alt={item.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        {item.featured && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            FEATURED
          </span>
        )}
        <span className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-medium ${getItemTypeColor(item.item_type)}`}>
          {getItemTypeLabel(item.item_type)}
        </span>
      </div>

      {/* Item Info */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        {/* Seller Info */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">{item.seller_name?.[0]}</span>
          </div>
          <span className="text-sm text-gray-600">by {item.seller_name}</span>
        </div>

        {/* Rating and Sales */}
        <div className="flex items-center justify-between mb-4">
          <RatingStars rating={Math.floor(item.average_rating)} />
          <span className="text-xs text-gray-500">{item.total_sales} sales</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {item.tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Price and Purchase */}
      <div className="flex items-center justify-between">
        <PriceDisplay 
          price={item.price} 
          originalPrice={item.original_price}
          pricingType={item.pricing_type}
        />
        
        {isPurchased ? (
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium">
            <DownloadIcon className="w-4 h-4" />
            <span>Owned</span>
          </button>
        ) : (
          <button 
            onClick={() => onPurchase(item)}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
          >
            <ShoppingCartIcon className="w-4 h-4" />
            <span>{item.price === 0 ? 'Get Free' : 'Purchase'}</span>
          </button>
        )}
      </div>
    </div>
  );
};

// Search and Filter Bar
export const MarketplaceFilters = ({ filters, onFiltersChange, categories, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates, workflows, assets..."
            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <FilterIcon className="w-5 h-5" />
          <span>Filters</span>
        </button>
        
        <div className="flex items-center space-x-4">
          <select 
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.sort || 'newest'}
            onChange={(e) => onFiltersChange({ ...filters, sort: e.target.value })}
          >
            <option value="newest">Newest First</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="popularity">Most Popular</option>
          </select>
        </div>
      </div>

      {/* Expandable Filters */}
      {showFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.category || ''}
                onChange={(e) => onFiltersChange({ ...filters, category: e.target.value })}
              >
                <option value="">All Categories</option>
                {categories.categories?.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            {/* Item Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.item_type || ''}
                onChange={(e) => onFiltersChange({ ...filters, item_type: e.target.value })}
              >
                <option value="">All Types</option>
                {categories.item_types?.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Pricing Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pricing</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.pricing_type || ''}
                onChange={(e) => onFiltersChange({ ...filters, pricing_type: e.target.value })}
              >
                <option value="">All Pricing</option>
                {categories.pricing_types?.map((price) => (
                  <option key={price.value} value={price.value}>{price.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="mt-4 flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={filters.featured_only || false}
                onChange={(e) => onFiltersChange({ ...filters, featured_only: e.target.checked })}
              />
              <span className="text-sm text-gray-700">Featured only</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={filters.free_only || false}
                onChange={(e) => onFiltersChange({ ...filters, pricing_type: e.target.checked ? 'free' : '' })}
              />
              <span className="text-sm text-gray-700">Free items only</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

// Marketplace stats component
export const MarketplaceStats = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Items</h3>
        <p className="text-3xl font-bold text-blue-600">{stats.total_items?.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mt-1">Templates & Assets</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Sellers</h3>
        <p className="text-3xl font-bold text-purple-600">{stats.total_sellers}</p>
        <p className="text-sm text-gray-600 mt-1">Verified Creators</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Sales</h3>
        <p className="text-3xl font-bold text-green-600">{stats.total_transactions?.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mt-1">Successful Purchases</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Avg. Price</h3>
        <p className="text-3xl font-bold text-orange-600">${stats.average_item_price?.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mt-1">Per Item</p>
      </div>
    </div>
  );
};

// Purchase Modal
export const PurchaseModal = ({ item, isOpen, onClose, onConfirm, loading }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Purchase Confirmation</h3>
        
        <div className="mb-6">
          <img 
            src={item.preview_images?.[0] || 'https://picsum.photos/400/200'} 
            alt={item.title}
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h4 className="font-semibold text-gray-900">{item.title}</h4>
          <p className="text-sm text-gray-600 mt-1">by {item.seller_name}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span>Price:</span>
            <PriceDisplay 
              price={item.price} 
              originalPrice={item.original_price}
              pricingType={item.pricing_type}
            />
          </div>
          {item.original_price && item.original_price > item.price && (
            <div className="text-sm text-green-600 mt-1">
              You save ${(item.original_price - item.price).toFixed(2)}!
            </div>
          )}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(item)}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Processing...' : item.price === 0 ? 'Get Free' : 'Purchase'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Marketplace API service with dummy data fallback
export const marketplaceAPI = {
  getItems: async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters).toString();
      const response = await axios.get(`${API}/marketplace/?${params}`);
      return response.data;
    } catch (error) {
      console.log('Backend unavailable, using dummy data for marketplace items');
      // Use dummy data as fallback
      return mockMarketplaceAPI.getItems(filters);
    }
  },

  getStats: async () => {
    try {
      const response = await axios.get(`${API}/marketplace/stats`);
      return response.data;
    } catch (error) {
      console.log('Backend unavailable, using dummy data for marketplace stats');
      // Use dummy data as fallback
      return mockMarketplaceAPI.getStats();
    }
  },

  getCategories: async () => {
    try {
      const response = await axios.get(`${API}/marketplace/categories`);
      return response.data;
    } catch (error) {
      console.log('Backend unavailable, using dummy data for marketplace categories');
      // Use dummy data as fallback
      return mockMarketplaceAPI.getCategories();
    }
  },

  purchaseItem: async (itemId) => {
    try {
      const response = await axios.post(`${API}/marketplace/purchase/${itemId}`, {
        payment_method: 'mock_payment'
      });
      return response.data;
    } catch (error) {
      console.log('Backend unavailable, simulating purchase with dummy data');
      // Simulate successful purchase for demo purposes
      const item = mockMarketplaceAPI.getItem(itemId);
      if (item) {
        return {
          success: true,
          message: 'Purchase successful (demo mode)',
          item: item,
          transaction_id: `demo_${Date.now()}`
        };
      } else {
        throw new Error('Item not found');
      }
    }
  },

  // Additional helper methods for dummy data
  getItem: async (itemId) => {
    try {
      const response = await axios.get(`${API}/marketplace/item/${itemId}`);
      return response.data;
    } catch (error) {
      console.log('Backend unavailable, using dummy data for item details');
      return mockMarketplaceAPI.getItem(itemId);
    }
  },

  getSeller: async (sellerId) => {
    try {
      const response = await axios.get(`${API}/marketplace/seller/${sellerId}`);
      return response.data;
    } catch (error) {
      console.log('Backend unavailable, using dummy data for seller details');
      return mockMarketplaceAPI.getSeller(sellerId);
    }
  }
};