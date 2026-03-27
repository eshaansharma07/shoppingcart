import { useEffect, useMemo, useState } from "react";
import { Alert, Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureStrip from "./components/FeatureStrip";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import { fallbackProducts } from "./data/fallbackProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Unable to fetch products");
        }

        const data = await response.json();

        if (active) {
          setProducts(data.products ?? []);
          setError("");
        }
      } catch (fetchError) {
        if (active) {
          setProducts(fallbackProducts);
          setError("API unavailable locally, so fallback product data is being used.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      active = false;
    };
  }, []);

  const productCountLabel = useMemo(() => `${products.length} curated picks`, [products.length]);

  return (
    <Box>
      <Header onOpenCart={() => setCartOpen(true)} />

      <Container maxWidth="xl" sx={{ py: 2, pb: 8 }}>
        <HeroSection
          onBrowseProducts={() =>
            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
          }
        />

        <FeatureStrip />

        <Stack spacing={2} sx={{ mt: 4 }}>
          <Typography variant="overline" color="text.secondary">
            {productCountLabel}
          </Typography>

          {error ? <Alert severity="info">{error}</Alert> : null}

          {loading ? (
            <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 8 }}>
              <CircularProgress color="primary" />
              <Typography color="text.secondary">Loading products from the backend...</Typography>
            </Stack>
          ) : (
            <ProductGrid products={products} />
          )}
        </Stack>
      </Container>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </Box>
  );
}

export default App;
