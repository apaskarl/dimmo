import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="pt-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-center md:gap-0">
          <div className="flex flex-col gap-6">
            <a href="/">
              <Logo />
            </a>

            <div className="text-xs text-slate-600">
              © 2024 Dimmo™, All Rights Reserved.
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <a
              href="#"
              className="text-xs font-medium text-slate-600 hover:underline md:text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-medium text-slate-600 hover:underline md:text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <img
          src="/images/footer-image.png"
          className="h-full w-full object-cover"
        />
      </div>
    </footer>
  );
}
