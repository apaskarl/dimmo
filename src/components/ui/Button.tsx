import { Icon } from "@iconify/react/dist/iconify.js";

export default function Button({ 
    label,
    href,
    arrow = false,
    primary = false,
}: { 
    label: string, 
    href: string,
    arrow?: boolean,
    primary?: boolean,
}) {
  return (
    <a href={href} className={`flex-shrink-0 flex items-center gap-3 rounded-full px-8 py-3 font-medium text-sm 300 md:text-base text-slate-900 duration-300 
        ${primary ? "bg-primary hover:bg-primary/80" : "border border-slate-300 bg-white/10 hover:bg-white/50 backdrop-blur-xs"}`}>
        {label}
        {arrow && <Icon icon="tabler:arrow-right" width="20" height="20" />}
    </a>
  );
}
