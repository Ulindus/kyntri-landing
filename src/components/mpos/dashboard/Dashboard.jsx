import { useState } from "react";
import { Menu, X } from "lucide-react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Filters from "./Filters";
import KpiCards from "./KpiCards";
import ExecutiveSummary from "./ExecutiveSummary";
import SalesTrend from "./SalesTrend";
import SalesCategory from "./SalesCategory";
import SalesOutlet from "./SalesOutlet";
import TopProducts from "./TopProducts";
import DemandOpportunity from "./DemandOpportunity";
import BusinessHealth from "./BusinessHealth";
import OutletLeaderboard from "./OutletLeaderboard";
import KeyAlerts from "./KeyAlerts";
import RecommendedActions from "./RecommendedActions";
import FooterStatus from "./FooterStatus";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] shadow-2xl">

      <div className="flex">

        {/* Desktop Sidebar */}

        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}

        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />

            <div className="fixed left-0 top-0 z-50 h-full lg:hidden">
              <Sidebar />
            </div>
          </>
        )}

        {/* Main */}

        <main className="flex-1 bg-[#101826] p-4 sm:p-6 lg:p-8">

          {/* Mobile Button */}

          <div className="mb-4 flex justify-between lg:hidden">

            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-white/10 bg-[#0B1220] p-3"
            >
              <Menu size={22} />
            </button>

          </div>

          <Header />

          <Filters />

          <KpiCards />

          <ExecutiveSummary />

          {/* Row 1 */}

          <div
            className="
            mt-6
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-[2fr_1fr_1fr]
          "
          >
            <SalesTrend />

            <SalesCategory />

            <SalesOutlet />
          </div>

          {/* Row 2 */}

          <div
            className="
            mt-6
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-[2fr_1fr_1fr]
          "
          >
            <TopProducts />

            <DemandOpportunity />

            <BusinessHealth />
          </div>

          {/* Row 3 */}

          <div
            className="
            mt-6
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-3
          "
          >
            <OutletLeaderboard />

            <KeyAlerts />

            <RecommendedActions />
          </div>

          <FooterStatus />

        </main>

      </div>

    </div>
  );
}

export default Dashboard;