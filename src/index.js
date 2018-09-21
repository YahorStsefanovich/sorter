class Sorter {
    constructor() {
        this.sorter = [];
        this.state = 1;
    }

    add(element) {
        let n = this.sorter.length;
        this.sorter[n] = element;
    }

    at(index) {
        return this.sorter[index];
    }

    get length() {
        return this.sorter.length;
    }

    toArray() {
        return this.sorter;
    }

    sort(indices) {
        if (this.compareFunction){
            return this.sorter.sort(this.compareFunction);
        }
        let mass = [], j = 0;
        for (let i = 0; i < indices.length; i++)
        {
            let index = indices[i];
            if (this.sorter[index]) {
                mass[j] = this.sorter[index];
                j++;
            }
        }
        mass.sort();
        for (let i = 0; i < indices.length; i++)
        {
            let index = indices[i];
            this.sorter[index] = mass[i];
        }
    }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

obj = new Sorter();
obj.add(4);
obj.add(3);
obj.add(7);
obj.add(1);
obj.add(12);
obj.sort([0,1,2,3,4]);
console.log(obj.toArray());
const reverseCompareFunction = (left, right) => right - left;
obj.setComparator(reverseCompareFunction);
obj.sort([0,1,2,3,4]);
console.log(obj.toArray());

module.exports = Sorter;