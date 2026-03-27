import { AppBar, Badge, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useSelector } from "react-redux";
import { selectCartSummary } from "../features/cart/cartSelectors";

function Header({ onOpenCart }) {
  const summary = useSelector(selectCartSummary);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(31, 37, 32, 0.08)"
      }}
    >
      <Toolbar sx={{ py: 1.5 }}>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              display: "grid",
              placeItems: "center",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #c84c2f 0%, #e99b4d 100%)",
              color: "white"
            }}
          >
            <ShoppingBagRoundedIcon />
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight={700}>
              CartCraft
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Redux storefront
            </Typography>
          </Box>
        </Stack>

        <Button color="inherit" onClick={onOpenCart} startIcon={<LocalMallOutlinedIcon />}>
          <Badge badgeContent={summary.itemCount} color="primary">
            <span>Cart</span>
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
