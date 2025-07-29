import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';

export type UserType = 'admin' | 'teacher' | 'student' | null;

function App() {
  const [currentUser, setCurrentUser] = useState<UserType>(null);
  const [userName, setUserName] = useState('');

  const handleLogin = (userType: UserType, name: string) => {
    setCurrentUser(userType);
    setUserName(name);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUserName('');
  };

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {currentUser === 'admin' && <AdminDashboard userName={userName} onLogout={handleLogout} />}
      {currentUser === 'teacher' && <TeacherDashboard userName={userName} onLogout={handleLogout} />}
      {currentUser === 'student' && <StudentDashboard userName={userName} onLogout={handleLogout} />}
    </div>
  );
}

export default App;