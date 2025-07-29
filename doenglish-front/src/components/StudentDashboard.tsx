import React, { useState } from 'react';
import { BookOpen, Calendar, ShoppingCart, MessageSquare, LogOut, Star, Trophy, Clock, User } from 'lucide-react';

interface StudentDashboardProps {
  userName: string;
  onLogout: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ userName, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Meu Progresso', icon: Trophy },
    { id: 'schedule', label: 'Minhas Aulas', icon: Calendar },
    { id: 'store', label: 'Loja de eBooks', icon: ShoppingCart },
    { id: 'feedback', label: 'Avaliações', icon: MessageSquare },
    { id: 'profile', label: 'Meu Perfil', icon: User },
  ];

  const upcomingClasses = [
    { date: '15/01/2024', time: '14:00', teacher: 'Sarah Johnson', type: 'Conversação' },
    { date: '17/01/2024', time: '16:00', teacher: 'Michael Davis', type: 'Grammar' },
    { date: '19/01/2024', time: '10:00', teacher: 'Emma Wilson', type: 'Business English' },
  ];

  const ebooks = [
    { 
      id: 1, 
      title: 'Inglês para Entrevistas', 
      price: 'R$ 29,90', 
      image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Prepare-se para entrevistas em inglês com confiança'
    },
    { 
      id: 2, 
      title: 'Inglês para Viagem', 
      price: 'R$ 24,90', 
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Vocabulário essencial para suas viagens'
    },
    { 
      id: 3, 
      title: 'Business English Pro', 
      price: 'R$ 39,90', 
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Inglês corporativo para profissionais'
    },
    { 
      id: 4, 
      title: 'Conversação Avançada', 
      price: 'R$ 34,90', 
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Desenvolva fluência em conversação'
    },
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
              <span className="text-gray-700">Olá, {userName}</span>
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
                <h1 className="text-3xl font-bold text-gray-900">Meu Progresso</h1>
                
                {/* Progress Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Nível Atual</h3>
                      <Trophy className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="text-2xl font-bold text-red-500 mb-2">Intermediário</p>
                    <p className="text-sm text-gray-600">75% concluído</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Aulas Concluídas</h3>
                      <Calendar className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">28</p>
                    <p className="text-sm text-gray-600">Este mês</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Tempo de Estudo</h3>
                      <Clock className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">42h</p>
                    <p className="text-sm text-gray-600">Total acumulado</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Avaliação</h3>
                      <Star className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">8.5</p>
                    <p className="text-sm text-gray-600">Média geral</p>
                  </div>
                </div>

                {/* Upcoming Classes */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Próximas Aulas</h2>
                  <div className="space-y-3">
                    {upcomingClasses.map((cls, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                            {cls.date}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{cls.time} - {cls.type}</p>
                            <p className="text-sm text-gray-600">Professor: {cls.teacher}</p>
                          </div>
                        </div>
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Reagendar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'store' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-gray-900">Loja de eBooks</h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Minha Biblioteca</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ebooks.map((ebook) => (
                    <div key={ebook.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src={ebook.image} 
                        alt={ebook.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{ebook.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{ebook.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-red-500">{ebook.price}</span>
                          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured Section */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Oferta Especial!</h2>
                      <p className="text-red-100 mb-4">Compre 2 eBooks e ganhe 1 grátis</p>
                      <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                        Ver Ofertas
                      </button>
                    </div>
                    <BookOpen className="w-16 h-16 text-red-200" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'feedback' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">Avaliações</h1>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Avaliar Professor</h2>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Selecionar Professor
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option>Sarah Johnson</option>
                        <option>Michael Davis</option>
                        <option>Emma Wilson</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Avaliação Geral
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="text-2xl text-amber-400 hover:text-amber-500"
                          >
                            <Star className="w-6 h-6 fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Comentários (anônimos)
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Compartilhe sua experiência com este professor..."
                      ></textarea>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-sm text-amber-800">
                        <strong>Nota:</strong> Sua avaliação é completamente anônima e não será compartilhada com o professor.
                      </p>
                    </div>
                    
                    <button 
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Enviar Avaliação
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">Meu Perfil</h1>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Informações Pessoais</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input 
                        type="text" 
                        value={userName}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input 
                        type="email" 
                        value="usuario@email.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gênero Preferido do Professor
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option>Sem preferência</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estilo de Aprendizagem
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option>Visual</option>
                        <option>Auditivo</option>
                        <option>Leitura/Escrita</option>
                        <option>Cinestésico</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Objetivo de Estudo
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option>Fluência geral</option>
                        <option>Inglês profissional</option>
                        <option>Inglês para viagem</option>
                        <option>Preparação para exames</option>
                        <option>Outros</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
                      Salvar Alterações
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;