## Question

> ### If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.


Main 2 Approaches when it comes to solving  
1. Brute Force Method -> Hard coding, working on solid values..  
2. Dynamic Method -> Working so that more instances are solved  

For this one, we are gonna use the dynamic method  

#### **CONCEPT**
```
upperlimit = 21

Multiples of 3 = 3, 6, 9, 12, 15, 18
Multiple of 5 = 5, 10, 15, 20

Sum of mul3 = 63
Sum of mul5 = 50
 
Total sum = 113
Actual Answer = TS - Mul15 = 113 - 15 = 98
```

**Maths Stuff**

AP -> Arithmetric Progression  
We have a sequence a1, a2, a3, ..  
a2 = a1 + d  
a3 = a2 + d ...  
d = a3 - a2 = a2 - a1  

a -> First term of AP  
d -> Common Difference between terms  
n -> Total number of terms in an AP  
An -> Nth Term of AP
Sn -> Sum of the AP

Ex: 1, 3, 5, 7, 9, 11, ..., 31  
a = 1  
d = a2 - a1 = 3 - 1 = 2  
n = 16  
an = 31  like a16 = 31  

Formula to calculate sum of AP

```
Sn = (n/2) * (a + l), where l is the last term of AP. If n is the number of terms, it is the Nth term which is l basically An = l

OR

Sn = (n/2) * (2a + (n - 1)d)
	= (n/2) * (a + a + (n-1)d)
	= (n/2) * (a + An),
	since An = a + (n - 1)d
```


We got 2 approaches possible,  
1. Take Upperlimit -> Get n & directly put in formula
2. Take Upperlimit -> Get n & An -> Put in formula

# Answer
S3 = 166833  
S5 = 99500  
S15 = 33165  
Final Result = (S3 + S5) - S15 = 233168  