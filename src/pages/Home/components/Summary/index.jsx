import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { SUMMARY } from "constants/contents";
import React from "react";

const Summary = () => {
  return (
    <Box py={{ md: "6em",xs:"4em" }} id="services">
      <Typography textAlign={"center"} fontSize={{ md: "2.5em",xs:"1.7em" }} pb={{md:7,xs:0}}>
        SERVICES
      </Typography>
      <Container maxWidth="md">
        <Grid container columnSpacing={6}>
          {SUMMARY.map((i) => (
            <Grid
              item
              md={4}
              sm={6}
              mt={{xs:3}}
              sx={{
                textAlign: "center",
                "&:nth-child(1)": { mt: {md:"8em"} },
                "&:nth-child(2)": { mt: {md:"4.5em"} },
                "&:nth-child(4)": { mt: {md:"8em"} },
                "&:nth-child(5)": { mt: {md:"4.5em"} },
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box boxShadow={8} borderRadius={3} p={4} height={"430px"}>
                <Box
                  position={"relative"}
                  left={"30%"}
                  sx={{ transform: "translatX(-50% -50%)" }}
                  width={"60px"}
                  height={"60px"}
                  borderRadius={"50%"}
                  bgcolor={"#3c096c"}
                  padding={2}
                  boxShadow={10}
                  
                >
                  <img
                    style={{
                      position: "absolute",
                      width: "68px",
                      left: "15%",
                      transform: "translat(-50% -50%)",
                    }}
                    src={i.logo}
                    alt="Iogo"
                  />
                </Box>
                <Typography fontSize={"1.3em"} fontWeight={500} mt={5} color={"gray"}>
                  {i.title}
                </Typography>
                <Typography fontSize={"14px"} py={3}>
                  {i.description}
                </Typography>
                <Button
                  sx={{
                    p: ".9em 3em",
                    color: "black",
                    border: "1px solid black",
                    mt: "2em",

                    "&:hover": {
                      backgroundColor: "rgb(13, 56, 94)",
                      color: "white",
                    },
                  }}
                >
                  More Info
                </Button>
              </Box>
            </Grid>
          ))}
          {/* <Grid container spacing={6} pt={"5em"}>
            {SERVICES.map((i) => (
              <Grid item md={6} sx={{ textAlign: "center" }}>
                <Typography fontSize={"1.5em"}>{i.title}</Typography>
                <Typography fontSize={"14px"} py={3}>
                  {i.description}
                </Typography>
                <Button
                  sx={{
                    p: ".9em 3em",
                    color: "black",
                    border: "1px solid black",
                    mt:{md: "2em"},
                    mb:{md:0,xs:"1em"},
                    "&:hover": {
                      backgroundColor: "rgb(13, 56, 94)",
                      color: "white",
                    },
                  }}
                >
                  More Info
                </Button>
              </Grid>
            ))}
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Summary;
