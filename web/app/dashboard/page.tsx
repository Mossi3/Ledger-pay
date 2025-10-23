"use client";

import { useQuery } from "@tanstack/react-query";
import { accountsApi, postingApi } from "@/lib/api";
import Link from "next/link";

export default function DashboardPage(){
  const accountsQ = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => (await accountsApi.get("/api/v1/accounts")).data as any[],
  });
  const txQ = useQuery({
    queryKey: ["tx-latest"],
    queryFn: async () => (await postingApi.get("/api/v1/transactions", { params: { page: 0, size: 10 }})).data,
  });

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <p className="text-slate-500 text-sm">Key metrics and quick navigation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="text-sm text-slate-500">Accounts</div>
          <div className="text-3xl font-semibold mt-1">{accountsQ.data?.length ?? "-"}</div>
          <Link href="/accounts" className="mt-4 inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-slate-50">View accounts</Link>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="text-sm text-slate-500">Recent Transactions</div>
          <div className="text-3xl font-semibold mt-1">{txQ.data?.content?.length ?? "-"}</div>
          <Link href="/transactions" className="mt-4 inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-slate-50">View transactions</Link>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="text-sm text-slate-500">System</div>
          <div className="text-3xl font-semibold mt-1">OK</div>
          <Link href="/audit" className="mt-4 inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-slate-50">View audit</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="text-sm font-medium">Balances</h2>
          <p className="text-slate-500 text-sm mt-1">Look up an account balance by ID</p>
          <Link href="/balances" className="mt-4 inline-flex items-center rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800">Go to balances</Link>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="text-sm font-medium">Audit</h2>
          <p className="text-slate-500 text-sm mt-1">Review recent system activity</p>
          <Link href="/audit" className="mt-4 inline-flex items-center rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800">Go to audit</Link>
        </div>
      </div>
    </div>
  );
}
