import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Layout from "./Layout";
import useAuth from "./hooks/useAuth";

const App: React.FC = () => {
  const { currentUser, isLoading, signInWithGoogle } = useAuth();

  useEffect(() => {
    if (!isLoading && !currentUser) {
      signInWithGoogle();
    }
  }, [isLoading, currentUser, signInWithGoogle]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
