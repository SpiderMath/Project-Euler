# Question

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

# Concept

1st thing which we could do is, go through all the numbers less than the given one and check if they are prime

But problem is, CPU is going to be on 🔥 because 600851475143 loops is going to hurt, (actually it is a lot more because for prime checking you work to like uh, loop through all numbers again)  

Something a bit more effecient -> If you have noticed, the smallest number which might divide n is 2 (apart from 1)  

So we could loop only till half?  
For example,   	
100 -> 51 - 100 none of them divide 100  

Even more Efficient: We can loop through only the numbers less (or equal) than the square root and work with it   
Because square roots cut deeper than normal division by 2

# [Fundamental Theorem of Arithmetic](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic)

So basically it says that,  
if you have n = a * b * c * d, where a, b, c, and d are primes [they might have powers higher than 1 as well], and n != m,  
m can never be equal to a * b * c * d with the same powers as in n.

How does it come here.  
N = a * b * c * d * e  
N<sub>pseudo</sub> = N / a (because a is the smallest)  

N = a * N<sub>pseudo</sub>  

Then we can apply this onto N<sub>pseudo</sub> as well, so it goes on.

```js
Task Map

1. We loop through sqrt(N)
2. n % i === 0
3. If not return
4. Check if prime
5. n = n % i && largestPrime = i
13195 -> 5 
2639 -> 7
377 -> 13
29 isn\'t like found'

6. VVI [Very Very Important] -> IF n > largestPrime, then largestPrime = n
```