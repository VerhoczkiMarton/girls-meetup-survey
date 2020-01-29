import {createContext} from "react";

const SurveyContext = createContext(
    new Map([
        [1, {label: "szüntelenül új, megoldatlan problémákba ütközik", value: 0, resultId: 1}],
        [2, {label: "másokon segíthet", value: 0, resultId: 2}],
        [3, {label: "sok pénzt kereshet", value: 0, resultId: 5}],
        [4, {label: "változatos munkát végezhet", value: 0, resultId: 7}],
        [5, {label: "szabadon dönthet saját területén", value: 0, resultId: 9}],
        [6, {label: "tekintélyt szerezhet munkájával", value: 0, resultId: 11}],
        [7, {label: "akár művész is lehet", value: 0, resultId: 13}],
        [8, {label: "-t munkatársai befogadják", value: 0, resultId: 3}],
        [9, {label: "biztos lehet abban, hogy feladatot kap", value: 0, resultId: 4}],
        [10, {label: "megvalósítja önmagát", value: 0, resultId: 6}],
        [11, {label: "tisztelheti főnökét", value: 0, resultId: 8}],
        [12, {label: "szép környezetben dolgozhat", value: 0, resultId: 10}],
        [13, {label: "nem beszélhet mellé, mert csak jó, vagy rossz megoldások léteznek", value: 0, resultId: 12}],
        [14, {label: "másokat irányíthat", value: 0, resultId: 14}],
        [15, {label: "új elképzeléseket alakíthat ki", value: 0, resultId: 15}],
        [16, {label: "valami újat alkothat", value: 0, resultId: 15}],
        [17, {label: "objektívan lemérheti munkája eredményét", value: 0, resultId: 12}],
        [18, {label: "vezetője mindig helyesen dönt", value: 0, resultId: 8}],
        [19, {label: "mindig megfelelő munkával rendelkezik", value: 0, resultId: 4}],
        [20, {label: "szebbé teheti a világot", value: 0, resultId: 13}],
        [21, {label: "önálló döntéseket hozhat", value: 0, resultId: 9}],
        [22, {label: "gondatlan életet biztosíthat magának", value: 0, resultId: 5}],
        [23, {label: "új gondolatokkal találkozhat", value: 0, resultId: 1}],
        [24, {label: "vezetői képességeire szükség lehet", value: 0, resultId: 14}],
        [25, {label: "kényelmes körülmények között élhet", value: 0, resultId: 10}],
        [26, {label: "személyes életstílusa érvényesülhet", value: 0, resultId: 6}],
        [27, {label: "munkatársai egyben barátai is", value: 0, resultId: 3}],
        [28, {label: "biztos lehet afelől, hogy munkájáért a többiek megbecsülik", value: 0, resultId: 11}],
        [29, {label: "nem csinálja minduntalan ugyanazt", value: 0, resultId: 7}],
        [30, {label: "jót tehet mások érdekében", value: 0, resultId: 2}],
        [31, {label: "más emberek javát szolgálhatja", value: 0, resultId: 2}],
        [32, {label: "sokféle dolgot csinálhat", value: 0, resultId: 7}],
        [33, {label: "-re mások felnéznek", value: 0, resultId: 11}],
        [34, {label: "jól kijön a munkatársaival", value: 0, resultId: 3}],
        [35, {label: "olyan életet élhet, amit a legjobban szeret", value: 0, resultId: 6}],
        [36, {label: "nyugodtan dolgozhat (csend, tisztaság, stb.)", value: 0, resultId: 10}],
        [37, {label: "mások munkáját is irányíthatja", value: 0, resultId: 14}],
        [38, {label: "szellemileg izgalmas munkát végezhet", value: 0, resultId: 1}],
        [39, {label: "magas nyugdíjra számíthat", value: 0, resultId: 5}],
        [40, {label: "munkájába másnak nincs beleszólása", value: 0, resultId: 9}],
        [41, {label: "szépet teremthet", value: 0, resultId: 13}],
        [42, {label: "biztos lehet abban, hogy megfelelő munkát kap, ha az adott munka valamilyen okból megszűnik", value: 0, resultId: 4}],
        [43, {label: "vezetője megértő", value: 0, resultId: 8}],
        [44, {label: "szüntelenül fejlesztheti, tökéletesítheti önmagát", value: 0, resultId: 12}],
        [45, {label: "új ötleteire mindig szükség van", value: 0, resultId: 15}]
    ])
);

export default SurveyContext;