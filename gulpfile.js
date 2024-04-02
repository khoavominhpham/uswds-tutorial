// This connects your gulpfile to USWDS compiler's settings and functions
const uswds = require('@uswds/compile');
// We'll tell the compiler which version of USWDS to use with a setting.
uswds.settings.version = 3;
// The USWDS compiler's path settings allow you to customize where you want to save both your USWDS files, 
// and the styles you compile with the compiler. For example, use paths.dist.css to tell the compiler where to save your compiled styles. 
// Each path variable should start with the constant you defined in the last step. 
// (We've used uswds in our tutorial.) Paths are relative to the project root, the place where you made your gulpfile.
uswds.paths.dist.theme = './_theme';
uswds.paths.src.projectSass = './assets/css';
// The USWDS compiler has a number of functions available for compiling styles and scaffolding projects. 
// To use these functions, you need to export them using the format we show below: exports.[customName] = uswds.[function]. 
// You'll use any customName you just defined when you run the compiler in the next sections.
// https://github.com/uswds/uswds-gulp/tree/jm-gulp-4#functions
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
