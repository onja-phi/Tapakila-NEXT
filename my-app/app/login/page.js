"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.email || !formData.password) {
      setError("Tous les champs sont requis.");
      return;
    }

    // TODO: Implement login logic here (e.g., API call)
    console.log("Login attempt:", formData);

    // Simulate successful login and redirect
    // Replace with actual login logic
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-bgColor dark:bg-gray-900 pt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-blackColor dark:text-white mb-8">
            Connexion
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}{" "}
          {/* Error message */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-greyText dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-greyText dark:text-gray-300 mb-2"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor dark:bg-gray-700 dark:text-white"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <span className="text-gray-500">Masquer</span>
                  ) : (
                    <span className="text-gray-500">Afficher</span>
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primaryColor hover:bg-hoverColor text-white"
            >
              Se connecter
            </Button>

            <div className="text-center">
              <p className="text-sm text-greyText dark:text-gray-300">
                Pas encore de compte ?{" "}
                <Link
                  href="/register"
                  className="text-primaryColor hover:text-hoverColor"
                >
                  S&apos;inscrire
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
