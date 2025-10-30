import React, { useState } from 'react';

// Icons and SVG components
export const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const BellIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export const UserIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const DashboardIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

export const BrainIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export const CampaignIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16M11 9h2M9 13h6" />
  </svg>
);

export const AnalyticsIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export const TeamIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const SettingsIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const PlusIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

export const EyeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export const UploadIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

export const MarketplaceIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v6a4 4 0 108 0v-6M8 11h8" />
  </svg>
);

// Header Component
export const Header = ({ activeSection, setActiveSection }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <EyeIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MARKOS</h1>
              <p className="text-xs text-gray-500">The AI Marketing Operating System</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => setActiveSection('dashboard')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === 'dashboard' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveSection('ai-studio')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === 'ai-studio' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              AI Studio
            </button>
            <button
              onClick={() => setActiveSection('campaigns')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === 'campaigns' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Campaigns
            </button>
            <button
              onClick={() => setActiveSection('marketplace')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === 'marketplace' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Marketplace
            </button>
            <button
              onClick={() => setActiveSection('analytics')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === 'analytics' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Analytics
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects, campaigns..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <BellIcon className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
          
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Sarah Johnson</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Team</a>
                <hr className="my-2" />
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'ai-studio', label: 'AI Studio', icon: BrainIcon },
    { id: 'campaigns', label: 'Campaigns', icon: CampaignIcon },
    { id: 'marketplace', label: 'Marketplace', icon: MarketplaceIcon },
    { id: 'analytics', label: 'Analytics', icon: AnalyticsIcon },
    { id: 'team', label: 'Team', icon: TeamIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <aside className="bg-gray-50 border-r border-gray-200 w-64 min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-blue-700 bg-white rounded-md hover:bg-blue-50 transition-colors">
              <PlusIcon className="w-4 h-4" />
              <span>New Campaign</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-purple-700 bg-white rounded-md hover:bg-purple-50 transition-colors">
              <BrainIcon className="w-4 h-4" />
              <span>AI Generator</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

// Statistics Card Component
export const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        <p className={`text-sm mt-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? '↗' : '↘'} {change}
        </p>
      </div>
      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
  </div>
);

// Chart Component (Mock)
export const Chart = ({ title, data, type = 'line' }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <AnalyticsIcon className="w-8 h-8 text-white" />
        </div>
        <p className="text-gray-600">Interactive {type} chart</p>
        <p className="text-sm text-gray-500 mt-1">Real-time data visualization</p>
      </div>
    </div>
  </div>
);

// Project Card Component
export const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        project.status === 'Active' 
          ? 'bg-green-100 text-green-800' 
          : project.status === 'Paused'
          ? 'bg-yellow-100 text-yellow-800'
          : 'bg-gray-100 text-gray-800'
      }`}>
        {project.status}
      </span>
    </div>
    
    <p className="text-gray-600 mb-4">{project.description}</p>
    
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p className="text-sm text-gray-500">Performance</p>
        <p className="text-lg font-semibold text-gray-900">{project.performance}%</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Budget Used</p>
        <p className="text-lg font-semibold text-gray-900">${project.budget}</p>
      </div>
    </div>
    
    <div className="flex items-center space-x-3">
      <div className="flex -space-x-2">
        {project.team.map((member, index) => (
          <div key={index} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs font-medium">{member.initials}</span>
          </div>
        ))}
      </div>
      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
        View Details →
      </button>
    </div>
  </div>
);

// AI Tool Card Component
export const AIToolCard = ({ tool }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:scale-105">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
        <BrainIcon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
        <p className="text-sm text-gray-600">{tool.category}</p>
      </div>
    </div>
    
    <p className="text-gray-600 mb-4">{tool.description}</p>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Usage:</span>
        <span className="text-sm font-medium text-gray-900">{tool.usage}</span>
      </div>
      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
        Launch
      </button>
    </div>
  </div>
);

// Campaign Card Component
export const CampaignCard = ({ campaign }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        campaign.status === 'Running' 
          ? 'bg-green-100 text-green-800' 
          : campaign.status === 'Paused'
          ? 'bg-yellow-100 text-yellow-800'
          : 'bg-blue-100 text-blue-800'
      }`}>
        {campaign.status}
      </span>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p className="text-sm text-gray-500">Impressions</p>
        <p className="text-lg font-semibold text-gray-900">{campaign.impressions}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">CTR</p>
        <p className="text-lg font-semibold text-gray-900">{campaign.ctr}%</p>
      </div>
    </div>
    
    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" 
        style={{ width: `${campaign.progress}%` }}
      ></div>
    </div>
    
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">Progress: {campaign.progress}%</span>
      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
        Manage →
      </button>
    </div>
  </div>
);

// Team Member Card Component
export const TeamMemberCard = ({ member }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white font-medium">{member.initials}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Projects</span>
        <span className="text-sm font-medium text-gray-900">{member.projects}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Completion Rate</span>
        <span className="text-sm font-medium text-gray-900">{member.completionRate}%</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Status</span>
        <span className={`text-sm font-medium ${
          member.status === 'Online' ? 'text-green-600' : 'text-gray-600'
        }`}>
          {member.status}
        </span>
      </div>
    </div>
  </div>
);

// Mock Data
export const mockData = {
  stats: [
    { title: 'Active Campaigns', value: '24', change: '+12%', icon: CampaignIcon, trend: 'up' },
    { title: 'Total Impressions', value: '2.4M', change: '+8%', icon: EyeIcon, trend: 'up' },
    { title: 'AI Generations', value: '156', change: '+24%', icon: BrainIcon, trend: 'up' },
    { title: 'Team Members', value: '12', change: '+2', icon: TeamIcon, trend: 'up' },
  ],
  
  projects: [
    {
      name: 'Nike Summer Campaign',
      description: 'Multi-channel summer campaign with AI-generated content',
      status: 'Active',
      performance: 87,
      budget: '24,500',
      team: [
        { initials: 'SJ' },
        { initials: 'MK' },
        { initials: 'AB' }
      ]
    },
    {
      name: 'Coca-Cola Holiday Special',
      description: 'Holiday-themed social media campaign',
      status: 'Paused',
      performance: 72,
      budget: '18,200',
      team: [
        { initials: 'RD' },
        { initials: 'LP' }
      ]
    },
    {
      name: 'BMW Digital Experience',
      description: 'Interactive digital showroom experience',
      status: 'Active',
      performance: 94,
      budget: '45,800',
      team: [
        { initials: 'TH' },
        { initials: 'NK' },
        { initials: 'JW' },
        { initials: 'SM' }
      ]
    }
  ],
  
  aiTools: [
    {
      name: 'Content Generator',
      category: 'Text Generation',
      description: 'AI-powered content creation for ads, social media, and campaigns',
      usage: '245 this month'
    },
    {
      name: 'Image Creator',
      category: 'Visual Design',
      description: 'Generate stunning visuals and artwork for campaigns',
      usage: '89 this month'
    },
    {
      name: 'Video Editor',
      category: 'Video Production',
      description: 'Automated video editing and enhancement tools',
      usage: '56 this month'
    },
    {
      name: 'Voice Synthesizer',
      category: 'Audio Production',
      description: 'Create natural-sounding voiceovers and audio content',
      usage: '32 this month'
    }
  ],
  
  campaigns: [
    {
      name: 'Spring Fashion Launch',
      status: 'Running',
      impressions: '1.2M',
      ctr: '3.4',
      progress: 78
    },
    {
      name: 'Tech Product Demo',
      status: 'Paused',
      impressions: '890K',
      ctr: '2.8',
      progress: 45
    },
    {
      name: 'Holiday Shopping',
      status: 'Planning',
      impressions: '0',
      ctr: '0',
      progress: 15
    }
  ],
  
  teamMembers: [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      initials: 'SJ',
      projects: 8,
      completionRate: 94,
      status: 'Online'
    },
    {
      name: 'Michael Chen',
      role: 'AI Specialist',
      initials: 'MC',
      projects: 12,
      completionRate: 89,
      status: 'Online'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Campaign Manager',
      initials: 'ER',
      projects: 6,
      completionRate: 96,
      status: 'Away'
    },
    {
      name: 'David Kim',
      role: 'Data Analyst',
      initials: 'DK',
      projects: 4,
      completionRate: 91,
      status: 'Online'
    }
  ]
};