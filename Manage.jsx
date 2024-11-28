import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import './manage.css';

const Manage = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    age: '30',
    gender: 'Male',
    email: 'johndoe@example.com',
    imageUrl: 'https://www.w3schools.com/w3images/avatar2.png', // Placeholder image
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(userProfile.imageUrl);

  const [members, setMembers] = useState([]);
  const [editingMemberIndex, setEditingMemberIndex] = useState(null);

  const navigate = useNavigate();

  // Handle Profile Picture Change
  const handleImageChange = (e) => {
    setNewImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle Profile Edit Toggle
  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  // Handle Saving Profile Edits
  const handleSaveProfile = () => {
    setUserProfile({
      ...userProfile,
      imageUrl: newImage,
    });
    setIsEditing(false);
  };

  // Handle Deleting Profile
  const handleDeleteProfile = () => {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      navigate('/login'); // Navigate to login page after profile is deleted
    }
  };

  // Handle Adding a New Member
  const handleAddMember = () => {
    setMembers([...members, {
      name: '',
      age: '',
      gender: '',
      email: '',
      imageUrl: 'https://www.w3schools.com/w3images/avatar2.png', // Default image
      isEditing: true,
    }]);
  };

  // Handle Editing Member Profile
  const handleEditMember = (index) => {
    setEditingMemberIndex(index);
    setMembers(
      members.map((member, idx) =>
        idx === index ? { ...member, isEditing: !member.isEditing } : member
      )
    );
  };

  // Handle Saving Member Profile Edits
  const handleSaveMember = (index) => {
    setMembers(
      members.map((member, idx) =>
        idx === index ? { ...member, isEditing: false } : member
      )
    );
    setEditingMemberIndex(null);
  };

  // Handle Deleting a Member Profile
  const handleDeleteMember = (index) => {
    setMembers(members.filter((_, idx) => idx !== index));
  };

  return (
    <DashboardLayout>
      <div className="manage-page">
        <h1 className="page-title">Manage Your Profile</h1>
        
        {/* User Profile Container */}
        <div className="profile-container">
          <div className="profile-pic">
            <img src={newImage} alt="Profile" className="profile-image" />
            {isEditing && (
              <input type="file" onChange={handleImageChange} className="upload-input" />
            )}
          </div>
          <div className="profile-details">
            <div className="detail">
              <span>Name:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                />
              ) : (
                <span>{userProfile.name}</span>
              )}
            </div>

            <div className="detail">
              <span>Age:</span>
              {isEditing ? (
                <input
                  type="number"
                  value={userProfile.age}
                  onChange={(e) => setUserProfile({ ...userProfile, age: e.target.value })}
                />
              ) : (
                <span>{userProfile.age}</span>
              )}
            </div>

            <div className="detail">
              <span>Gender:</span>
              {isEditing ? (
                <select
                  value={userProfile.gender}
                  onChange={(e) => setUserProfile({ ...userProfile, gender: e.target.value })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <span>{userProfile.gender}</span>
              )}
            </div>

            <div className="detail">
              <span>Email:</span>
              {isEditing ? (
                <input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                />
              ) : (
                <span>{userProfile.email}</span>
              )}
            </div>

            <div className="profile-actions">
              {isEditing ? (
                <button onClick={handleSaveProfile} className="save-btn">Save</button>
              ) : (
                <button onClick={handleEditProfile} className="edit-btn">Edit Profile</button>
              )}
              <button onClick={handleDeleteProfile} className="delete-btn">Delete Profile</button>
            </div>
          </div>
        </div>

        {/* Member Management Container */}
        <div className="member-management-container">
          <h2 className="section-title">Manage Members</h2>
          <button onClick={handleAddMember} className="add-member-btn">Add Member</button>

          {members.map((member, index) => (
            <div className="member-container" key={index}>
              <div className="member-pic">
                <img src={member.imageUrl} alt="Member Profile" className="member-image" />
                {member.isEditing && (
                  <input
                    type="file"
                    onChange={(e) =>
                      setMembers(
                        members.map((m, idx) =>
                          idx === index
                            ? { ...m, imageUrl: URL.createObjectURL(e.target.files[0]) }
                            : m
                        )
                      )
                    }
                    className="upload-input"
                  />
                )}
              </div>

              <div className="member-details">
                <div className="detail">
                  <span>Name:</span>
                  {member.isEditing ? (
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) =>
                        setMembers(
                          members.map((m, idx) => (idx === index ? { ...m, name: e.target.value } : m))
                        )
                      }
                    />
                  ) : (
                    <span>{member.name}</span>
                  )}
                </div>

                <div className="detail">
                  <span>Age:</span>
                  {member.isEditing ? (
                    <input
                      type="number"
                      value={member.age}
                      onChange={(e) =>
                        setMembers(
                          members.map((m, idx) => (idx === index ? { ...m, age: e.target.value } : m))
                        )
                      }
                    />
                  ) : (
                    <span>{member.age}</span>
                  )}
                </div>

                <div className="detail">
                  <span>Gender:</span>
                  {member.isEditing ? (
                    <select
                      value={member.gender}
                      onChange={(e) =>
                        setMembers(
                          members.map((m, idx) => (idx === index ? { ...m, gender: e.target.value } : m))
                        )
                      }
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <span>{member.gender}</span>
                  )}
                </div>

                <div className="detail">
                  <span>Email:</span>
                  {member.isEditing ? (
                    <input
                      type="email"
                      value={member.email}
                      onChange={(e) =>
                        setMembers(
                          members.map((m, idx) => (idx === index ? { ...m, email: e.target.value } : m))
                        )
                      }
                    />
                  ) : (
                    <span>{member.email}</span>
                  )}
                </div>

                <div className="member-actions">
                  {member.isEditing ? (
                    <button onClick={() => handleSaveMember(index)} className="save-btn">Save</button>
                  ) : (
                    <button onClick={() => handleEditMember(index)} className="edit-btn">Edit</button>
                  )}
                  <button onClick={() => handleDeleteMember(index)} className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Manage;
  