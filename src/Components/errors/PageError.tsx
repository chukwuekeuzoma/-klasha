import React from "react";
import { useRouteError } from "react-router-dom";

interface ComponentError {
  data?: string;
  error?: string;
  status?: number;
  statusText?: string;
}

interface Props {
  error: ComponentError;
}

const ErrorPage: React.FC<Props> = ({ error }) => {
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        Sorry, an unexpected error has occurred or the link still under
        maintainace Check out Dashboard and Transaction page .
      </p>
      <p>
        <i>
          {error.status} {error.statusText}
        </i>
      </p>
    </div>
  );
};

export default function useErrorPage() {
  const error = useRouteError() as ComponentError;
  return <ErrorPage error={error} />;
}
