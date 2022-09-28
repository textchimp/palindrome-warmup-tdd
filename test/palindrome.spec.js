const palindrome = require('../palindrome');

describe('palindrome()', () => {

  it('should return true for a palindromic number', () => {
    expect( palindrome(123321) ).toBe( true );
    expect( palindrome(456.654) ).toBe( true );
    expect( palindrome(1) ).toBe( true );
    expect( palindrome(0) ).toBe( true );
  });
  
  it('should return false for a NON-palindromic number', () => {
    expect( palindrome(123456) ).toBe( false );
    expect( palindrome(-123321) ).toBe( false );
    expect( palindrome(123.789) ).toBe( false );
  });


  // Bonus 1: uncomment to test
  //
  // it('should return null when passed a non-number', () => {
  //   expect( palindrome('123') ).toBe( null );
  // });


  // Bonus 2: uncomment to test
  // NOTE: Bonus 1 & 2 are mutually exclusive - either return
  // null OR throw an error, not both; don't uncomment both
  // tests at the same time
  //
  // it('should throw an error when passed a non-number', () => {
  //   // NOTE: Error-throwing tests need to be wrapped in a function
  //   // to be able to detect thrown errors
  //   expect( () => palindrome( '123' ) ).toThrowError('Bad argument');
  // });



}); // describe palindrome()
