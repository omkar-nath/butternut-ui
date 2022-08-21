function memoize(fun) {
  const cache = {};
  return (arg) => {
    if (cache[arg] === undefined) cache[arg] = fun(arg);

    return cache[arg];
  };
}

export default memoize;
