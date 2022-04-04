//Two actions are allowed:
//forward: Move forward 1 unit.
//double: If you at x point, then you can move to x*2 point.
//Your starting point is x, the target point is y.
//You need to reach to the target point with minimal steps.

function walkTo(x, y) {
    const forwardX = x + 1;
    const doubleX = x * 2;
    let countForward;
    let countDouble;
    if (forwardX === y || doubleX === y) {
        return 1;
    }
    if (doubleX < y) {
        countDouble = 1 + walkTo(doubleX, y);
    }
    if (forwardX < y) {
        countForward = 1 + walkTo(forwardX, y);
    }
    return (countDouble < countForward) ? countDouble : countForward;
}

