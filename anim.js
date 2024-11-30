// One span is zero, hence we can add
function addSpans(span1, span2) {
    if (span1 === 0 || span2 === 0) {
        return span1 + span2;
    }
    
    // Additional logic for adding spans when neither is zero
    return span1 + span2;
}

// Example usage
const spanA = 0;
const spanB = 5;
const result = addSpans(spanA, spanB);
console.log(`Result: ${result}`);  // Output: Result: 5
