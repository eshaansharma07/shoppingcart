import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

function HeroSection({ onBrowseProducts }) {
  return (
    <Grid container spacing={4} alignItems="center" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <Chip
            icon={<AutoAwesomeRoundedIcon />}
            label="Beautiful Redux Toolkit shopping cart"
            sx={{
              width: "fit-content",
              backgroundColor: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(31, 37, 32, 0.08)"
            }}
          />
          <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "4.8rem" }, lineHeight: 1 }}>
            Curated gear
            <Box component="span" sx={{ color: "primary.main", display: "block" }}>
              with a smarter cart
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 540, fontWeight: 500 }}>
            Explore a polished product catalog, manage quantities with Redux Toolkit, and keep every cart
            item persisted between refreshes using localStorage.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button size="large" variant="contained" onClick={onBrowseProducts}>
              Shop the collection
            </Button>
            <Button size="large" variant="outlined" href="#features">
              See features
            </Button>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Chip icon={<FlashOnRoundedIcon />} label="Fast Redux updates" variant="outlined" />
            <Chip icon={<ShieldRoundedIcon />} label="Cart persistence built in" variant="outlined" />
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: "relative",
            minHeight: 420,
            borderRadius: "36px",
            overflow: "hidden",
            p: { xs: 3, md: 4 },
            background:
              "linear-gradient(160deg, rgba(36, 92, 86, 0.92) 0%, rgba(200, 76, 47, 0.88) 100%)",
            boxShadow: "0 30px 90px rgba(31, 37, 32, 0.16)"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top, rgba(255,255,255,0.24), transparent 35%), radial-gradient(circle at bottom left, rgba(255,255,255,0.14), transparent 30%)"
            }}
          />
          <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
            <Box
              sx={{
                alignSelf: "flex-end",
                width: { xs: 180, md: 210 },
                p: 2.5,
                borderRadius: "24px",
                backgroundColor: "rgba(255,255,255,0.14)",
                color: "white",
                backdropFilter: "blur(12px)"
              }}
            >
              <Typography variant="overline">Cart sync</Typography>
              <Typography variant="h4">Redux + UI</Typography>
              <Typography variant="body2" sx={{ opacity: 0.82 }}>
                Reliable state, graceful persistence, cleaner checkout flow.
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 4,
                maxWidth: 360,
                p: 3,
                borderRadius: "28px",
                backgroundColor: "#fffaf2",
                transform: { md: "rotate(-6deg)" }
              }}
            >
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Featured bundle
              </Typography>
              <Typography variant="h4" gutterBottom>
                Studio essentials
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Pick premium devices, adjust quantities instantly, and keep your selections waiting when you
                return.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default HeroSection;
