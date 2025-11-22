import Navbar from "../../components/Navbar";
import Mtc from "../../components/Mtc";
import React from "react";
import Sistamas from "../../components/Sistamas";
import Stablecoin from "../../components/Stablecoin";
import Pogomeet from "../../components/Pogomeet";
import Respaldado from "../../components/Respaldado";
import Gestio from "../../components/Gestio";
import Meetcards from "../../components/Meetcards";
import Ganameet from "../../components/Ganameet";
import Juega from "../../components/Juega";
import Metacoin from "../../components/MeetcoinNotched";

export default function Home() {
  return (
    <>
      <Navbar />
      <Mtc />
      <Sistamas />
      <Stablecoin />
      <Pogomeet />
      <Respaldado />
      <Gestio />
      <Meetcards />
      <Ganameet />
      {/* <Juega /> */}
      <Metacoin />
    </>
  );
}
