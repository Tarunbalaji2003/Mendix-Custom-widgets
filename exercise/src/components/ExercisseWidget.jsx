import React, { createElement, useState } from "react";
import '../ui/Exercise.css';

const api = {
    key: "783aaba01dmsh4d6258e9276ffdap1f8f29jsnbed481b82bab",
    host: "exercises-by-api-ninjas.p.rapidapi.com"
};

const types = [
    "cardio", "olympic_weightlifting", "plyometrics", "powerlifting",
    "strength", "stretching", "strongman"
];

const muscles = [
    "abdominals", "abductors", "adductors", "biceps", "calves", "chest",
    "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back",
    "neck", "quadriceps", "traps", "triceps"
];

const difficulties = ["beginner", "intermediate", "expert"];

export function ExerciseWidget({ sampleText }) {
    const [type, setType] = useState("");
    const [muscle, setMuscle] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchExercises = () => {
        setLoading(true);
        fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}&type=${type}&difficulty=${difficulty}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': api.key,
                'x-rapidapi-host': api.host
            }
        })
            .then(res => res.json())
            .then(result => {
                setExercises(result);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    return (
        <div className="widget-wrapper">
            <h2>{sampleText}</h2>
            <div className="filters">
                <select className="dropdown" onChange={e => setType(e.target.value)}>
                    <option value="">Select Type</option>
                    {types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
                <select className="dropdown" onChange={e => setMuscle(e.target.value)}>
                    <option value="">Select Muscle</option>
                    {muscles.map((muscle, index) => (
                        <option key={index} value={muscle}>{muscle}</option>
                    ))}
                </select>
                <select className="dropdown" onChange={e => setDifficulty(e.target.value)}>
                    <option value="">Select Difficulty</option>
                    {difficulties.map((level, index) => (
                        <option key={index} value={level}>{level}</option>
                    ))}
                </select>
                <button className="fetch-btn" onClick={fetchExercises}>
                    Fetch Exercises
                </button>
            </div>
            {loading && <p>Loading...</p>}
            <div className="exercise-list">
                {exercises.length > 0 && exercises.map((exercise, index) => (
                    <div key={index} className="exercise-item">
                        <h3>{exercise.name}</h3>
                        <p><strong>Type:</strong> {exercise.type}</p>
                        <p><strong>Muscle:</strong> {exercise.muscle}</p>
                        <p><strong>Equipment:</strong> {exercise.equipment}</p>
                        <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
                        <p><strong>Instructions:</strong> {exercise.instructions}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
