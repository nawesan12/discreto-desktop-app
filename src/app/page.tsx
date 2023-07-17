import Header from "@/components/Header";
import Example from "@/components/MainDashboard";
import AsideNavigation from "@/components/AsideNavigation";

export default function Home() {
  return (
    <main className="grid grid-cols-12">
      <AsideNavigation />
      <section className="px-8 col-span-10">
        <Header />
        <Example />
      </section>
    </main>
  );
}
