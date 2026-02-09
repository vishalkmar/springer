import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";


import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Committee from "@/pages/Committee";
import Speakers from "@/pages/Speakers";
import CFP from "@/pages/CFP";
import Submission from "@/pages/Submission";
import Program from "@/pages/Program";
import Registration from "@/pages/Registration";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import venue from "@/pages/Venue";
import SessionChairs from "@/pages/SessionChairs";
import Awards from "@/pages/Awards";

import keynoteRegistrationPage from "./pages/KeynoteSpeakerRegistration";
import Exebitors from "./pages/Exebeters";

import Agenda from "./pages/Agenda";
import AboutConference from "@/pages/AboutConference";
import Faqs from "./pages/Faqs";
import Review from "@/pages/Review";
import Papers from "./pages/Paper";

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
     
      
      {/* Committee Routes */}
      <Route path="/committee" component={Committee} />
      <Route path="/committee/tpc" component={Committee} />
      
      {/* Speakers Routes */}
      <Route path="/speakers" component={Speakers} />
      <Route path="/speakers/invited" component={Speakers} />
      
      {/* CFP Routes */}
      <Route path="/cfp" component={CFP} />
      <Route path="/cfp/special" component={CFP} />
      
      {/* Submission Routes */}
      <Route path="/submission" component={Submission} />
      <Route path="/submission/awards" component={Submission} />
      
      {/* Program Routes */}
      <Route path="/program" component={Program} />
      <Route path="/program/venue" component={Program} />
      
      {/* Registration Routes */}
      <Route path="/registration" component={Registration} />
      <Route path="/registration/now" component={Registration} />
      
      {/* Other */}
      <Route path="/venue" component={venue} />
      <Route path="/contact" component={Contact} />
      <Route path="/session-chairs" component={SessionChairs} />
      <Route path="/awards" component={Awards} />
      <Route path="/speakers/registratioin" component={keynoteRegistrationPage} />
      <Route path="/exibitors" component={Exebitors} />
      <Route path="/conference/agenda" component={Agenda} />
      <Route path="/conference" component={AboutConference} />
      <Route path="/about/conference" component={AboutConference} />
      <Route path="papers" component={Papers} />
      <Route path="/review" component={Review} />
      <Route path="/faqs" component={Faqs} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow animate-in">
          <Router />
        </main>
        <Footer />
      </div>
     
    </QueryClientProvider>
  );
}

export default App;
