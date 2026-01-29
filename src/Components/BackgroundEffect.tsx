export default function BackEffect() {
  return (
    <div>
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid-white/10 bg-grid-16 opacity-10"></div>
      <div className="fixed top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>
  );
}
