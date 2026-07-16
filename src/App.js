import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import PageLoader from "./components/ui/PageLoader";
import BackToTop from "./components/ui/BackToTop";

const MainPage = lazy(() => import("./components/pages/MainPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ProductsPage = lazy(() => import("./components/pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./components/pages/ProductDetailPage"));
const DealerPage = lazy(() => import("./components/pages/DealerPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const WarrantyPage = lazy(() => import("./components/pages/WarrantyPage"));
const CommercialWarrantyPage = lazy(() => import("./components/pages/CommercialWarrantyPage"));
const TireIQPage = lazy(() => import("./components/pages/TireIQPage"));
const RegistrationPage = lazy(() => import("./components/pages/RegistrationPage"));

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/dealers" element={<DealerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/warranty" element={<WarrantyPage />} />
          <Route path="/commercial-warranty" element={<CommercialWarrantyPage />} />
          <Route path="/tire-iq" element={<TireIQPage />} />
          <Route path="/tire-registration" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <BackToTop />
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
