
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import {
  Layout,
  BarChart2,
  Users,
  DollarSign,
  ArrowUp,
  ArrowDown,
  Activity,
  Bell,
  Search,
  User
} from 'lucide-react';

// Simulated real-time data
const generateData = () => {
  return Array.from({ length: 7 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 1000),
    users: Math.floor(Math.random() * 500),
    revenue: Math.floor(Math.random() * 10000),
  }));
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 }
];

function Dashboard() {
  const [data, setData] = useState(generateData());
  const [notifications, setNotifications] = useState(3);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      increase: true,
      percentage: '12%',
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Revenue',
      value: '$45,234',
      increase: true,
      percentage: '8%',
      icon: <DollarSign className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      increase: false,
      percentage: '3%',
      icon: <Activity className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      increase: true,
      percentage: '2%',
      icon: <BarChart2 className="h-6 w-6 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Layout className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold">Analytics Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="ml-4 relative">
                <button className="relative p-2 rounded-full hover:bg-gray-100">
                  <Bell className="h-6 w-6 text-gray-600" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-white text-center">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>
              <div className="ml-4">
                <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
                  <User className="h-6 w-6 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                {stat.icon}
              </div>
              <div className="flex items-center">
                {stat.increase ? (
                  <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm ${stat.increase ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.percentage}
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last week</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Line Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Area Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">User Activity</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="users" stroke="#10B981" fill="#D1FAE5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Daily Performance</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Device Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;