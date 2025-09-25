// pages/home.tsx
import React from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="First Card" content="This is the first card's content." />
          <Card title="Second Card" content="Here’s some more information in a second card." />
          <Card title="Third Card" content="You can add as many cards as you like!" />
        </div>
      </main>
    </>
  );
};

export default Home;
