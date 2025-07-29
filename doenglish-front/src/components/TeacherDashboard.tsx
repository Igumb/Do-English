import React, { useState } from 'react';
import { BookOpen, Calendar, Users, FileText, LogOut, Clock, Star, TrendingUp } from 'lucide-react';

interface TeacherDashboardProps {
  userName: string;
  onLogout: () => void;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ userName, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: TrendingUp },
    { id: 'students', label: 'Meus Alunos', icon: Users },
    { id: 'schedule', label: 'Calendário', icon: Calendar },
    { id: 'reports', label: 'Relatórios', icon: FileText },
    { id: 'availability', label: 'Disponibilidade', icon: Clock },
  ];

  const students = [
    { id: 1, name: 'Ana Costa', level: 'Intermediário', nextClass: '2024-01-15 14:00', progress: 75 },
    { id: 2, name: 'Carlos Silva', level: 'Básico', nextClass: '2024-01-15 16:00', progress: 45 },
    { id: 3, name: 'Marina Santos', level: 'Avançado', nextClass: '2024-01-16 10:00', progress: 90 },
  ];

  const todayClasses = [
    { time: '09:00', student: 'Ana Costa', type: 'Conversação' },
    { time: '14:00', student: 'Carlos Silva', type: 'Grammar' },
    { time: '16:00', student: 'Marina Santos', type: 'Business English' },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-red-500 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                Do!<span className="text-red-500">English</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Professor {userName}</span>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-xl shadow-sm p-6">
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-red-50 text-red-600 border border-red-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard do Professor</h1>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-red-500 p-3 rounded-lg">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">15</p>
                        <p className="text-gray-600 text-sm">Alunos Ativos</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-green-500 p-3 rounded-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">42</p>
                        <p className="text-gray-600 text-sm">Aulas Este Mês</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-amber-500 p-3 rounded-lg">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">4.8</p>
                        <p className="text-gray-600 text-sm">Avaliação Média</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Today's Schedule */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Aulas de Hoje</h2>
                  <div className="space-y-3">
                    {todayClasses.map((cls, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                            {cls.time}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{cls.student}</p>
                            <p className="text-sm text-gray-600">{cls.type}</p>
                          </div>
                        </div>
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Iniciar Aula
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">Meus Alunos</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {students.map((student) => (
                    <div key={student.id} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-semibold">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{student.name}</h3>
                          <p className="text-sm text-gray-600">{student.level}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progresso</span>
                          <span className="text-gray-900">{student.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full" 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-4">
                        <span className="font-medium">Próxima aula:</span> {student.nextClass}
                      </div>
                      
                      <button className="w-full bg-red-50 text-red-600 py-2 px-4 rounded-lg hover:bg-red-100 transition-colors">
                        Ver Detalhes
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">Relatórios de Desempenho</h1>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Criar Relatório</h2>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Selecionar Aluno
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option>Ana Costa</option>
                        <option>Carlos Silva</option>
                        <option>Marina Santos</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Listening (1-10)
                        </label>
                        <input 
                          type="number" 
                          min="1" 
                          max="10" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Speaking (1-10)
                        </label>
                        <input 
                          type="number" 
                          min="1" 
                          max="10" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Reading (1-10)
                        </label>
                        <input 
                          type="number" 
                          min="1" 
                          max="10" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Learning Speed (1-10)
                        </label>
                        <input 
                          type="number" 
                          min="1" 
                          max="10" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Comentários
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Observações sobre o desempenho do aluno..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Salvar Relatório
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;