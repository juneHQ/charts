import { twMerge } from "tailwind-merge";
import { ValueFormatter } from "../../configurationTypes";
import { visualizationColors } from "./colors.tsx";

export const getYAxisDomain = (
  autoMinValue: boolean,
  minValue: number | undefined,
  maxValue: number | undefined,
) => {
  const minDomain = autoMinValue ? "auto" : minValue ?? 0;
  const maxDomain = maxValue ?? "auto";
  return [minDomain, maxDomain];
};

export const constructCategoryColors = (
  categories: string[],
  colors: string[],
): Map<string, string> => {
  const categoryColors = new Map<string, string>();
  categories.forEach((category, idx) => {
    categoryColors.set(category, colors[idx]);
  });
  return categoryColors;
};

export function deepEqual(obj1: any, obj2: any) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

export function cx(
  ...args: Array<undefined | null | string | boolean>
): string {
  return twMerge(
    args
      .flat()
      .filter((x) => typeof x === "string")
      .join(" "),
  );
}

export const defaultValueFormatter: ValueFormatter = (value: number) =>
  value.toString();

// We use this internally at June to track the loaded state of the chart when taking screenshots for things like Email & Slack digests
export function addLoadedIdToElement() {
  const elements = document.getElementsByClassName(
    `recharts-responsive-container`,
  );
  if (elements.length > 0 && elements[0]) {
    elements[0].id = "loaded";
  }
}

/**
 * Returns a June visualization color deterministically based on the input.
 * @param input - string or number
 */
export function imagineColor(input: number | string): string {
  const index = typeof input === "number" ? input : getUniqueColorIndex(input);
  return visualizationColors[index % visualizationColors.length];
}

function getUniqueColorIndex(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Ensures the hash is a 32-bit integer
  }
  return Math.abs(hash);
}
