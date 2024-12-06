const test = require('ava');
const {cwd} = require('process');
const {buildScenarios} = require('eleventy-test');


buildScenarios(cwd(), false, 'test/scenarios/', 'test/scenario-input/').then((results) => {
    test("outputDir overrides eleventy output dir", async (t) => {
        console.log(results["3--without-outputDir"].files)
    })
});
