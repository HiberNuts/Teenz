import React from "react";
import { useParams } from "react-router-dom";

export const Ordernow = () => {
	const { type } = useParams();

	return <div>{type}</div>;
};
