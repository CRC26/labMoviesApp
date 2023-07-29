import React from "react";
import HeaderMovie from "../components/headerMovie";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Movie Details Page/MovieHeader",
  component: HeaderMovie,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

 export const Basic = () => <HeaderMovie movie={SampleMovie} />;

 Basic.storyName = "Default";
