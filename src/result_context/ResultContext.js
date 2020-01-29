import {createContext} from "react";

export const ResultContext = createContext(
    new Map([
        [1, {label: "Szellemi ösztönzés", value: 0}],
        [2, {label: "Altruizmus", value: 0}],
        [3, {label: "Társas kapcsolatok", value: 0}],
        [4, {label: "Munkával kapcsolatos biztonság", value: 0}],
        [5, {label: "Anyagiak", value: 0}],
        [6, {label: "Önérvényesítés", value: 0}],
        [7, {label: "Változatosság", value: 0}],
        [8, {label: "Hierarchia", value: 0}],
        [9, {label: "Függetlenség", value: 0}],
        [10, {label: "Fizikai környezet", value: 0}],
        [11, {label: "Presztízs", value: 0}],
        [12, {label: "Munkateljesítmény", value: 0}],
        [13, {label: "Esztétikum", value: 0}],
        [14, {label: "Irányítás", value: 0}],
        [15, {label: "Kreativitás", value: 0}]
    ]));
export default ResultContext;