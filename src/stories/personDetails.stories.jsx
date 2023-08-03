import React from "react";
import PersonDetails from "../components/personDetails";
import SamplePerson from "./sampleData";

export default {
  title: "Person Details Page/PersonDetails",
  component: ActorDetails,
};

export const Basic = () => <PersonDetails person={SamplePerson} />;
Basic.storyName = "Default";