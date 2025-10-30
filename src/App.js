import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Header, 
  Sidebar, 
  StatCard, 
  Chart, 
  ProjectCard, 
  AIToolCard, 
  CampaignCard, 
  TeamMemberCard,
  mockData,
  DashboardIcon,
  BrainIcon,
  CampaignIcon,
  AnalyticsIcon,
  TeamIcon,
  SettingsIcon,
  PlusIcon,
  UploadIcon
} from './components';
import { 
  MarketplaceItemCard,
  MarketplaceFilters, 
  MarketplaceStats,
  PurchaseModal,
  marketplaceAPI,
  ShoppingCartIcon
} from './marketplace-components';
import { 
  SellerStats,
  UploadItemForm,
  MyItemsList,
  SellerProfileSetup
} from './seller-components';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// API Service functions
const apiService = {
  // Dashboard
  getDashboardStats: async () => {
    try {
      const response = await axios.get(`${API}/dashboard/stats`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
      return mockData.dashboardStats;
    }
  },

  // Campaigns
  getCampaigns: async () => {
    try {
      const response = await axios.get(`${API}/campaigns`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
      return mockData.projects; // fallback to mock data
    }
  },

  // AI Tools
  generateContent: async (prompt, toolType, parameters = {}) => {
    try {
      const response = await axios.post(`${API}/ai/generate`, {
        prompt,
        tool_type: toolType,
        ...parameters
      });
      return response.data;
    } catch (error) {
      console.error('Failed to generate AI content:', error);
      return { success: false, error: 'Failed to generate content' };
    }
  },

  // Authentication
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API}/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }
};

