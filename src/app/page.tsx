export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#18122B]">
      {/* Panel ilustración */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-[#18122B] overflow-visible relative">
        <div className="bg-[#393053] rounded-2xl w-[520px] h-[650px] flex items-center justify-center relative overflow-visible">
          <img
            src="https://media.tenor.com/e_yDx2QYYwYAAAAi/kuromi-sad.gif"
            alt="Illustration"
            className="w-[600px] h-[600px] object-contain absolute -right-15 top-1/2 -translate-y-1/2 drop-shadow-2xl"
            style={{ zIndex: 50 }}
          />
        </div>
      </div>

      {/* Panel formulario */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6">
        <div className="w-full max-w-xl space-y-8 bg-[#393053] p-14 rounded-2xl shadow-lg">
          <div className="text-right text-sm text-[#F7EFE5]">
            Don’t have an account?{" "}
            <a href="#" className="text-pink-300 hover:underline font-semibold">
              Sign up
            </a>
          </div>

          <h1 className="text-3xl font-bold text-white">Sign in</h1>
          <div className="text-pink-200 text-sm mb-2">Sign in with Open account</div>

          {/* Botones sociales */}
          <div className="flex gap-4">
            <button className="flex items-center justify-center w-1/2 border border-pink-300 bg-pink-300/20 text-white rounded-lg py-2 hover:bg-pink-300 hover:text-[#18122B] font-bold transition">
              <img
                src="https://media.tenor.com/ZQxzZ3xQx5kAAAAi/google.gif"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center w-1/2 border border-pink-300 bg-pink-300/20 text-white rounded-lg py-2 hover:bg-pink-300 hover:text-[#18122B] font-bold transition">
              <img
                src="https://media.tenor.com/Ff5sUTqnbgwAAAAi/star-tamil-chat-startamilchat.gif"
                alt="Apple"
                className="w-5 h-5 mr-2"
              />
              <span>Apple ID</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 h-px bg-pink-200"></div>
            <span className="px-2 text-sm text-pink-200">
              Or continue with email address
            </span>
            <div className="flex-1 h-px bg-pink-200"></div>
          </div>

          {/* Formulario */}
          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="example@.com"
                className="w-full border border-pink-300 bg-[#18122B] text-white rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-gray-400"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-200">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm1.5 0V7.4l8.25 5.5a1 1 0 0 0 1.1 0l8.25-5.5V6.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5Zm18 1.6-7.7 5.13a3 3 0 0 1-3.3 0L3.5 8.1V17.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8.1Z" fill="currentColor"/></svg>
              </span>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-pink-300 bg-[#18122B] text-white rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-gray-400"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-200">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6V9a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H6V9Zm10 9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5Z" fill="currentColor"/></svg>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-400 text-[#18122B] py-2 rounded-lg hover:bg-pink-300 font-semibold transition"
            >
              Start trading
            </button>
          </form>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-pink-100">
              <input type="checkbox" className="rounded bg-[#18122B] border-pink-300" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text-pink-200 hover:underline font-semibold">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}