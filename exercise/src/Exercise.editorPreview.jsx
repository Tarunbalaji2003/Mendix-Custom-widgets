import { createElement } from "react";
import { ExerciseWidget} from "./components/ExercisseWidget";

export function preview({ sampleText }) {
    return <ExerciseWidget sampleText={sampleText} />;
}

export function getPreviewCss() {
    return require("./ui/Exercise.css");
}
