"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="w-full mt-10 mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="w-fit mt-10 pb-1 px-2 mx-auto rounded-md text-2xl font-semibold border-b-2 border-red-300 dark:border-b-2 dark:border-red-700 text-center">
        À propos de Tapakila
      </div>

      <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <Image
            className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
            src="/logo1.png"
            alt="Plateforme Tapakila"
            width={1080}
            height={720}
          />

          <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Bienvenue sur Tapakila – Votre plateforme événementielle ultime
            </h2>
            <p className="text-md mt-4">
              Tapakila est une plateforme révolutionnaire de gestion
              d&apos;événements conçue pour rendre la planification de vos
              événements plus simple et plus efficace. Que vous organisiez une
              petite réunion ou un festival de grande envergure, Tapakila vous
              offre tous les outils nécessaires pour créer une expérience
              inoubliable pour vos participants.
            </p>
            <p className="text-md mt-4">
              Notre plateforme vous aide à gérer les billets, à traiter les
              paiements, à suivre les détails de l&apos;événement, et bien plus
              encore, le tout dans une interface simple à utiliser. Tapakila
              garantit une communication et une coordination sans faille entre
              les organisateurs et les participants, assurant le succès de votre
              événement de A à Z.
            </p>
          </div>
        </div>

        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Prêt à créer votre prochain événement ?
            </h2>
            <p className="text-md mt-4">
              Que vous organisiez un concert, une conférence ou un mariage,
              Tapakila est là pour vous aider à donner vie à votre événement.
              Commencez dès aujourd&apos;hui et découvrez la facilité de gestion
              d&apos;événements à portée de main.
            </p>
            <p className="text-md mt-4">
              Rejoignez des centaines d&apos;organisateurs d&apos;événements qui
              font confiance à Tapakila pour leurs besoins événementiels. Créez
              un compte et commencez à planifier votre événement dès maintenant
              !
            </p>
          </div>

          <div className="md:w-[50%] w-full flex justify-center items-center mt-6">
            <Link href="/organize">
              <button className="bg-red-800 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-600">
                Commencer à planifier votre événement
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
