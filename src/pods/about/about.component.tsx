import { routes } from "@/core";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

export const AboutComponent: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Hello from About page</h2>
    </>
  );
};
