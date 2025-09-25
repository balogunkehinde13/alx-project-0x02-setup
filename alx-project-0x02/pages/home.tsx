// pages/home.tsx
import React from "react";
import Header from "../components/layout/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-700">
          This is the home page of your app. Add your content here.
        </p>
      </main>
    </>
  );
};

export default Home;
