function quicksort(arr) {
    // Hvis arrayen har mindre enn 2 elementer, returner den som den er
    if (arr.length < 2) {
      return arr;
    }
  
    // Velg et pivot-element
    const pivot = arr[0];
  
    // Opprett to arrayer til å holde elementer som er større og mindre enn pivot
    const less = [];
    const greater = [];
  
    // Gå gjennom alle elementene i arrayen (unntatt pivot-elementet)
    for (let i = 1; i < arr.length; i++) {
      // Hvis elementet er mindre enn pivot, legg det i less-arrayen
      if (arr[i] < pivot) {
        less.push(arr[i]);
      } else {
        // Ellers, legg det i greater-arrayen
        greater.push(arr[i]);
      }
    }
  
    // Returner en sortert versjon av less-arrayen, pivot-elementet, og så en sortert versjon av greater-arrayen
    return [...quicksort(less), pivot, ...quicksort(greater)];
}

const numbers = [5, 4, 3, 2, 1];
const sortedNumbers = quicksort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]