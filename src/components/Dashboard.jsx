import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Craxio</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">welcome, {user?.fullName}</span>
              <button
                onClick={onLogout}
                className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-4 py-2 rounded-full transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16 ">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcom to Craxio
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            You've successfully logged in to your account.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-md rounded-2xl">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex justify-center items-center">
              <FaUserAlt className="text-yellow-700 text-2xl" />{" "}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Your Profile
            </h3>
            <p className="text-gray-800">
              Manage your account settings and preferences.
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-2xl">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex justify-center items-center">
              <FaChartSimple className="text-yellow-700 text-2xl" />{" "}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dashboard</h3>
            <p className="text-gray-800">
              Access your personalized dashboard with key metrics.
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-2xl">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex justify-center items-center">
              <FaPeopleGroup className="text-yellow-700 text-2xl" />{" "}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-800">
              Connect with other users and share experiences.
            </p>
          </div>
        </div>

        {/* Userinfo Card */}
        <div className="mt-12 max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Account Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{user?.fullName}</p>
              </div>

              <div>
                <p  className="text-sm text-gray-500">Email Addres</p>
                <p className="font-medium">{user?.email}</p>
              </div>

              <div>
                <p  className="text-sm text-gray-500">Account Status</p>
                <p className="font-medium text-green-600">Active</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
