#!/usr/bin/env node
import { getArgs } from "./helper/args.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log("start weather", args);
};

initCLI();
