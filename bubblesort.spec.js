describe('Bubble Sort', function(){

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('works with one element', function(){
        expect(bubbleSort([2])).toEqual([2]);
    });

    it('sorts minimu 2 element', function(){
        expect(bubbleSort([3,2])).toEqual([2,3]);
    });

    it('sorts multiple elements', function(){
        let sorted = [1,2,3,4,5,6,7,8,9];
        let unsorted = [4,1,2,6,5,9,3,8,7]
        expect(bubbleSort(unsorted)).toEqual(sorted);
        let negSort = [-3,-2,-1,0,1,2,3];
        let negUnsort = [1,0,-3,3,2,-1,-2];
        expect(bubbleSort(negUnsort)).toEqual(negSort);
    });
  });