import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold">Bienvenue sur notre site !</h2>
        <p>Votre expert en froid et climatisation.</p>
      </main>
      <Footer />
    </div>
  );
}