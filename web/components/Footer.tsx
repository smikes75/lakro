export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-[1170px] mx-auto px-4 text-center text-sm text-text-light">
        COPYRIGHT {new Date().getFullYear()} LAKRO, s.r.o. | ALL RIGHTS
        RESERVED
      </div>
    </footer>
  );
}
