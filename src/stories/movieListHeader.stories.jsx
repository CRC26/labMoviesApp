import React from "react";
import Header from "../components/headerMovieList";
import { MemoryRouter } from "react-router";
//import { MoviesContextProvider } from "../contexts/moviesContext";

export default {
  title: "Home Page/Header",
  component: Header,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    //(Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <Header title={'Discover Movies'} />;

Basic.storyName = "Default";

