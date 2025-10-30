// Comprehensive Marketplace Dummy Data
// This file contains realistic marketplace data that matches the expected schema
// and provides sufficient variety for testing all UI components and features

export const marketplaceData = {
  // Marketplace Statistics
  stats: {
    total_items: 247,
    total_sellers: 89,
    total_transactions: 1834,
    average_item_price: 24.99
  },

  // Categories and Filter Options
  categories: {
    item_types: [
      { value: 'campaign_template', label: 'Campaign Template' },
      { value: 'workflow_recipe', label: 'Workflow Recipe' },
      { value: 'creative_asset', label: 'Creative Asset' },
      { value: 'analytics_dashboard', label: 'Analytics Dashboard' }
    ],
    pricing_types: [
      { value: 'free', label: 'Free' },
      { value: 'paid', label: 'Paid' },
      { value: 'subscription', label: 'Subscription' }
    ],
    categories: [
      { value: 'social_media', label: 'Social Media' },
      { value: 'email_marketing', label: 'Email Marketing' },
      { value: 'content_creation', label: 'Content Creation' },
      { value: 'analytics', label: 'Analytics' },
      { value: 'automation', label: 'Automation' },
      { value: 'design', label: 'Design' }
    ]
  },

  // Comprehensive Marketplace Items
  items: [
    // Featured Campaign Templates
    {
      id: 'ct_001',
      title: 'Social Media Blitz Campaign',
      description: 'Complete social media campaign template with automated posting schedules, engagement strategies, and performance tracking. Perfect for product launches and brand awareness.',
      price: 49.99,
      original_price: 79.99,
      pricing_type: 'paid',
      item_type: 'campaign_template',
      seller_name: 'Digital Marketing Pro',
      seller_id: 'seller_001',
      average_rating: 4.8,
      total_sales: 342,
      featured: true,
      preview_images: [
        'https://picsum.photos/400/300?random=1',
        'https://picsum.photos/400/300?random=2',
        'https://picsum.photos/400/300?random=3'
      ],
      tags: ['social-media', 'automation', 'engagement', 'analytics'],
      category: 'social_media',
      created_at: '2024-01-15T10:30:00Z',
      updated_at: '2024-01-20T14:45:00Z',
      file_size: '2.4 MB',
      downloads: 342,
      compatibility: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
      requirements: ['Basic social media knowledge', 'Content calendar access']
    },
    {
      id: 'ct_002',
      title: 'E-commerce Holiday Campaign',
      description: 'Seasonal e-commerce campaign template designed for maximum conversions during holiday periods. Includes email sequences, social ads, and retargeting strategies.',
      price: 0,
      original_price: null,
      pricing_type: 'free',
      item_type: 'campaign_template',
      seller_name: 'E-comm Experts',
      seller_id: 'seller_002',
      average_rating: 4.6,
      total_sales: 1247,
      featured: true,
      preview_images: [
        'https://picsum.photos/400/300?random=4',
        'https://picsum.photos/400/300?random=5'
      ],
      tags: ['ecommerce', 'holiday', 'conversion', 'email-marketing'],
      category: 'email_marketing',
      created_at: '2024-01-10T09:15:00Z',
      updated_at: '2024-01-18T16:20:00Z',
      file_size: '1.8 MB',
      downloads: 1247,
      compatibility: ['Shopify', 'WooCommerce', 'Magento'],
      requirements: ['E-commerce platform', 'Email marketing tool']
    },
    {
      id: 'wr_001',
      title: 'AI Content Generation Workflow',
      description: 'Automated workflow for generating high-quality content using AI tools. Streamlines the process from ideation to publication with quality checks and optimization.',
      price: 29.99,
      original_price: 39.99,
      pricing_type: 'paid',
      item_type: 'workflow_recipe',
      seller_name: 'AI Automation Hub',
      seller_id: 'seller_003',
      average_rating: 4.9,
      total_sales: 189,
      featured: true,
      preview_images: [
        'https://picsum.photos/400/300?random=6',
        'https://picsum.photos/400/300?random=7',
        'https://picsum.photos/400/300?random=8'
      ],
      tags: ['ai', 'content-creation', 'automation', 'workflow'],
      category: 'content_creation',
      created_at: '2024-01-12T11:45:00Z',
      updated_at: '2024-01-22T13:30:00Z',
      file_size: '3.1 MB',
      downloads: 189,
      compatibility: ['Zapier', 'Make.com', 'Microsoft Power Automate'],
      requirements: ['AI content tool subscription', 'Workflow automation platform']
    },
    {
      id: 'ca_001',
      title: 'Premium Brand Asset Pack',
      description: 'Professional brand asset collection including logos, color palettes, typography guides, and social media templates. Perfect for consistent brand identity.',
      price: 89.99,
      original_price: 129.99,
      pricing_type: 'paid',
      item_type: 'creative_asset',
      seller_name: 'Brand Studio Pro',
      seller_id: 'seller_004',
      average_rating: 4.7,
      total_sales: 156,
      featured: true,
      preview_images: [
        'https://picsum.photos/400/300?random=9',
        'https://picsum.photos/400/300?random=10'
      ],
      tags: ['branding', 'design', 'assets', 'templates'],
      category: 'design',
      created_at: '2024-01-08T14:20:00Z',
      updated_at: '2024-01-25T10:15:00Z',
      file_size: '45.2 MB',
      downloads: 156,
      compatibility: ['Adobe Creative Suite', 'Figma', 'Canva Pro'],
      requirements: ['Design software', 'Basic design knowledge']
    },

    // Additional Campaign Templates
    {
      id: 'ct_003',
      title: 'B2B Lead Generation Campaign',
      description: 'Comprehensive B2B lead generation campaign with LinkedIn strategies, email outreach sequences, and conversion tracking. Proven to increase qualified leads by 300%.',
      price: 79.99,
      original_price: 99.99,
      pricing_type: 'paid',
      item_type: 'campaign_template',
      seller_name: 'B2B Growth Hacker',
      seller_id: 'seller_005',
      average_rating: 4.5,
      total_sales: 98,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=11',
        'https://picsum.photos/400/300?random=12'
      ],
      tags: ['b2b', 'lead-generation', 'linkedin', 'email-outreach'],
      category: 'email_marketing',
      created_at: '2024-01-14T16:30:00Z',
      updated_at: '2024-01-21T12:45:00Z',
      file_size: '2.1 MB',
      downloads: 98,
      compatibility: ['LinkedIn Sales Navigator', 'HubSpot', 'Salesforce'],
      requirements: ['CRM system', 'LinkedIn Premium account']
    },
    {
      id: 'ct_004',
      title: 'Influencer Collaboration Template',
      description: 'Complete framework for managing influencer partnerships including contracts, content guidelines, performance metrics, and payment structures.',
      price: 34.99,
      original_price: null,
      pricing_type: 'paid',
      item_type: 'campaign_template',
      seller_name: 'Influencer Marketing Co',
      seller_id: 'seller_006',
      average_rating: 4.4,
      total_sales: 267,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=13'
      ],
      tags: ['influencer', 'collaboration', 'contracts', 'social-media'],
      category: 'social_media',
      created_at: '2024-01-09T13:15:00Z',
      updated_at: '2024-01-19T15:30:00Z',
      file_size: '1.5 MB',
      downloads: 267,
      compatibility: ['Google Docs', 'Microsoft Word', 'Notion'],
      requirements: ['Document editing software', 'Legal review recommended']
    },
    {
      id: 'ct_005',
      title: 'Video Marketing Masterclass Campaign',
      description: 'End-to-end video marketing campaign template with storyboard templates, production checklists, and distribution strategies across multiple platforms.',
      price: 0,
      original_price: null,
      pricing_type: 'free',
      item_type: 'campaign_template',
      seller_name: 'Video Pro Academy',
      seller_id: 'seller_007',
      average_rating: 4.3,
      total_sales: 892,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=14',
        'https://picsum.photos/400/300?random=15',
        'https://picsum.photos/400/300?random=16'
      ],
      tags: ['video', 'marketing', 'storyboard', 'production'],
      category: 'content_creation',
      created_at: '2024-01-05T10:00:00Z',
      updated_at: '2024-01-23T14:20:00Z',
      file_size: '3.7 MB',
      downloads: 892,
      compatibility: ['YouTube', 'Vimeo', 'TikTok', 'Instagram Reels'],
      requirements: ['Video editing software', 'Basic video production knowledge']
    },

    // Workflow Recipes
    {
      id: 'wr_002',
      title: 'Customer Onboarding Automation',
      description: 'Streamlined customer onboarding workflow that reduces manual work by 80%. Includes welcome sequences, product tutorials, and feedback collection.',
      price: 45.99,
      original_price: 59.99,
      pricing_type: 'paid',
      item_type: 'workflow_recipe',
      seller_name: 'Automation Masters',
      seller_id: 'seller_008',
      average_rating: 4.6,
      total_sales: 134,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=17',
        'https://picsum.photos/400/300?random=18'
      ],
      tags: ['onboarding', 'automation', 'customer-success', 'workflow'],
      category: 'automation',
      created_at: '2024-01-11T12:30:00Z',
      updated_at: '2024-01-24T11:15:00Z',
      file_size: '2.8 MB',
      downloads: 134,
      compatibility: ['Zapier', 'Integromat', 'Microsoft Power Automate'],
      requirements: ['CRM integration', 'Email automation tool']
    },
    {
      id: 'wr_003',
      title: 'Social Media Scheduling Workflow',
      description: 'Automated social media posting workflow with content curation, optimal timing, and cross-platform publishing. Saves 15+ hours per week.',
      price: 19.99,
      original_price: 29.99,
      pricing_type: 'paid',
      item_type: 'workflow_recipe',
      seller_name: 'Social Automation Pro',
      seller_id: 'seller_009',
      average_rating: 4.2,
      total_sales: 445,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=19'
      ],
      tags: ['social-media', 'scheduling', 'automation', 'content-curation'],
      category: 'social_media',
      created_at: '2024-01-07T15:45:00Z',
      updated_at: '2024-01-20T09:30:00Z',
      file_size: '1.9 MB',
      downloads: 445,
      compatibility: ['Buffer', 'Hootsuite', 'Later', 'Sprout Social'],
      requirements: ['Social media management tool', 'Content library']
    },
    {
      id: 'wr_004',
      title: 'Lead Scoring & Nurturing System',
      description: 'Advanced lead scoring workflow that automatically segments prospects and triggers personalized nurturing sequences based on behavior and engagement.',
      price: 0,
      original_price: null,
      pricing_type: 'free',
      item_type: 'workflow_recipe',
      seller_name: 'Marketing Automation Hub',
      seller_id: 'seller_010',
      average_rating: 4.7,
      total_sales: 623,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=20',
        'https://picsum.photos/400/300?random=21'
      ],
      tags: ['lead-scoring', 'nurturing', 'automation', 'segmentation'],
      category: 'automation',
      created_at: '2024-01-06T11:20:00Z',
      updated_at: '2024-01-22T16:45:00Z',
      file_size: '2.3 MB',
      downloads: 623,
      compatibility: ['HubSpot', 'Marketo', 'Pardot', 'ActiveCampaign'],
      requirements: ['Marketing automation platform', 'CRM integration']
    },

    // Creative Assets
    {
      id: 'ca_002',
      title: 'Social Media Template Bundle',
      description: 'Collection of 50+ professionally designed social media templates for Instagram, Facebook, and LinkedIn. Includes stories, posts, and carousel designs.',
      price: 24.99,
      original_price: 39.99,
      pricing_type: 'paid',
      item_type: 'creative_asset',
      seller_name: 'Design Studio Plus',
      seller_id: 'seller_011',
      average_rating: 4.5,
      total_sales: 378,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=22',
        'https://picsum.photos/400/300?random=23',
        'https://picsum.photos/400/300?random=24'
      ],
      tags: ['templates', 'social-media', 'design', 'instagram'],
      category: 'design',
      created_at: '2024-01-13T14:10:00Z',
      updated_at: '2024-01-25T12:30:00Z',
      file_size: '28.5 MB',
      downloads: 378,
      compatibility: ['Canva', 'Adobe Photoshop', 'Figma'],
      requirements: ['Design software', 'Basic design skills']
    },
    {
      id: 'ca_003',
      title: 'Email Newsletter Templates',
      description: 'Professional email newsletter templates with responsive design. Includes 20+ layouts for different industries and purposes.',
      price: 15.99,
      original_price: null,
      pricing_type: 'paid',
      item_type: 'creative_asset',
      seller_name: 'Email Design Co',
      seller_id: 'seller_012',
      average_rating: 4.3,
      total_sales: 234,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=25'
      ],
      tags: ['email', 'newsletter', 'templates', 'responsive'],
      category: 'email_marketing',
      created_at: '2024-01-16T10:45:00Z',
      updated_at: '2024-01-21T14:15:00Z',
      file_size: '12.3 MB',
      downloads: 234,
      compatibility: ['Mailchimp', 'Constant Contact', 'Campaign Monitor'],
      requirements: ['Email marketing platform', 'HTML knowledge helpful']
    },
    {
      id: 'ca_004',
      title: 'Video Intro & Outro Pack',
      description: 'Professional video intros and outros with customizable text and branding. Perfect for YouTube channels, courses, and promotional videos.',
      price: 0,
      original_price: null,
      pricing_type: 'free',
      item_type: 'creative_asset',
      seller_name: 'Video Assets Pro',
      seller_id: 'seller_013',
      average_rating: 4.1,
      total_sales: 756,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=26',
        'https://picsum.photos/400/300?random=27'
      ],
      tags: ['video', 'intro', 'outro', 'youtube'],
      category: 'content_creation',
      created_at: '2024-01-04T16:30:00Z',
      updated_at: '2024-01-18T13:45:00Z',
      file_size: '156.7 MB',
      downloads: 756,
      compatibility: ['Adobe After Effects', 'Final Cut Pro', 'DaVinci Resolve'],
      requirements: ['Video editing software', 'Motion graphics knowledge']
    },

    // Analytics Dashboards
    {
      id: 'ad_001',
      title: 'Marketing ROI Dashboard',
      description: 'Comprehensive marketing ROI dashboard with real-time data visualization, campaign performance tracking, and automated reporting features.',
      price: 59.99,
      original_price: 89.99,
      pricing_type: 'paid',
      item_type: 'analytics_dashboard',
      seller_name: 'Data Insights Pro',
      seller_id: 'seller_014',
      average_rating: 4.8,
      total_sales: 87,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=28',
        'https://picsum.photos/400/300?random=29',
        'https://picsum.photos/400/300?random=30'
      ],
      tags: ['analytics', 'roi', 'dashboard', 'reporting'],
      category: 'analytics',
      created_at: '2024-01-17T13:20:00Z',
      updated_at: '2024-01-26T15:10:00Z',
      file_size: '4.2 MB',
      downloads: 87,
      compatibility: ['Google Data Studio', 'Tableau', 'Power BI'],
      requirements: ['Analytics platform', 'Data connection setup']
    },
    {
      id: 'ad_002',
      title: 'Social Media Analytics Suite',
      description: 'Complete social media analytics dashboard tracking engagement, reach, follower growth, and content performance across all major platforms.',
      price: 39.99,
      original_price: 54.99,
      pricing_type: 'paid',
      item_type: 'analytics_dashboard',
      seller_name: 'Social Analytics Hub',
      seller_id: 'seller_015',
      average_rating: 4.4,
      total_sales: 156,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=31'
      ],
      tags: ['social-media', 'analytics', 'engagement', 'reporting'],
      category: 'analytics',
      created_at: '2024-01-19T11:15:00Z',
      updated_at: '2024-01-24T14:30:00Z',
      file_size: '3.8 MB',
      downloads: 156,
      compatibility: ['Google Analytics', 'Facebook Analytics', 'Instagram Insights'],
      requirements: ['Social media API access', 'Analytics tools']
    },
    {
      id: 'ad_003',
      title: 'E-commerce Performance Tracker',
      description: 'Advanced e-commerce dashboard monitoring sales, inventory, customer behavior, and conversion funnels with predictive analytics.',
      price: 0,
      original_price: null,
      pricing_type: 'free',
      item_type: 'analytics_dashboard',
      seller_name: 'E-commerce Analytics',
      seller_id: 'seller_016',
      average_rating: 4.2,
      total_sales: 445,
      featured: false,
      preview_images: [
        'https://picsum.photos/400/300?random=32',
        'https://picsum.photos/400/300?random=33'
      ],
      tags: ['ecommerce', 'sales', 'analytics', 'conversion'],
      category: 'analytics',
      created_at: '2024-01-03T09:45:00Z',
      updated_at: '2024-01-20T16:20:00Z',
      file_size: '5.1 MB',
      downloads: 445,
      compatibility: ['Shopify', 'WooCommerce', 'Google Analytics'],
      requirements: ['E-commerce platform', 'Google Analytics setup']
    },

    // Additional items for pagination testing
    {
      id: 'ct_006',
      title: 'Podcast Launch Campaign',
      description: 'Complete podcast marketing campaign including pre-launch buzz, episode promotion strategies, and audience growth tactics.',
      price: 42.99,
      original_price: null,
      pricing_type: 'paid',
      item_type: 'campaign_template',
      seller_name: 'Podcast Marketing Pro',
      seller_id: 'seller_017',
      average_rating: 4.6,
      total_sales: 123,
      featured: false,
      preview_images: ['https://picsum.photos/400/300?random=34'],
      tags: ['podcast', 'launch', 'marketing', 'audience-growth'],
      category: 'content_creation',
      created_at: '2024-01-18T12:00:00Z',
      updated_at: '2024-01-25T10:30:00Z',
      file_size: '2.6 MB',
      downloads: 123,
      compatibility: ['Spotify for Podcasters', 'Apple Podcasts', 'Google Podcasts'],
      requirements: ['Podcast hosting platform', 'Audio editing software']
    },
    {
      id: 'wr_005',
      title: 'Content Approval Workflow',
      description: 'Streamlined content approval process with automated routing, version control, and stakeholder notifications.',
      price: 27.99,
      original_price: 35.99,
      pricing_type: 'paid',
      item_type: 'workflow_recipe',
      seller_name: 'Workflow Optimization',
      seller_id: 'seller_018',
      average_rating: 4.3,
      total_sales: 89,
      featured: false,
      preview_images: ['https://picsum.photos/400/300?random=35'],
      tags: ['content', 'approval', 'workflow', 'collaboration'],
      category: 'automation',
      created_at: '2024-01-21T14:45:00Z',
      updated_at: '2024-01-26T11:20:00Z',
      file_size: '1.7 MB',
      downloads: 89,
      compatibility: ['Monday.com', 'Asana', 'Trello'],
      requirements: ['Project management tool', 'Team collaboration platform']
    }
  ],

  // Seller profiles for reference
  sellers: [
    {
      id: 'seller_001',
      name: 'Digital Marketing Pro',
      avatar: 'https://picsum.photos/100/100?random=101',
      rating: 4.8,
      total_sales: 1247,
      items_count: 12,
      joined_date: '2023-06-15',
      verified: true,
      specialties: ['Social Media', 'Campaign Strategy', 'Analytics']
    },
    {
      id: 'seller_002',
      name: 'E-comm Experts',
      avatar: 'https://picsum.photos/100/100?random=102',
      rating: 4.6,
      total_sales: 2134,
      items_count: 18,
      joined_date: '2023-03-22',
      verified: true,
      specialties: ['E-commerce', 'Conversion Optimization', 'Email Marketing']
    },
    {
      id: 'seller_003',
      name: 'AI Automation Hub',
      avatar: 'https://picsum.photos/100/100?random=103',
      rating: 4.9,
      total_sales: 567,
      items_count: 8,
      joined_date: '2023-09-10',
      verified: true,
      specialties: ['AI Tools', 'Automation', 'Workflow Design']
    }
    // Additional sellers can be added as needed
  ]
};

