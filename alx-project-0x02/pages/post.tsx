// pages/post.tsx
import React from "react";
import Header from "../components/layout/Header";

const Post: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <p className="text-lg text-gray-700">
          This is the posts page. You can list all posts here, fetch from an API,
          or display user-generated posts.
        </p>
      </main>
    </>
  );
};

export default Post;
