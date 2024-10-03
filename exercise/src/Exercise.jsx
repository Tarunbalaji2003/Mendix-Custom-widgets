import { createElement } from "react";

import { ExerciseWidget} from "./components/ExercisseWidget";
import "./ui/Exercise.css";

export function Exercise({ sampleText }) {
    return <ExerciseWidget sampleText={sampleText} />;
}
