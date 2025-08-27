export default function Home() {
  return (
    <div className="min-h-screen w-full bg-blue-100 flex items-center justify-center">
      {/* Card principal */}
      <main className="bg-white rounded-2xl shadow-xl p-6 w-[380px]">
        
        {/* Encabezado con fecha y hora */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>Tue Feb 18 2025</span>
          <span>9:31:25 p.m.</span>
        </div>

        {/* Título */}
        <h1 className="text-lg font-bold text-blue-900 mb-3">List Tailwind</h1>

        {/* Calendario mini */}
        <div className="grid grid-cols-7 text-center text-xs text-gray-600 mb-6">
          <span>s</span><span>m</span><span>t</span><span>w</span><span>t</span><span>f</span><span>s</span>
          <span className="text-gray-400">24</span>
          <span className="text-gray-400">25</span>
          <span className="text-gray-400">26</span>
          <span className="text-gray-400">27</span>
          <span className="text-gray-400">28</span>
          <span className="text-gray-400">29</span>
          <span className="text-gray-400">30</span>
        </div>

        {/* Lista de tareas */}
        <div className="flex flex-col gap-3">
          {/* Tarea completada */}
          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">✓</div>
              <span className="line-through text-gray-500 font-semibold text-sm">take out the trash</span>
            </div>
            <span className="text-xs font-semibold bg-blue-200 px-3 py-1 rounded-md">9:00 AM</span>
          </div>

          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">✓</div>
              <span className="line-through text-gray-500 font-semibold text-sm">do homework</span>
            </div>
            <span className="text-xs font-semibold bg-blue-200 px-3 py-1 rounded-md">12:00 PM</span>
          </div>

          {/* Tareas pendientes */}
          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
              <span className="text-gray-600 font-medium text-sm">go to grocery store</span>
            </div>
            <span className="text-xs font-semibold bg-blue-200 px-3 py-1 rounded-md">1:00 PM</span>
          </div>

          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
              <span className="text-gray-600 font-medium text-sm">run 5 kilometers</span>
            </div>
            <span className="text-xs font-semibold bg-blue-200 px-3 py-1 rounded-md">4:20 PM</span>
          </div>

          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
              <span className="text-gray-600 font-medium text-sm">load the dishwasher</span>
            </div>
            <span className="text-xs font-semibold bg-blue-200 px-3 py-1 rounded-md">9:00 PM</span>
          </div>

          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
              <span className="text-gray-600 font-medium text-sm">Take out the trash</span>
            </div>
            <span className="text-xs font-semibold bg-blue-200 px-3 py-1 rounded-md">9:00 AM</span>
          </div>
        </div>
      </main>
    </div>
  );
}
