function hashStringToInt(s, tableSize){
    let hash = 17;

    for ( let i = 0; i < s.length; i++ ){
      hash = (13 * hash * s.charCodeAt(i)) % tableSize
    }

    return hash;
    
}

class HashTable{

    table = new Array(3);

    

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length);
        this.table[idx] = value;
    }

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length)
        return this.table[idx];
    }
}

const myTable = new HashTable() ;
myTable.setItem('firstName', 'bob');
myTable.setItem('lastName', 'tim');
myTable.setItem('age', '5');
myTable.setItem('dob', '1/2/3');
console.log
console.log(myTable.getItem('firstName')); 
console.log(myTable.getItem('lastName')); 