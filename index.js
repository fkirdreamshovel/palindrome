// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
  }
  
  function Phrase(content) {
    this.content = content;
  
    this.processor = function(string) {
      return this.content.toLowerCase();
    }
  
    this.processedContent = function processedContent() {
      return this.processor(this.content);
    }
  
    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
      return this.processedContent() === reverse(this.processedContent());
    }
  }
  
  function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
  
    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
      return this.processor(this.translation);
    }
  }

  //adds a blank detector to the native String protoype
  String.prototype.blank = function() {
   return !!this.match(/^\s*$/g);
  } 

//adds a last method to the native Array prototype
Array.prototype.last = function() {
  return this.slice(-1);
}