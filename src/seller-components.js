import React, { useState, useEffect } from 'react';
import { UploadIcon, TagIcon, DollarSignIcon, AnalyticsIcon } from './marketplace-components';

// Seller Dashboard Stats
export const SellerStats = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Items</h3>
        <p className="text-3xl font-bold text-blue-600">{stats.total_items}</p>
        <p className="text-sm text-gray-600 mt-1">Published</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Sales</h3>
        <p className="text-3xl font-bold text-green-600">{stats.total_sales}</p>
        <p className="text-sm text-gray-600 mt-1">Units Sold</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
        <p className="text-3xl font-bold text-purple-600">${stats.total_revenue?.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mt-1">Gross Earnings</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Rating</h3>
        <p className="text-3xl font-bold text-yellow-600">{stats.average_rating?.toFixed(1)}</p>
        <p className="text-sm text-gray-600 mt-1">Avg. Rating</p>
      </div>
    </div>
  );
};

// Upload Item Form
export const UploadItemForm = ({ onSubmit, onCancel, categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    item_type: 'campaign_template',
    category: 'email_marketing',
    pricing_type: 'one_time',
    price: 0,
    tags: [],
    preview_description: '',
    requirements: [],
    compatible_platforms: []
  });
  
  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Item</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter item title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Item Type *</label>
            <select
              required
              value={formData.item_type}
              onChange={(e) => setFormData({ ...formData, item_type: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.item_types?.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your item in detail"
          />
        </div>

        {/* Category and Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.categories?.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pricing Type *</label>
            <select
              required
              value={formData.pricing_type}
              onChange={(e) => setFormData({ ...formData, pricing_type: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.pricing_types?.map((price) => (
                <option key={price.value} value={price.value}>{price.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price {formData.pricing_type === 'free' ? '(Free)' : '*'}
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              disabled={formData.pricing_type === 'free'}
              value={formData.pricing_type === 'free' ? 0 : formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add tags (press Enter)"
            />
            <button
              type="button"
              onClick={addTag}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                #{tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Preview Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preview Description *</label>
          <textarea
            required
            value={formData.preview_description}
            onChange={(e) => setFormData({ ...formData, preview_description: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Short description for preview (shown in marketplace listing)"
          />
        </div>

        {/* File Upload Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Files & Preview Images</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
            <UploadIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
            <p className="text-sm text-gray-500">Support for images, documents, and archive files</p>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Choose Files
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Uploading...' : 'Upload Item'}
          </button>
        </div>
      </form>
    </div>
  );
};

// My Items List
export const MyItemsList = ({ items, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    const colors = {
      draft: 'bg-gray-100 text-gray-800',
      pending_review: 'bg-yellow-100 text-yellow-800',
      published: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      suspended: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-start space-x-4">
            <img 
              src={item.preview_images?.[0] || 'https://picsum.photos/120/80'} 
              alt={item.title}
              className="w-20 h-16 object-cover rounded-lg"
            />
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status?.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              
              <div className="flex items-center space-x-6 mt-4">
                <div className="text-sm">
                  <span className="text-gray-500">Price:</span>
                  <span className="font-medium ml-1">
                    {item.pricing_type === 'free' ? 'FREE' : `$${item.price}`}
                  </span>
                </div>
                
                <div className="text-sm">
                  <span className="text-gray-500">Sales:</span>
                  <span className="font-medium ml-1">{item.total_sales || 0}</span>
                </div>
                
                <div className="text-sm">
                  <span className="text-gray-500">Revenue:</span>
                  <span className="font-medium ml-1">${(item.total_revenue || 0).toFixed(2)}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="px-3 py-1 text-blue-600 hover:bg-blue-100 rounded-md text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="px-3 py-1 text-red-600 hover:bg-red-100 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Seller Profile Setup
export const SellerProfileSetup = ({ onComplete }) => {
  const [profileData, setProfileData] = useState({
    business_name: '',
    description: '',
    website_url: '',
    specializations: [],
    social_links: {}
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onComplete(profileData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Setup Your Seller Profile</h2>
        <p className="text-gray-600">Create your seller profile to start selling on MARKOS marketplace</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
          <input
            type="text"
            required
            value={profileData.business_name}
            onChange={(e) => setProfileData({ ...profileData, business_name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your business or brand name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
          <textarea
            required
            value={profileData.description}
            onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell customers about your expertise and what you offer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
          <input
            type="url"
            value={profileData.website_url}
            onChange={(e) => setProfileData({ ...profileData, website_url: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div className="flex space-x-4 pt-6">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Creating Profile...' : 'Create Seller Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};