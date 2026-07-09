import Navbar from "../components/mpos/Navbar";

import MposHero from "../components/mpos/MposHero";
import MposFeatures from "../components/mpos/MposFeatures";
import MposAnalytics from "../components/mpos/MposAnalytics";
import MposInventory from "../components/mpos/MposInventory";
import MposOperations from "../components/mpos/MposOperations";
import MposCTA from "../components/mpos/MposCTA";
import Footer from "../components/Footer";

function MposPage() {
  return (
    <>
      <Navbar />

      <MposHero />
      <MposFeatures />
      <MposAnalytics />
      <MposInventory />
      <MposOperations />
      <MposCTA />

      <Footer />
    </>
  );
}

export default MposPage;