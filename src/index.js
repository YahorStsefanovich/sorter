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
        if (this.compareFunction){
            temp = this.sorter.slice(indices[0], indices[indices.length - 1]+1).sort(this.compareFunction)
            }else {
            temp = this.sorter.slice(indices[0], indices[indices.length - 1]+1).sort(function (a,b) {
                return a - b;
            });
            if (typeof (temp[0])==="string"){
                temp = temp.sort(function (a,b) {
                    return b.length - a.length;
                });
            }
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