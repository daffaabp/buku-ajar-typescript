import { sayHello } from "../src/say-hello";

describe('sayHello', function () { 
    it ('should return hello daffa', function () {
        expect(sayHello('daffa')).toBe('Hello Daffa');
    });
});