// Helper functions for data manipulation
export const getItemsByType = (type) => {
  return marketplaceData.items.filter(item => item.item_type === type);
};

export const getFeaturedItems = () => {
  return marketplaceData.items.filter(item => item.featured);
};

export const getItemsByPricing = (pricingType) => {
  return marketplaceData.items.filter(item => item.pricing_type === pricingType);
};

export const searchItems = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return marketplaceData.items.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    item.seller_name.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterItems = (filters) => {
  let filteredItems = [...marketplaceData.items];

  if (filters.item_type) {
    filteredItems = filteredItems.filter(item => item.item_type === filters.item_type);
  }

  if (filters.pricing_type) {
    filteredItems = filteredItems.filter(item => item.pricing_type === filters.pricing_type);
  }

  if (filters.category) {
    filteredItems = filteredItems.filter(item => item.category === filters.category);
  }

  if (filters.featured_only) {
    filteredItems = filteredItems.filter(item => item.featured);
  }

  if (filters.min_rating) {
    filteredItems = filteredItems.filter(item => item.average_rating >= filters.min_rating);
  }

  if (filters.max_price) {
    filteredItems = filteredItems.filter(item => 
      item.pricing_type === 'free' || item.price <= filters.max_price
    );
  }

  return filteredItems;
};

export const paginateItems = (items, page = 1, limit = 12) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    items: items.slice(startIndex, endIndex),
    total: items.length,
    page,
    limit,
    totalPages: Math.ceil(items.length / limit),
    hasNext: endIndex < items.length,
    hasPrev: page > 1
  };
};

// Mock API responses that match the expected format
export const mockMarketplaceAPI = {
  getItems: (filters = {}) => {
    let items = [...marketplaceData.items];
    
    // Apply filters
    if (Object.keys(filters).length > 0) {
      items = filterItems(filters);
    }
    
    // Apply search if query exists
    if (filters.search) {
      items = searchItems(filters.search);
    }
    
    // Apply pagination
    const page = parseInt(filters.page) || 1;
    const limit = parseInt(filters.limit) || 12;
    
    return paginateItems(items, page, limit);
  },

  getStats: () => {
    return marketplaceData.stats;
  },

  getCategories: () => {
    return marketplaceData.categories;
  },

  getItem: (id) => {
    return marketplaceData.items.find(item => item.id === id);
  },

  getSeller: (id) => {
    return marketplaceData.sellers.find(seller => seller.id === id);
  }
};

export default marketplaceData;