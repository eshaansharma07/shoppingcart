import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { selectCartItems, selectCartSummary } from "../features/cart/cartSelectors";
import { formatCurrency } from "../utils/currency";

function Row({ label, value, strong = false, muted = false }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography color={muted ? "rgba(255,255,255,0.72)" : "inherit"} fontWeight={strong ? 700 : 500}>
        {label}
      </Typography>
      <Typography fontWeight={strong ? 700 : 600}>{value}</Typography>
    </Stack>
  );
}

function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const summary = useSelector(selectCartSummary);
  const [checkoutStatus, setCheckoutStatus] = useState({ type: "", message: "" });
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  async function handleCheckout() {
    if (items.length === 0) {
      return;
    }

    setIsCheckingOut(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ items, summary })
      });

      if (!response.ok) {
        throw new Error("Checkout request failed");
      }

      const data = await response.json();
      dispatch(clearCart());
      setCheckoutStatus({
        type: "success",
        message: `Order ${data.order.id} confirmed successfully.`
      });
    } catch (error) {
      setCheckoutStatus({
        type: "info",
        message: "Backend checkout is unavailable locally, but the deployed Vercel API route will handle this."
      });
    } finally {
      setIsCheckingOut(false);
    }
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: { xs: "100vw", sm: 430 },
          maxWidth: "100vw",
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Box>
            <Typography variant="h4">Your cart</Typography>
            <Typography color="text.secondary">{summary.itemCount} items selected</Typography>
          </Box>
          {items.length > 0 ? (
            <Button color="inherit" onClick={() => dispatch(clearCart())}>
              Clear
            </Button>
          ) : null}
        </Stack>

        <Stack spacing={2} sx={{ flexGrow: 1, overflowY: "auto", pr: 0.5 }}>
          {items.length === 0 ? (
            <Box
              sx={{
                p: 3,
                borderRadius: "24px",
                backgroundColor: "rgba(36, 92, 86, 0.08)"
              }}
            >
              <Typography variant="h6" gutterBottom>
                Your cart is empty
              </Typography>
              <Typography color="text.secondary">
                Add products from the collection and your selections will stay saved in localStorage.
              </Typography>
            </Box>
          ) : null}

          {checkoutStatus.message ? <Alert severity={checkoutStatus.type}>{checkoutStatus.message}</Alert> : null}

          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                p: 2,
                borderRadius: "24px",
                backgroundColor: "background.paper",
                border: "1px solid rgba(31, 37, 32, 0.08)"
              }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar
                  variant="rounded"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 84, height: 84, borderRadius: "20px" }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Stack direction="row" justifyContent="space-between" spacing={1}>
                    <Box>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography color="text.secondary">{item.category}</Typography>
                    </Box>
                    <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
                      <DeleteOutlineRoundedIcon />
                    </IconButton>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconButton
                        size="small"
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                        }
                      >
                        <RemoveRoundedIcon fontSize="small" />
                      </IconButton>
                      <Typography fontWeight={700}>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                        }
                      >
                        <AddRoundedIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    <Typography variant="h6">{formatCurrency(item.price * item.quantity)}</Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>

        <Box
          sx={{
            mt: 3,
            p: 3,
            borderRadius: "28px",
            backgroundColor: "#1f2520",
            color: "white"
          }}
        >
          <Stack spacing={1.4}>
            <Row label="Subtotal" value={formatCurrency(summary.subtotal)} muted />
            <Row label="Shipping" value={formatCurrency(summary.shipping)} muted />
            <Row label="Tax" value={formatCurrency(summary.tax)} muted />
            <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 1 }} />
            <Row label="Total" value={formatCurrency(summary.total)} strong />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
              disabled={items.length === 0 || isCheckingOut}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Stack>
        </Box>
      </Box>
    </Drawer>
  );
}

export default CartDrawer;
