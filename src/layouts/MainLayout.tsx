import Header from "../components/Header";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-second-pink">
      <Header />
      <main className="w-full">{children}</main>

      {/* Footer */}
    </div>
  );
};

export default MainLayout;
