import ApexPage from "./pages/Charts/ApexPage";
import ExpressPage from "./pages/Charts/ExpressPage";
import ReChartsPage from "./pages/Charts/ReChartsPage";
import ReactChartjsPage from "./pages/Charts/ReactChartjsPage";
import MultiSelectorPage from "./pages/customComponents/MultiSelectorPage";
import StarRatingPage from "./pages/customComponents/StarRatingPage";
import TabsPage from "./pages/customComponents/TabsPage";
import TextExpanderPage from "./pages/customComponents/TextExpanderPage";
import WizardFormPage from "./pages/customComponents/WizardFormPage";
import Index from "./pages/dashboard/Index";
import StarterPage from "./pages/utility/StarterPage";

export const routes = [
  { path: "/", component: Index, Index: true },
  { path: "/apexpage", component: ApexPage, Index: false },
  { path: "/expresspage", component: ExpressPage, Index: false },
  { path: "/reactchartjspage", component: ReactChartjsPage, Index: false },
  { path: "/rechartspage", component: ReChartsPage, Index: false },
  { path: "/starterpage", component: StarterPage, Index: false },
  { path: "/textExpanderpage", component: TextExpanderPage, Index: false },
  { path: "/starratingpage", component: StarRatingPage, Index: false },
  { path: "/tabspage", component: TabsPage, Index: false },
  { path: "/multiselectorpage", component: MultiSelectorPage, Index: false },
  { path: "/wizardformpage", component: WizardFormPage, Index: false },
];
