type Props = {
  children: React.ReactNode;
};

export default function HeaderSidebarLayout({ children }: Props) {
  return (
    <div className="flex h-screen font-sans">
      <aside className="w-[320px] shrink-0 bg-white border-r border-gray-200 flex flex-col px-4 py-6">
        <div className="font-bold text-lg tracking-wider mb-8">TUSKY</div>
        <nav className="flex flex-col gap-1">
          <a
            href="#"
            className="flex items-center gap-[10px] px-3 py-[10px] rounded-lg text-blue-600 font-semibold no-underline bg-blue-50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-[10px] px-3 py-[10px] rounded-lg text-gray-700 no-underline hover:bg-gray-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            Community
          </a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center justify-between px-7 h-[60px] bg-white border-b border-gray-200 shrink-0">
          <span className="font-bold text-base tracking-widest">DASHBOARD</span>
          <div className="w-10 h-10 rounded-full bg-gray-900" />
        </header>

        {children}
      </div>
    </div>
  );
}
