import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "../Logo";
import NavLink from "../NavLink";

export default function Header() {
  return (
    <header className="absolute z-50 py-4 top-0 left-0 w-full">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/">
              <Logo />
            </a>

            <nav className="hidden md:flex items-center py-1 px-3 gap-2">
              <NavLink href="/" label="Categories" dropdown />
              <NavLink href="/" label="Dimmo AI" newLink />
              <NavLink href="/agents" label="Agents" />
              <NavLink href="/" label="Resources" dropdown />
              <NavLink href="/" label="Feature Library" />
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button type="button" className="cursor-pointer flex items-center gap-2 text-sm text-slate-600 font-medium px-4 py-2  bg-white/20 backdrop-blur-xs border border-slate-300 hover:bg-white/50 duration-300 rounded-full">
              <Icon icon="material-symbols:search" width="16" height="16" className="text-slate-900"/>
              Search...
            </button>

            <a href="#" className="text-sm text-slate-900 font-medium px-4 py-2 bg-white/20 backdrop-blur-xs border border-slate-300 hover:bg-white/50 duration-300 rounded-full">
              Register Company
            </a>
            <a href="#" className="text-sm text-slate-900 font-medium px-4 py-2 bg-primary hover:bg-primary/80 duration-300 rounded-full">
              Login/Sign Up
            </a>
          </div>

          <nav className="md:hidden relative">
            <button className="relative flex z-50 h-8 w-8 flex-col items-center justify-center space-y-1.5">
              <span className="h-0.5 w-6 rounded-md bg-slate-900 duration-300"></span>
              <span className="h-0.5 w-6 rounded-md bg-slate-900 duration-300"></span>
              <span className="h-0.5 w-6 rounded-md bg-slate-900 duration-300"></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
