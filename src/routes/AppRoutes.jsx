import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Members from "../pages/Members";
import MemberDetails from "../pages/MemberDetails";
import Music from "../pages/Music";
import Tour from "../pages/Tour";

import PageTransition from "../components/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/members"
            element={
              <PageTransition>
                <Members />
              </PageTransition>
            }
          >
            <Route
              path="/members/:id"
              element={
                <PageTransition>
                  <MemberDetails />
                </PageTransition>
              }
            />
          </Route>
          <Route
            path="/music"
            element={
              <PageTransition>
                <Music />
              </PageTransition>
            }
          />
          <Route
            path="/tour"
            element={
              <PageTransition>
                <Tour />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
