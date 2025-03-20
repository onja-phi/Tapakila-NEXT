export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-semibold">Chargement...</p>
      </div>
    </div>
  );
}
