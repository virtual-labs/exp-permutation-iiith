Permutations are a fundamental concept in mathematics and computer science, especially in problem solving. A **permutation** is an arrangement of objects in a specific order. Whenever the order of objects matters, we use permutations.

### What is a Permutation?

Suppose you have 5 colored balls labeled 1, 2, 3, 4, and 5:

<div align="center">
<img src="./images/experiment-image.png" alt="Permutation of colored balls" width="350"/>
<br><small>Figure: Five colored balls labeled 1, 4, 3, 2, 5 (one possible arrangement).</small>
</div>

Each unique way of arranging these balls in a row is a permutation. For example, the arrangements (1, 2, 3, 4, 5) and (5, 4, 3, 2, 1) are different permutations.

### Counting Permutations

- The number of ways to arrange $n$ distinct objects is $n!$ (read as "n factorial").
- $n! = n \times (n-1) \times (n-2) \times \ldots \times 1$

**Example:**  
For 3 balls (A, B, C), the permutations are:

- A, B, C
- A, C, B
- B, A, C
- B, C, A
- C, A, B
- C, B, A

There are $3! = 6$ permutations.

### Permutations of r Objects from n

Sometimes, we want to arrange only $r$ objects out of $n$. The number of such arrangements is:

$$
P(n, r) = \frac{n!}{(n-r)!}
$$

### Permutations with Repetition

If some objects are identical, the formula changes. For example, the word "LEVEL" has repeated letters. The number of distinct arrangements is:

$$
	ext{Total} = \frac{n!}{p_1! \times p_2! \times \ldots}
$$

where $p_1, p_2, \ldots$ are the counts of each repeated object.

---

Permutations are used in many areas, such as algorithm design, cryptography, and combinatorial problem solving. Understanding permutations helps you solve problems where the arrangement or order of items is important.
