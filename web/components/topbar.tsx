"use client";

import { getRole, getTenantId, clearSession, loadSessionFromStorage } from "@/lib/auth";
import { useEffect, useState } from "react";

export function Topbar(){
  const [tenantId, setTenantId] = useState<string>("");
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    loadSessionFromStorage();
    setTenantId(getTenantId() ?? "-");
    setRole(getRole() ?? "-");
  }, []);

  return (
    <div className="h-14 flex items-center justify-end gap-4 px-4 border-b bg-white/80 backdrop-blur">
      <div className="text-xs text-slate-500">Tenant</div>
      <div className="px-2 py-1 rounded bg-slate-100 text-xs font-mono">{tenantId}</div>
      <div className="text-xs text-slate-500">Role</div>
      <div className="px-2 py-1 rounded bg-slate-100 text-xs font-medium">{role}</div>
      <button
        className="ml-4 text-xs px-3 py-1 rounded-md border hover:bg-slate-50"
        onClick={() => { clearSession(); location.href = "/login"; }}
      >
        Sign out
      </button>
    </div>
  );
}
