import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this Page!</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
