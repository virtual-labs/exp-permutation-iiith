**Problem 1**

Recursion can be applied to a problem if the problem for the given input can be expressed as dependent upon the solution of the same problem for simpler inputs. One has to hardcode the solution for some simple cases, so that this recursion does not go on endlessly. Now, the given problem of expressing a weight(W) as a sum of other weights can be expressed as the problem of choosing one weight(w) such that it is not greater than W and then solving the same problem for the remaining weight W-w. For this particular problem, the solution can be expressed easily by choosing all the weight(w) as the first weights one by one, also taking care the the total weight(S) is not greater than reqired weight W. Those weights which make the total weight(S) greater than W are exluded from the list of avaliable weights for the next recursive. Now we only have to solve the same problem for a simpler case to get the complete solution, i.e., solving the same problem for the remaining weight, W-w, and available pool of weights now also does not have w. If accumulated weight is equal to w, then we increment the counter. If at any time, the pool of remaining weights is exhausted, then that attempt is aborted. So, our recursion function would be needing 2 variables, one containing the list of available weights and the other signifying remaining weight to be accrued.  


**Problem 2**

For each weight in the input we keep it on right pan and try using other weights to balance it. Let us say we have kept ith weight on the right pan, out task is now to keep weights on left side of the pan so that the sum of the weights on left side of the pan is equal to the weight on the right side,i.e weight[i]. For each weight W[k], we can keep it either on left pan or we donot to keep it at all. Make sure to disregard the weight when k is equal to i because that weight is already on right side.  


**Recursive formulation**  

Let F(index,i,S) denotes the number of ways in which we can obtain weight[i] using weights from weight[index], weight[index+1], weight[index+2],..., weight[n-1] and currently because of choosing some weights from weight[0], weight[1],..., weight[index-1] the sum of the weights has become S. So we need to achieve weight[i]-S by choosing some weights from weight[index], weight[index+1],..., weight[n-1].  

A pseudo code would look like:  
F(index,i,S) = F(index+1,i,S) If index=i  
= 1 If index=N and S=weight[i]  
= 0 If index=N and S!=weight[i]  
= F(index+1,i,S+weight[index])+F(index+1,i,S) otherwise   