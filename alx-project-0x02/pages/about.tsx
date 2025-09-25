// pages/about.tsx
import React from "react";
import Header from "../components/layout/Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          This is the about page. Share information about your app or team here.
        </p>
      </main>
    </>
  );
};

export default About;
