const test = require('ava');
const {cwd} = require('process');
const { readdirSync } = require('fs');
const {join} = require("path");
const {buildScenarios} = require('eleventy-test');

test("outputDir overrides eleventy output dir", async (t) => {
    buildScenarios(cwd(), false, 'test/scenarios/', 'test/scenario-input/').then((results) => {
    
        console.log(results["3--with-outputDir"]._files)
        console.log(results["3--without-outputDir"].files)
        // Has no outputDir defined, defaults to eleventyConfig directory
        t.is(Object.keys(results["3--without-outputDir"].files).length, 1)
        // Has an outputDir defined, overrides eleventyConfig directory
        t.is(Object.keys(results["3--with-outputDir"].files).length, 1)
        t.is(readdirSync("test/scenarios/3--with-outputDir/overriden-outDir/").length, 6)
    })
});
