const printSegitiga = (num) => {
    if (typeof num !== "number" || isNaN(num)) {
      return "Data harus berupa number!";
    }
  
    let output = "";
  
    for (let i = num; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        output += j + " ";
      }
      output += "\n";
    }
  
    return output;
  };

  console.log(printSegitiga(7));
  console.log(printSegitiga(3));
  console.log(printSegitiga("7"));
  console.log(printSegitiga("tiga"));
  console.log(printSegitiga([]));
  console.log(printSegitiga(NaN));
  