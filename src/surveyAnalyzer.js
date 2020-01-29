const calcualate = (surveyContext) => {
    const result = new Map([
        [1, { value: 0}],
        [2, { value: 0}],
        [3, { value: 0}],
        [4, { value: 0}],
        [5, { value: 0}],
        [6, { value: 0}],
        [7, { value: 0}],
        [8, { value: 0}],
        [9, { value: 0}],
        [10, { value: 0}],
        [11, { value: 0}],
        [12, { value: 0}],
        [13, { value: 0}],
        [14, { value: 0}],
        [15, { value: 0}]
    ]);

    surveyContext.forEach((value, key) => {
        result.get(value.resultId).value +=  value.value;
    });
    return result;
};

export default calcualate