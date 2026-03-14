import Header from "@/components/Header";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header>js</Header>
      <div className="container mx-auto py-10 flex-1">{children}</div>
    </div>
  );
}

export default Layout;
