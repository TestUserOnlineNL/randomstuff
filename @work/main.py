""" STRING examples"""
#
a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
print(a);
#
print();
#
a = "Hello, World!";
print(a[0]);
#
for x in "banana":
  print(x);
#
txt = "The best things in life are free!"
print("free" in txt)
#
txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")
#
txt = "The best things in life are free!"
if "expensive" not in txt:
  print("No, 'expensive' is NOT present.")
#
b = "Hello, World!"
print(b[2:5])
#
b = "Hello, World!"
print(b[:5])
#
b = "Hello, World!"
print(b[2:])
#
b = "Hello, World!"
print(b[-5:-2])
#
age = 55
name = "crashtestopa"
text= "My name is {}, and i am {} years old."
print(text.format(name, age))
#
txt = "My name is Ståle"
print(txt.encode(encoding="ascii",errors="backslashreplace"))
""" ARRAY examples"""
#
myList = ["brood","halvarine", "beleg","koffie"]
print(myList)
#
myList.append("kaas")
print(myList)
myList.pop(2)
print(myList)
#
myList.remove("halvarine")
myList.sort()
print(myList)
#
print(len(myList))
#
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])
#
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list")
#
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])
print()
#
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist]
#
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if "a" in x]
print(newlist)
#
newList = [x if x != "banana" else "orange" for x in fruits]
print(newList)