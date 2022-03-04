| Array           | Insert (ms)   | Append (ms) |
| --------------- | ------------- | ----------- |
| extraLargeArray | 965.863927 ms | 3.784743 ms |
| largeArray      | 7.800858 ms   | 715.976 μs  |
| mediumArray     | 172.589 μs    | 189.373 μs  |
| smallArray      | 51.617 μs     | 105.813 μs  |
| tinyArray       | 44.285 μs     | 92.371 μs   |


## Runtime Analysis:

When comparing the runtimes between the two functions, when using varying array sizes, it is clear that both have advantages and disadvantages. While the `doublerAppend` function was more efficient with the larger arrays (*extraLargeArray* and *largeArray*), it was not as effecient as the `doublerInsert` function when the size of the arrays were smaller (*smallArray* and *tinyArray*). So to answer the question, "which scales better?", the `doublerAppend` function is the winner here due to the large time differance it took for the function to execute.

## Extra Credit:

The reason why `doublerInsert` is slower is because, when ran, it has to insert the value at the start of the array and then change the index position of every element in the array. Whereas, `doublerAppend` only needs to add the value onto the end of the array by creating 1 new index position in the array.