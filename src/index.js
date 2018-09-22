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
        indices = indices.sort();

        let temp = [];
        for (let i = 0; i < indices.length; i++){
            temp.push(this.sorter[indices[i]]);
        }

        if (this.compareFunction){
            temp = temp.sort(this.compareFunction);
        }else {
            temp = temp.sort(function (a,b) {
                return a - b;
            });
        }

        for (let i = 0; i < indices.length; i++){
            this.sorter[indices[i]] = temp[i];
        }
    }


  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;