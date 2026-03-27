import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Stack,
  Typography
} from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/currency";

function ProductGrid({ products }) {
  const dispatch = useDispatch();

  return (
    <Box id="products" sx={{ py: 6 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "flex-end" }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" } }}>
            Shop the edit
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 540 }}>
            A premium storefront interface with real Redux cart actions, quantity management, and persistent
            state.
          </Typography>
        </Box>
        <Chip label={`${products.length} products`} color="secondary" variant="outlined" />
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} lg={4} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                backgroundColor: "rgba(255, 253, 249, 0.92)",
                border: "1px solid rgba(31, 37, 32, 0.08)",
                transition: "transform 180ms ease, box-shadow 180ms ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 22px 44px rgba(31, 37, 32, 0.12)"
                }
              }}
            >
              <CardMedia component="img" height="260" image={product.image} alt={product.name} />
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, flexGrow: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Chip size="small" label={product.category} />
                  <Rating value={product.rating} precision={0.1} readOnly size="small" />
                </Stack>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography color="text.secondary">{product.description}</Typography>
                </Box>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5">{formatCurrency(product.price)}</Typography>
                  <Button
                    variant="contained"
                    startIcon={<AddShoppingCartRoundedIcon />}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to cart
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductGrid;