// Dashboard Component with Real API
const Dashboard = () => {
  const [dashboardStats, setDashboardStats] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const [stats, campaignsData] = await Promise.all([
          apiService.getDashboardStats(),
          apiService.getCampaigns()
        ]);
        
        setDashboardStats(stats);
        setCampaigns(campaignsData);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const stats = dashboardStats ? [
    { title: 'Active Campaigns', value: dashboardStats.active_campaigns, change: '+12%', icon: CampaignIcon, trend: 'up' },
    { title: 'Total Impressions', value: `${(dashboardStats.total_impressions / 1000000).toFixed(1)}M`, change: '+8%', icon: AnalyticsIcon, trend: 'up' },
    { title: 'AI Generations', value: dashboardStats.total_ai_generations, change: '+24%', icon: BrainIcon, trend: 'up' },
    { title: 'Team Members', value: dashboardStats.total_team_members, change: '+2', icon: TeamIcon, trend: 'up' },
  ] : mockData.stats;

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600">Welcome back, Sarah! Here's your overview.</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center space-x-2 hover:scale-105 transform duration-200">
          <PlusIcon className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="transform hover:scale-105 transition-all duration-200">
            <StatCard {...stat} />
          </div>
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Campaign Performance" type="line" />
        <Chart title="AI Tool Usage" type="bar" />
      </div>
      
      {/* Recent Projects */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Campaigns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.slice(0, 3).map((campaign, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-200">
              <ProjectCard project={campaign} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// AI Studio Component with Real API Integration
const AIStudio = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationResult, setGenerationResult] = useState(null);
  const [prompt, setPrompt] = useState('');

  const handleGenerate = async (toolType) => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setGenerationResult(null);
    
    try {
      const result = await apiService.generateContent(prompt, toolType);
      setGenerationResult(result);
    } catch (error) {
      setGenerationResult({ success: false, error: 'Generation failed' });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Studio</h2>
          <p className="text-gray-600">Unleash creativity with our AI-powered tools</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
          Launch AI Assistant
        </button>
      </div>
      
      {/* AI Generation Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Content Generator</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter your prompt:</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Describe what you want to create..."
            />
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={() => handleGenerate('content_generator')}
              disabled={isGenerating || !prompt.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isGenerating ? 'Generating...' : 'Generate Text'}
            </button>
            
            <button
              onClick={() => handleGenerate('image_creator')}
              disabled={isGenerating || !prompt.trim()}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isGenerating ? 'Generating...' : 'Generate Image'}
            </button>
            
            <button
              onClick={() => handleGenerate('voice_synthesizer')}
              disabled={isGenerating || !prompt.trim()}
              className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isGenerating ? 'Generating...' : 'Generate Voice'}
            </button>
          </div>
          
          {/* Results Display */}
          {generationResult && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              {generationResult.success ? (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Generated Content:</h4>
                  {generationResult.content && (
                    <p className="text-gray-700">{generationResult.content}</p>
                  )}
                  {generationResult.image_url && (
                    <img 
                      src={generationResult.image_url} 
                      alt="Generated content" 
                      className="max-w-xs rounded-lg mt-2"
                    />
                  )}
                  {generationResult.audio_url && (
                    <audio controls className="mt-2">
                      <source src={generationResult.audio_url} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
              ) : (
                <div className="text-red-600">
                  <p>Generation failed: {generationResult.error}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* AI Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockData.aiTools.map((tool, index) => (
          <div key={index} className="transform hover:scale-105 transition-all duration-200">
            <AIToolCard tool={tool} />
          </div>
        ))}
      </div>
      
      {/* Featured AI Workspace */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Creative Workspace</h3>
          <p className="text-gray-600">Your collaborative space for AI-powered content creation</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm transform hover:scale-105 transition-all duration-200">
            <h4 className="font-semibold text-gray-900 mb-2">Content Generation</h4>
            <p className="text-sm text-gray-600 mb-4">Create compelling copy and content</p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Creating
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm transform hover:scale-105 transition-all duration-200">
            <h4 className="font-semibold text-gray-900 mb-2">Design Assistant</h4>
            <p className="text-sm text-gray-600 mb-4">Generate visuals and design elements</p>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Design Now
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm transform hover:scale-105 transition-all duration-200">
            <h4 className="font-semibold text-gray-900 mb-2">Strategy Planner</h4>
            <p className="text-sm text-gray-600 mb-4">AI-powered campaign planning</p>
            <button className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
              Plan Strategy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Campaigns Component
const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await apiService.getCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error('Failed to fetch campaigns:', error);
        setCampaigns(mockData.projects); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campaigns</h2>
          <p className="text-gray-600">Manage and monitor your advertising campaigns</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors flex items-center space-x-2 hover:scale-105 transform duration-200">
          <PlusIcon className="w-5 h-5" />
          <span>New Campaign</span>
        </button>
      </div>
      
      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Campaigns</h3>
          <p className="text-3xl font-bold text-blue-600">{campaigns.length}</p>
          <p className="text-sm text-gray-600 mt-1">{campaigns.filter(c => c.status === 'active').length} active, {campaigns.filter(c => c.status !== 'active').length} completed</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Budget</h3>
          {/* <p className="text-3xl font-bold text-purple-600">${campaigns.reduce((sum, c) => sum + (c.budget || 0), 0).toLocaleString()}</p> */}
          <p className="text-3xl font-bold text-purple-600">$1,240,748</p>
          <p className="text-sm text-gray-600 mt-1">Across all campaigns</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Avg. Performance</h3>
          <p className="text-3xl font-bold text-green-600">{Math.round(campaigns.reduce((sum, c) => sum + (c.performance || 0), 0) / campaigns.length) || 0}%</p>
          <p className="text-sm text-gray-600 mt-1">Above industry average</p>
        </div>
      </div>
      
      {/* Campaigns List */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Campaigns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-200">
              <ProjectCard project={campaign} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Campaign Performance Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Campaign Performance Trends" type="line" />
        <Chart title="Audience Engagement" type="doughnut" />
      </div>
    </div>
  );
};

// NEW MARKETPLACE COMPONENT
const Marketplace = ({ setActiveSection }) => {
  const [items, setItems] = useState([]);
  const [stats, setStats] = useState(null);
  const [categories, setCategories] = useState({ item_types: [], categories: [], pricing_types: [] });
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [purchaseModal, setPurchaseModal] = useState({ isOpen: false, item: null });
  const [purchaseLoading, setPurchaseLoading] = useState(false);

  useEffect(() => {
    const fetchMarketplaceData = async () => {
      setLoading(true);
      try {
        const [itemsData, statsData, categoriesData] = await Promise.all([
          marketplaceAPI.getItems(filters),
          marketplaceAPI.getStats(),
          marketplaceAPI.getCategories()
        ]);
        
        setItems(itemsData.items || []);
        setStats(statsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to fetch marketplace data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketplaceData();
  }, [filters]);

  const handleSearch = (searchQuery) => {
    setFilters({ ...filters, search_query: searchQuery });
  };

  const handlePurchase = (item) => {
    setPurchaseModal({ isOpen: true, item });
  };

  const confirmPurchase = async (item) => {
    setPurchaseLoading(true);
    try {
      await marketplaceAPI.purchaseItem(item.id);
      setPurchaseModal({ isOpen: false, item: null });
      // Show success message
      alert(`Successfully ${item.price === 0 ? 'downloaded' : 'purchased'} "${item.title}"!`);
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Purchase failed. Please try again.');
    } finally {
      setPurchaseLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-80 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Marketplace</h2>
          <p className="text-gray-600">Discover and purchase marketing templates, workflows, and assets</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setActiveSection('seller-dashboard')}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center space-x-2"
          >
            <UploadIcon className="w-5 h-5" />
            <span>Become a Seller</span>
          </button>
        </div>
      </div>
      
      {/* Marketplace Stats */}
      <MarketplaceStats stats={stats} />
      
      {/* Search and Filters */}
      <MarketplaceFilters 
        filters={filters}
        onFiltersChange={setFilters}
        categories={categories}
        onSearch={handleSearch}
      />
      
      {/* Featured Items */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.filter(item => item.featured).slice(0, 4).map((item) => (
            <MarketplaceItemCard 
              key={item.id} 
              item={item} 
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      </div>
      
      {/* All Items */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          All Items ({items.length} results)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <MarketplaceItemCard 
              key={item.id} 
              item={item} 
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      </div>
      
      {/* Purchase Modal */}
      <PurchaseModal
        item={purchaseModal.item}
        isOpen={purchaseModal.isOpen}
        onClose={() => setPurchaseModal({ isOpen: false, item: null })}
        onConfirm={confirmPurchase}
        loading={purchaseLoading}
      />
    </div>
  );
};

// SELLER DASHBOARD COMPONENT
const SellerDashboard = () => {
  const [sellerProfile, setSellerProfile] = useState(null);
  const [sellerStats, setSellerStats] = useState(null);
  const [myItems, setMyItems] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [categories, setCategories] = useState({ item_types: [], categories: [], pricing_types: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellerData = async () => {
      setLoading(true);
      try {
        const categoriesData = await marketplaceAPI.getCategories();
        setCategories(categoriesData);
        
        // Mock seller data for now
        setSellerProfile({
          business_name: "Marketing Pro Studio",
          description: "Professional marketing templates and automation workflows",
          total_sales: 156,
          average_rating: 4.8
        });
        
        setSellerStats({
          total_items: 12,
          total_sales: 156,
          total_revenue: 2847.50,
          average_rating: 4.8
        });
        
        setMyItems([
          {
            id: "my_item_1",
            title: "Social Media Campaign Template",
            description: "Complete social media campaign template for fashion brands",
            status: "published",
            pricing_type: "one_time",
            price: 49.99,
            total_sales: 23,
            total_revenue: 1149.77
          }
        ]);
        
      } catch (error) {
        console.error('Failed to fetch seller data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSellerData();
  }, []);

  const handleCreateProfile = async (profileData) => {
    try {
      // Mock profile creation
      setSellerProfile({
        ...profileData,
        total_sales: 0,
        average_rating: 0
      });
      alert('Seller profile created successfully!');
    } catch (error) {
      console.error('Failed to create seller profile:', error);
      alert('Failed to create seller profile. Please try again.');
    }
  };

  const handleUploadItem = async (itemData) => {
    try {
      // Mock item upload
      const newItem = {
        id: `item_${Date.now()}`,
        ...itemData,
        status: "pending_review",
        total_sales: 0,
        total_revenue: 0
      };
      
      setMyItems([newItem, ...myItems]);
      setShowUploadForm(false);
      alert('Item uploaded successfully! It will be reviewed and published soon.');
    } catch (error) {
      console.error('Failed to upload item:', error);
      alert('Failed to upload item. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!sellerProfile) {
    return (
      <div className="space-y-6 fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Become a Seller</h2>
            <p className="text-gray-600">Start selling your marketing expertise on MARKOS</p>
          </div>
        </div>
        <SellerProfileSetup onComplete={handleCreateProfile} />
      </div>
    );
  }

  if (showUploadForm) {
    return (
      <div className="space-y-6 fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Upload New Item</h2>
            <p className="text-gray-600">Share your marketing expertise with the MARKOS community</p>
          </div>
        </div>
        <UploadItemForm 
          onSubmit={handleUploadItem}
          onCancel={() => setShowUploadForm(false)}
          categories={categories}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Seller Dashboard</h2>
          <p className="text-gray-600">Manage your marketplace items and track performance</p>
        </div>
        <button 
          onClick={() => setShowUploadForm(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center space-x-2"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Upload New Item</span>
        </button>
      </div>
      
      {/* Seller Stats */}
      <SellerStats stats={sellerStats} />
      
      {/* My Items */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">My Items</h3>
        <MyItemsList 
          items={myItems}
          onEdit={(item) => console.log('Edit item:', item)}
          onDelete={(item) => console.log('Delete item:', item)}
        />
      </div>
    </div>
  );
};

// Analytics Component (unchanged but with loading states)
const Analytics = () => {
  return (
    <div className="space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
          <p className="text-gray-600">Deep insights and performance metrics</p>
        </div>
        <div className="flex space-x-3">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200">
            Export Report
          </button>
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Impressions</h3>
          <p className="text-2xl font-bold text-gray-900">2.4M</p>
          <p className="text-sm text-green-600 mt-1">↗ +8.2% vs last month</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Click-through Rate</h3>
          <p className="text-2xl font-bold text-gray-900">3.8%</p>
          <p className="text-sm text-green-600 mt-1">↗ +0.4% vs last month</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Conversion Rate</h3>
          <p className="text-2xl font-bold text-gray-900">2.1%</p>
          <p className="text-sm text-red-600 mt-1">↘ -0.2% vs last month</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-sm font-medium text-gray-600 mb-2">ROI</h3>
          <p className="text-2xl font-bold text-gray-900">4.2x</p>
          <p className="text-sm text-green-600 mt-1">↗ +0.3x vs last month</p>
        </div>
      </div>
      
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Performance Over Time" type="line" />
        <Chart title="Audience Demographics" type="pie" />
        <Chart title="Channel Performance" type="bar" />
        <Chart title="Engagement Metrics" type="area" />
      </div>
    </div>
  );
};

// Team Component (unchanged)
const Team = () => {
  return (
    <div className="space-y-6 fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Team</h2>
          <p className="text-gray-600">Manage your team and collaborations</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center space-x-2 hover:scale-105 transform duration-200">
          <PlusIcon className="w-5 h-5" />
          <span>Invite Member</span>
        </button>
      </div>
      
      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Members</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-600 mt-1">4 online now</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Projects</h3>
          <p className="text-3xl font-bold text-purple-600">8</p>
          <p className="text-sm text-gray-600 mt-1">6 in progress</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform hover:scale-105 transition-all duration-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Completion Rate</h3>
          <p className="text-3xl font-bold text-green-600">92%</p>
          <p className="text-sm text-gray-600 mt-1">+3% this month</p>
        </div>
      </div>
      
      {/* Team Members Grid */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockData.teamMembers.map((member, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-200">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Settings Component (unchanged)
const Settings = () => {
  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>
      
      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Sarah Johnson" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="sarah.johnson@wpp.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Creative Director</option>
                <option>Campaign Manager</option>
                <option>AI Specialist</option>
                <option>Data Analyst</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Email Notifications</span>
              <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Desktop Notifications</span>
              <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">AI Suggestions</span>
              <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  // Test the backend connection on component mount
  useEffect(() => {
    const testBackendConnection = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log('Backend connected:', response.data);
      } catch (error) {
        console.log('Backend connection failed, using mock data');
      }
    };

    testBackendConnection();
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'ai-studio':
        return <AIStudio />;
      case 'campaigns':
        return <Campaigns />;
      case 'marketplace':
        return <Marketplace setActiveSection={setActiveSection} />;
      case 'seller-dashboard':
        return <SellerDashboard />;
      case 'analytics':
        return <Analytics />;
      case 'team':
        return <Team />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;