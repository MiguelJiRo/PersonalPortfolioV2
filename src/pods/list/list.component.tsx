import { routes } from "@/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MemberEntity } from "./list.vm";

interface Props {}

export const ListComponent: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Hello from List page</h2>
    </>
  );
};
