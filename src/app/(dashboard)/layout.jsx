export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 h-screen"> {/* সাইডবার */} </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}