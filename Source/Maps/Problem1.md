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
We have a sequence a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ..  
a<sub>2</sub> = a<sub>1</sub> + d  
a<sub>3</sub> = a<sub>2</sub> + d ...  
d = a<sub>3</sub> - a<sub>2</sub> = a<sub>2</sub> - a<sub>1</sub>  

a -> First term of AP  
d -> Common Difference between terms  
n -> Total number of terms in an AP  
A<sub>n</sub> -> Nth Term of AP  
S<sub>n</sub> -> Sum of the AP  
Ex: 1, 3, 5, 7, 9, 11, ..., 31  
a = 1  
d = a<sub>2</sub> - a<sub>1</sub> = 3 - 1 = 2  
n = 16  
a<sub>n</sub> = 31  like a<sub>16</sub> = 31  

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
2. Take Upperlimit -> Get n & A<sub>n</sub> -> Put in formula

# Answer
S<sub>3</sub> = 166833  
S<sub>5</sub> = 99500  
S<sub>15</sub> = 33165  
Final Result = (S<sub>3</sub> + S<sub>5</sub>) - S<sub>15</sub> = 233168  