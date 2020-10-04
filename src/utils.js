import { foodList } from "./dummy";

export function recommendation({
  alreadyTakenCalorie,
  canTakeCalorie,
  ate = [],
}) {
  const restCalories = canTakeCalorie - alreadyTakenCalorie?.calorie;
  const canEat = foodList
    .filter(({ id }) => !ate.includes(id))
    .filter(({ nutorition }) => nutorition.calorie < restCalories);

  function sortFunction(a, b) {
    if (a.nutorition.vitaminD > b.nutorition.vitaminD) return -1;
    if (a.nutorition.vitaminD < b.nutorition.vitaminD) return 1;
    return 0;
  }

  return { ok: canEat.length > 0, data: canEat.sort(sortFunction)[0] };
}

// source: https://keisan.casio.jp/exec/system/1161228736
export function calcCalorie({ weight, height, age, gender }) {
  if (gender === 1) {
    return 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
  } else if (gender === 2) {
    return 13.297 * weight + 4.799 * height - 5.677 * age + 88.362;
  } else {
    return 13.297 * weight + 4.799 * height - 5.677 * age + 88.362;
  }
}
