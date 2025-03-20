"use client";

export default function OrganizePage() {
  return (
    <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">
        Devenir Organisateur
      </div>

      <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Bienvenue sur Tapakila !
        </h2>
        <p className="text-md mt-4 text-gray-900 dark:text-gray-400">
          Découvrez comment vous pouvez organiser votre événement sur notre
          plateforme et bénéficier de tous nos services.
        </p>
      </div>
    </section>
  );
}
