import { foodList } from "./dummy";

export function recommendation({ alreadyTakenCalorie, canTakeCarorie }) {
  const restCalories = canTakeCarorie - alreadyTakenCalorie;

  const canEat = foodList.filter(
    ({ nutorition }) => nutorition.calorie < restCalories
  );

  function sortFunction(a, b) {
    if (a.nutorition.vitaminD > b.nutorition.vitaminD) return -1;
    if (a.nutorition.vitaminD < b.nutorition.vitaminD) return 1;
    return 0;
  }

  return { ok: canEat.length > 0, data: canEat.sort(sortFunction)[0] };
}

// source: https://keisan.casio.jp/exec/system/1161228736
export function calcCalorie({ weight, height, age }) {
  return 13.297 * weight + 4.799 * height - 5.677 * age + 88.362;
}
