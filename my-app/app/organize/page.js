"use client";
import Link from "next/link";

export default function OrganizePage() {
  const benefits = [
    {
      title: "Gestion Simplifiée",
      description: "Gérez facilement vos événements, billets et participants",
      icon: "📊",
    },
    {
      title: "Large Audience",
      description: "Atteignez des milliers de participants potentiels",
      icon: "👥",
    },
    {
      title: "Paiements Sécurisés",
      description: "Système de paiement intégré et sécurisé",
      icon: "🔒",
    },
  ];

  return (
    <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-fit pb-1 mt-20 px-2 mx-auto rounded-md text-2xl font-semibold border-b-2 border-red-700 dark:border-b-2 dark:border-yellow-600 text-center">
          Devenir Organisateur
        </div>

        <div className="w-full flex flex-col items-center py-10 space-y-8">
          <p className="text-xl mt-4 text-gray-700 dark:text-gray-300 text-center max-w-2xl">
            Découvrez comment vous pouvez organiser votre événement sur notre
            plateforme et bénéficier de tous nos services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 w-full mt-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-6 text-center">
            <h3 className="text-2xl font-semibold">Prêt à commencer ?</h3>
            <Link
              href="/organize/create-event"
              className="inline-block bg-red-700 hover:bg-red-400 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Créer mon événement
            </Link>
          </div>

          <div className="mt-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg w-full max-w-3xl">
            <h3 className="text-xl font-semibold mb-4">Comment ça marche ?</h3>
            <ol className="space-y-4 list-decimal list-inside">
              <li>Créez votre compte organisateur</li>
              <li>Remplissez les détails de votre événement</li>
              <li>Configurez vos billets et tarifs</li>
              <li>Publiez et partagez votre événement</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
