/* there is a bug in material-color-util library*/

const { exec } = require("child_process");

exec("sh fix-material-color-util.sh", (error, stdout, stderr) => {
    console.log(stdout,stderr);
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
});
