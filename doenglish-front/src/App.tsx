import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginScreen from './components/LoginScreen';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import { AuthProvider, useAuth } from './app/context/AuthContext';

const queryClient = new QueryClient();

function ProtectedRoute({ children, roles }: { children: React.ReactNode; roles: Array<'admin'|'teacher'|'student'> }) {
  const { userType } = useAuth();
  if (!userType) return <Navigate to="/login" replace />;
  if (!roles.includes(userType)) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function AdminPage() {
  const { userName, logout } = useAuth();
  return <AdminDashboard userName={userName} onLogout={logout} />;
}
function TeacherPage() {
  const { userName, logout } = useAuth();
  return <TeacherDashboard userName={userName} onLogout={logout} />;
}
function StudentPage() {
  const { userName, logout } = useAuth();
  return <StudentDashboard userName={userName} onLogout={logout} />;
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginScreen onLogin={() => {}} />} />
            <Route path="/admin" element={
              <ProtectedRoute roles={['admin']}>
                <AdminPage />
              </ProtectedRoute>
            } />
            <Route path="/teacher" element={
              <ProtectedRoute roles={['teacher']}>
                <TeacherPage />
              </ProtectedRoute>
            } />
            <Route path="/student" element={
              <ProtectedRoute roles={['student']}>
                <StudentPage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;