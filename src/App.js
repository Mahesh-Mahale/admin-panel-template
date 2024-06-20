import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import RoleManagement from './pages/RoleManagement';
import UserManagement from './pages/UserManagement';
import ProjectManagement from './pages/ProjectManagement';
import Notification from './pages/Notification';
import Report from './pages/Report';
import Setting from './pages/Setting';
import Logout from './pages/Logout';
import LoginForm from './pages/LoginForm';
import './App.css';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  const toggleSidebar = () => {
    if (isMobileView) {
      setIsSidebarVisible(!isSidebarVisible);
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
      setIsSidebarCollapsed(true);
      setIsSidebarVisible(false);
    } else {
      setIsMobileView(false);
      setIsSidebarCollapsed(false);
      setIsSidebarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <div className={`app ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
                <Sidebar
                  isCollapsed={isSidebarCollapsed}
                  toggleSidebar={toggleSidebar}
                  isMobileView={isMobileView}
                  isSidebarVisible={isSidebarVisible}
                />
                <div className={`content ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/role-management" element={<RoleManagement />} />
                    <Route path="/user-management" element={<UserManagement />} />
                    <Route path="/project-management" element={<ProjectManagement />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/logout" element={<Logout />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
