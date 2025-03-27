import React, { useState, useRef , useEffect} from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Lock,
  Bell,
  Shield,
  Globe,
  Save,
  X
} from 'lucide-react';
import image from './Assets/default.jpg'

function UserProfile() {
  const fileInputRef = useRef(null);
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await fetch("http://localhost:5000/api/users/profile", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        setProfileData({
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          location: data.location || '',
          bio: data.bio || '',
          profileImage: image.profileImage || ''
        });
        setTempData({
          name: data.username,
          email: data.email,
          phone: data.phone || '',
          location: data.location || '',
          bio: data.bio || '',
          profileImage: image.profileImage || ''
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageClick = () => {
    if (isEditing) fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempData(prev => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  if (!profileData) return <p>Loading profile...</p>;


// import React, { useState, useRef } from 'react';
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Camera,
//   Lock,
//   Bell,
//   Shield,
//   Globe,
//   Save,
//   X
// } from 'lucide-react';

// function UserProfile() {
//   const fileInputRef = useRef(null);
//   const [profileData, setProfileData] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+1 (555) 123-4567',
//     location: 'New York, USA',
//     timezone: 'Eastern Time (ET)',
//     bio: 'Senior Data Analyst with 5+ years of experience in business intelligence and data visualization.',
//     profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     notifications: {
//       email: true,
//       push: true,
//       updates: false
//     }
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [tempData, setTempData] = useState(profileData);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTempData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageClick = () => {
//     if (isEditing) {
//       fileInputRef.current?.click();
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setTempData(prev => ({
//           ...prev,
//           profileImage: reader.result
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleNotificationChange = (key) => {
//     setTempData(prev => ({
//       ...prev,
//       notifications: {
//         ...prev.notifications,
//         [key]: !prev.notifications[key]
//       }
//     }));
//   };

//   const handleSave = () => {
//     setProfileData(tempData);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setTempData(profileData);
//     setIsEditing(false);
//   };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div 
                className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={handleImageClick}
              >
                
                <img
  src={isEditing ? tempData.profileImage || 'default-profile.png' : image || 'default-profile.png'}
  alt="Profile"
  className="w-full h-full object-cover"
/>

                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {isEditing && (
                  <div className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700">
                    <Camera className="h-4 w-4" />
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                  <p className="text-gray-600">{profileData.bio}</p>
                </div>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex space-x-3">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      name="name"
                      value={isEditing ? tempData.name : profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="email"
                      name="email"
                      value={isEditing ? tempData.email : profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="tel"
                      name="phone"
                      value={isEditing ? tempData.phone : profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      name="location"
                      value={isEditing ? tempData.location : profileData.location}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    rows="4"
                    value={isEditing ? tempData.bio : profileData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            {/* Security Settings */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Lock className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold">Security</h2>
              </div>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Two-Factor Authentication
                </button>
              </div>
            </div>

            {/* Notification Settings */}
            
            {/* Privacy Settings */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold">Privacy</h2>
              </div>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Privacy Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Data & Permissions
                </button>
              </div>
            </div>

            {/* Language & Region */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

// import React, { useState, useRef, useEffect } from 'react';
// import {
//   User,
//   Mail,
//   Lock,
//   Bell,
//   Shield,
//   Globe,
//   Save,
//   X
// } from 'lucide-react';

// function UserProfile() {
//   const fileInputRef = useRef(null);
//   const [profileData, setProfileData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [tempData, setTempData] = useState({});

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) return;

//         const response = await fetch("http://localhost:5000/api/users/profile", {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch profile');
//         }

//         const data = await response.json();
//         setProfileData(prev => ({
//           name: data.username,
//           email: data.email,
//           phone: data.phone || prev?.phone || '',
//           location: data.location || prev?.location || '',
//           bio: data.bio || prev?.bio || '',
//           profileImage: data.profileImage || prev?.profileImage || ''
//         }));
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTempData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSave = () => {
//     setProfileData(tempData);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setTempData(profileData);
//     setIsEditing(false);
//   };

//   if (!profileData.name) return <p>Loading profile...</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//           <div className="flex items-center space-x-6">
//             <div className="relative">
//               <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
//                 <img src={profileData.profileImage} alt="Profile" className="w-full h-full object-cover" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
//               <p className="text-gray-600">{profileData.email}</p>
//               {!isEditing ? (
//                 <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Edit Profile</button>
//               ) : (
//                 <div className="flex space-x-3">
//                   <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
//                     <Save className="h-4 w-4 mr-2" />Save
//                   </button>
//                   <button onClick={handleCancel} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center">
//                     <X className="h-4 w-4 mr-2" />Cancel
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;