export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center flex items-center justify-center flex-col text-sm mt-10">
      <div>© {currentYear} - Jakub Mazur</div>
    </div>
  );
}
