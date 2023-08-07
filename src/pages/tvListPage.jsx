import React from "react";
import TemplateTvList from "../components/templateTvListPage";
import { getTv } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

 const TvListPage = () => {
    const { data, error, isLoading, isError } = useQuery("discovery", getTv);

    if (isLoading) {
     return <Spinner />;
   }
   if (isError) {
     return <h1>{error.message}</h1>;
   }
     const tv = data ? data.results : [];
 
   return (
     <TemplateTvList
       title="Discover TV"
       tv={tv}
       action={(tv) => {

       }}
     />
   );
 };
export default TvListPage;