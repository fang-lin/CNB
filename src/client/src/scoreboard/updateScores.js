
const delayMilliseconds = 7000;

const updateWithDelay = (update) => {
    setTimeout(() => {
        update(); 
    }, delayMilliseconds);
}

export const updateScores = (scores, {winner, draw}) => {

    if (!scores) return;

    if (draw) {
        scores.BONUS.add(1, scores).then(updateWithDelay);
        return;
    }

    const winnerScore = scores[winner];
    if (!winnerScore) return;

    const bonusPoints = scores.BONUS.value;
    const pointsToAdd = 1 + bonusPoints;

    if (bonusPoints) {
        scores.BONUS.subtract(bonusPoints).then(updateWithDelay)
    }

    winnerScore.add(pointsToAdd, scores).then(updateWithDelay);
}