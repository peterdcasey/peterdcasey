
x = []  #empty list
x.append('A')
#print(x)
y = ['B','C','D']
x = x + y
y.append('T')
z = y[0]
y.append('M')
#print(z)

def foo(stuff):  #  foo(x) = X * x
    theSum = 0
    for i in stuff:
        theSum = theSum + i
    #print('theSum is', theSum)
    return theSum

def okCharacters(chars):
    validLetters = ['A','Z','T','C']
    charsOK = len(chars) > 0
    
    for ch in chars:
        if ch not in validLetters:
            charsOK = False
        
    return charsOK
    
for xyz in y:
    pass
    #print(xyz)

letters = ['A']

#if boolean expression:
#    x == y

if okCharacters(letters):
    print("good input")
else:
    print("bad input")

rng = range(5)  #0,1,2,3,4
lst = list(rng) #[0,1,2,3,4]
lst2 = [2,3,4]
lst.append(99)  #[0,1,2,3,4,99]
#print(lst)
s1 = foo(lst)
s2 = foo(lst2)
#print(s1 + s2)
#foo(['a','b','c'])

#print(list(range(5)))
bob = sum
#print(bob)
#print(bob(rng))
sum = 0
for i in lst:
    sum = sum + i
    #print(i)

#print('sum is', sum)
#print(sum)




















