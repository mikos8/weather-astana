const getArgs = (args) => {
  console.log("args > ", args);
  let res = {};
  const [executor, file, ...rest] = args;
  rest.forEach((value, index, array) => {
    // console.log("value = ", value,"index = ", index, "array = ", array);
    // console.log('------------------------------------------')
    if (value.charAt(0) == "-") {

      // console.log(" -- value.chartAt 0 = ", value.charAt(0));
      if (index == array.length - 1) {

        // console.log("index = array.length", index, "/ length ", array.length);
        res[value.substring(1)] = true;
        // console.log("res *value subsctring 1* :: ", res[value.substring(1)]);

      } else if (array[index + 1].charAt(0) != "-") {

        // console.log("array[index + 1] != - ", index + 1);
        res[value.substring(1)] = array[index + 1];
        // console.log("res[value subsctring] 1 :", array[index + 1]);

      } else {

        res[value.substring(1)] = true;
        // console.log("res *value subsctring 1* :: ", res[value.substring(1)]);
      
      }

    }
  });

  return res;
};

export { getArgs };
