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
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] shadow-2xl">

      <div className="flex min-h-[1600px]">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-[#101826] p-8 overflow-y-auto">

          {/* Header */}
          <Header />

          {/* Filters */}
          <Filters />

          {/* KPI Cards */}
          <KpiCards />

          {/* Executive Summary */}
          <ExecutiveSummary />

          {/* Analytics Row 1 */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr_1fr]">

            <SalesTrend />

            <SalesCategory />

            <SalesOutlet />

          </div>

          {/* Analytics Row 2 */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr_1fr]">

            <TopProducts />

            <DemandOpportunity />

            <BusinessHealth />

          </div>

          {/* Analytics Row 3 */}
          <div className="mt-6 grid gap-6 xl:grid-cols-3">

            <OutletLeaderboard />

            <KeyAlerts />

            <RecommendedActions />

          </div>

          {/* Footer */}
          <FooterStatus />

        </main>

      </div>

    </div>
  );
}

export default Dashboard;