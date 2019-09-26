const { exec } = require("child_process");

const iconFontName = "fh-icon";
const cssPrefix = "fh";
const cmd = `icon-font-generator svg/**/*.svg -o dist --name ${iconFontName} --prefix ${cssPrefix}`;

exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }

  console.log(`stdout: ${stdout}`);
});
