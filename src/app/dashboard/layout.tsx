// src/app/dashboard/layout.tsx

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout bg-amcmep-bg font-inter text-sm text-amcmep-text antialiased">
      {children}
    </div>
  );
}
