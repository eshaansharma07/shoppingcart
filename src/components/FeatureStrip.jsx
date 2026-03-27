import { Grid, Paper, Typography } from "@mui/material";

const features = [
  {
    title: "Redux Toolkit Store",
    description: "Centralized cart state with concise reducers and DevTools-friendly configuration."
  },
  {
    title: "Persistent Cart",
    description: "Cart items are restored automatically from localStorage after refresh or revisit."
  },
  {
    title: "Vercel API Routes",
    description: "A lightweight backend serves products through `/api/products` for full-stack deployment."
  }
];

function FeatureStrip() {
  return (
    <Grid container spacing={2} id="features" sx={{ py: 2 }}>
      {features.map((feature) => (
        <Grid item xs={12} md={4} key={feature.title}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              borderRadius: "28px",
              backgroundColor: "rgba(255, 255, 255, 0.68)",
              border: "1px solid rgba(31, 37, 32, 0.08)"
            }}
          >
            <Typography variant="h5" gutterBottom>
              {feature.title}
            </Typography>
            <Typography color="text.secondary">{feature.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default FeatureStrip;
