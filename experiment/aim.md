 Permutations occur, in more or less prominent ways, in almost every domain of mathematics. They often arise when different orderings on certain finite sets are considered, possibly only because one wants to ignore such orderings and needs to know how many configurations are thus identified. For similar reasons permutations arise in the study of sorting algorithms in computer science. Here we present two problems based on permutations and combinations.

**Problem 1:**

Given n distict and unique integral weights and an integral value, Sum. You have to tell in how many ways you can balance that Sum using one or all weights. If there is no combination possible, print -1.

**Input Specification**

Input contains 2 lines . First line contains N(< 10) denoting the number of weights. The next line contains N weights (<=wt<=100) followed by a Sum(<=100) which we need to balance.

**Output Specification**

Output must be a integer. Print -1 in case there is no way in which we can achieve the value Sum by using some weights otherwise print the number of ways in which we can attain the weight Sum. Please note that if Sum S can be attained by keeping some weights a1,a2,a3,.. on left side and p1,p2,.. on the right then keeping p1,p2,... on the left and a1,a2,.. on right will also result in achieving sum S, but it has to be counted only once not twice in the solution.

**Sample Input and Output**

Input: 3
1 2 3 56
Output:-1



**Problem 2:**

Given N followed by N weights, see how many different ways, one can generate sets of balancing weights. The weight on the right side of the pan must be a single weight.Please note that we cannot place multiple weights on right side.

**Input Specification**

Input contains a integer N followed by N weights separated by spaces. The value of N is <=10 and each weight W <=100.

**Output Specification**

Output must be the number of ways we can generate sets of balancing weights according to the given restriction.

**Sample Input and Output**

Input: 3 1 2 3
Output:1
Input: 5 1 2 3 4 5
Output: 4