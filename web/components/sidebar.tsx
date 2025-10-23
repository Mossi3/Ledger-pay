"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, List, Wallet, FileText, LogIn } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/accounts", label: "Accounts", icon: Wallet },
  { href: "/transactions", label: "Transactions", icon: List },
  { href: "/balances", label: "Balances", icon: FileText },
  { href: "/audit", label: "Audit", icon: FileText },
  { href: "/login", label: "Login", icon: LogIn },
];

export function Sidebar(){
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col border-r bg-white/80 backdrop-blur">
      <div className="h-14 flex items-center px-4 border-b font-semibold">LedgerPay</div>
      <nav className="flex-1 p-2 space-y-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-slate-100 ${active ? "bg-slate-100 font-medium" : ""}`}>
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
