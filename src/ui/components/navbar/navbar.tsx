//mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link color="inherit" sx={{ textDecoration: "none" }} mr={2} href="/">
            Home
          </Link>
          <Link
            color="inherit"
            sx={{ textDecoration: "none" }}
            mr={2}
            href="/excercises"
          >
            Excercises
          </Link>
          <Link
            color="inherit"
            sx={{ textDecoration: "none" }}
            mr={2}
            href="/workouts"
          >
            Workouts
          </Link>
          <Link color="inherit" sx={{ textDecoration: "none" }} href="/creator">
            Workout Creator
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
