import React, { useState } from 'react';
import { BookOpen, Users, GraduationCap, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../app/context/AuthContext';
import type { UserType } from '../types/user';

interface LoginScreenProps {
  onLogin?: (userType: UserType, name: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<UserType>(null);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const roles = [
    { type: 'admin' as UserType, title: 'Administrador', description: 'Gerencie professores, alunos e conteúdos', icon: Users, color: 'bg-red-500 hover:bg-red-600' },
    { type: 'teacher' as UserType, title: 'Professor', description: 'Ensine e acompanhe seus alunos', icon: GraduationCap, color: 'bg-red-500 hover:bg-red-600' },
    { type: 'student' as UserType, title: 'Aluno', description: 'Aprenda inglês de forma prática', icon: BookOpen, color: 'bg-red-500 hover:bg-red-600' },
  ];

  const handleLogin = () => {
    if (selectedRole && name.trim()) {
      login(selectedRole, name);
      if (onLogin) onLogin(selectedRole, name);
      const path = selectedRole === 'admin' ? '/admin' : selectedRole === 'teacher' ? '/teacher' : '/student';
      navigate(path, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-500 p-4 rounded-full">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            English<span className="text-red-500">Flow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprenda inglês de forma moderna, prática e descontraída. 
            Conecte-se com professores qualificados e acelere seu aprendizado.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Como você gostaria de acessar?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.type}
                  onClick={() => setSelectedRole(role.type)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedRole === role.type
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg ${role.color} flex items-center justify-center mb-4 transition-colors`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>

          {selectedRole && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>
              
              <button
                onClick={handleLogin}
                disabled={!name.trim()}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Entrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;