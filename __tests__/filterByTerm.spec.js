/**
 * I was inspired by reading this article on Test-Driven Development as well as
 * some advice from a college classmate, former Beijing expat, and bootcamp grad
 * Nick Char now working at Stride Software Consulting...
 */


/* describe is a Jest method for containing related tests 
it takes two args: first a string describing the test suite
and second a callback/after function for wrapping the actual test
*/


// begin tests
describe("Filter function", () => {

    //test stuff goes in here
    test("it should filter by a search term (link)", () => {
        //actual test

        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" },
        ]; // end of const input varDeclare

        const output = [ { id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output); 

        expect(filterByTerm(input, "LINK")).toEqual(output); // new test for case insensitivity

    }); // end of test block


}); // end of describe block

/**
 * I don't understand why this appears to make both tests fail is it because 
 * this is a test suite so if any single expect statement fails the entire 
 * suit fails? and the suite itself only counts as a single test? after 
 * running npm test it says "1 failed, 1 total" for BOTH "Test Suites" 
 * and "Tests." ok so now that it passes it SAYS "1 passed, 1 total". 
 * so the question is now, what is the difference between Test Suites 
 * and Tests? Actually it's probably fairly straightforward: I was hastily 
 * assuming that "Test" would represent the "expect" statements but it
 * PROBABLAYY represents the "test" statements who woulda thunk?
 * And Test Suite is probably the describe block
 * 
 */

// begin filter function definition 
function filterByTerm(inputArr, searchTerm) {
    
    // case insensitive reg expression evolves from searchTerm
    const regex = new RegExp(searchTerm, 'i'); 

    return inputArr.filter( function(arrayElement) {
        return arrayElement.url.match(regex)
    })
}




