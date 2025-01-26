const Navbar = () => (
    <nav className="w-full h-14 bg-slate-800 flex justify-between items-center px-5 fixed top-0 z-50 shadow-lg shadow-cyan-500">
      <div className="flex">
        <span className="font-bold text-2xl bg-cyan-500 text-slate-800 rounded-lg px-2 animate-pulse">Syaloni</span>
        <span className="font-bold text-2xl text-cyan-500 mx-2">Barman</span>
      </div>
      <ul className="lg:flex items-center hidden">
        {['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Contact'].map((item) => (
          <li key={item} className="mx-5">
            <a href={`#${item.toLowerCase()}`} className="font-semibold text-white hover:text-cyan-500">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

export default Navbar;