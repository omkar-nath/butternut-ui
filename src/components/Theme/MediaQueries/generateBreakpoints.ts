export const breakpoints = ["xs", "sm", "md", "lg", "xl"];

function sortBreakPointValues(values) {
  const breakpointsArray =
    Object.keys(values).map((key) => ({ key, val: values[key] })) || [];
  breakpointsArray.sort((a, b) => a.val - b.val);
  return breakpointsArray.reduce((acc, obj) => {
    return { ...acc, [obj.key]: obj.val };
  }, {});
}

export default function createBreakpoints(breakpoints) {
  const {
    values = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit = "px",
    step = 5,
    ...other
  } = breakpoints;

  const sortedValues = sortBreakPointValues(values);
  const keys = Object.keys(sortedValues);

  function up(key) {
    const value = typeof values[key] === "number" ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const value = typeof values[key] === "number" ? values[key] : key;

    return `@media (max-width:${value}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);

    return (
      `@media (min-width:${
        typeof values[start] === "number" ? values[start] : start
      }${unit}) and ` +
      `(max-width:${
        (endIndex !== -1 && typeof values[keys[endIndex]] === "number"
          ? values[keys[endIndex]]
          : end) -
        step / 100
      }${unit})`
    );
  }

  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }

    return between(key, keys[keys.indexOf(key) + 1]).replace(
      "@media",
      "@media not all and"
    );
  }

  return {
    keys,
    values: sortBreakPointValues,
    up,
    down,
    between,
    only,
    not,
    unit,
    ...other,
  };
}
