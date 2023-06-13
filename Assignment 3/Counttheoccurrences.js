function wordCount(string) {
    const words = string.split(' ');
    const wordCountMap = new Map();
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (wordCountMap.has(word)) {
        wordCountMap.set(word, wordCountMap.get(word) + 1);
      } else {
        wordCountMap.set(word, 1);
      }
    }
    
    return wordCountMap;
  }
  const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum";
  const result = wordCount(text);
  console.log(result);
    