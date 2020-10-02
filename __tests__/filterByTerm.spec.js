/**
 * I was inspired by reading this article on Test-Driven Development as well as
 * some advice from a college classmate, former Beijing expat, and bootcamp grad
 * Nick Char now working at Stride Software Consulting...
 */


/* describe is a Jest method for containing related tests 
it takes two args: first a string describing the test suite
and second a callback/after function for wrapping the actual test
*/

// begin filter function definition 
function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter( function(arrayElement) {
        return arrayElement.url.match(searchTerm)
    })
}


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
    }); // end of test block


}); // end of describe block


