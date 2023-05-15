import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import img from "../assets/dp.jpg";
import { Cards } from "./Cards";
import { Gallery } from "../utils/constants";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid>
          <img
            width={150}
            height={150}
            style={{ borderRadius: "100px" }}
            src={img}
          />
        </Grid>
        <Grid>
          <h1 style={{ margin: 0, fontWeight: "bolder" }}>D Aperature</h1>
        </Grid>
        <Grid>
          <h3>
            • Pre wedding | baby shoot
            <br /> • For Contact : 7810091636
          </h3>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            gap: "2rem",
            margin: "0 0 2rem 0",
          }}
        >
          <Link to="/">
            <InstagramIcon sx={{ fontSize: "2.5rem" }} />
          </Link>
          <Link to="/">
            <WhatsAppIcon sx={{ fontSize: "2.5rem" }} />
          </Link>
          <Link to="/">
            <PlaceIcon sx={{ fontSize: "2.5rem" }} />
          </Link>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {Gallery.map((images) => (
            <Cards img={images} />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
