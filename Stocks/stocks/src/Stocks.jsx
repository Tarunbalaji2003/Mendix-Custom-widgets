import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Stocks.css";

export function Stocks({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
