import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";

const services = [
  {
    title: "Installation, maintenance et reparation des climatiseurs",
    description:
      "Nous installons des systèmes de climatisation adaptés à vos besoins.",
  },
  {
    title: "Maintenance des équipements frigorifiques",
    description:
      "Services de maintenance pour assurer le bon fonctionnement de vos équipements.",
  },
  {
    title: "Dépannage rapide",
    description:
      "Intervention rapide en cas de panne pour minimiser votre temps d'arrêt.",
  },
  {
    title: "Formation au métier de Froid et de la Climatisation",
    description:
      "Intervention rapide en cas de panne pour minimiser votre temps d'arrêt.",
  },
];

const produits = [
  {
    title: "Groupe d'eau glacée ",
    description:
      "Nous installons des systèmes de climatisation adaptés à vos besoins.",
  },
  {
    title: "Tuyauterie cuivre",
    description:
      "Services de maintenance pour assurer le bon fonctionnement de vos équipements.",
  },
  {
    title: "Isolation pour la climatisation",
    description:
      "Intervention rapide en cas de panne pour minimiser votre temps d'arrêt.",
  },
  {
    title: "Gaz Réfrigérant ",
    description:
      "Nous installons des systèmes de climatisation adaptés à vos besoins.",
  },
  {
    title: "Diffusion, Ventilation et desenfumage",
    description:
      "Services de maintenance pour assurer le bon fonctionnement de vos équipements.",
  },
  {
    title: "Climatiseurs",
    description:
      "Intervention rapide en cas de panne pour minimiser votre temps d'arrêt.",
  },
  {
    title: "Ventilateurs",
    description:
      "Intervention rapide en cas de panne pour minimiser votre temps d'arrêt.",
  },
];

const outillages = [
  {
    title: "Carotteuses / Perceuses à batterie (Autonomie : 8h) ",
    description:
      "Nous installons des systèmes de climatisation adaptés à vos besoins.",
  },
  {
    title: "Perceuses perforateurs / Laveuses à pression (Karcher)",
    description:
      "Services de maintenance pour assurer le bon fonctionnement de vos équipements.",
  },
  {
    title: "Détecteurs de fuite / Ampèremètres",
    description:
      "Intervention rapide en cas de panne pour minimiser votre temps d'arrêt.",
  },
  {
    title: "Capacimètres / Manomètres ",
    description:
      "Nous installons des systèmes de climatisation adaptés à vos besoins.",
  },
  {
    title: "Pompe à vide / Coupe tube",
    description:
      "Services de maintenance pour assurer le bon fonctionnement de vos équipements.",
  },
];

export default function Services() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold">Nos Produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {produits.map((produit, index) => (
            <ServiceCard
              key={index}
              title={produit.title}
              description={produit.description}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold">Nos Outillages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {outillages.map((outillage, index) => (
            <ServiceCard
              key={index}
              title={outillage.title}
              description={outillage.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}