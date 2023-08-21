import math

p = 29
q = 31
n = p * q
phi = (p - 1) * (q - 1)

def gcd(a, b): 
  if (a < b):
    temp = a
    a = b
    b = temp

  while (b != 0):
    temp = b
    b = a % b
    a = temp
  
  return a

def get_e():
  for i in range(2, phi):
    if ((phi + 1) % i == 0): return i

e = get_e()

def get_d():
  d = 0
  for k in range(1, phi):
    if ((k * phi + 1) % e == 0):
      d = (k * phi + 1) / e;
      return d;

d = get_d()


plaintext = 898
ciphertext = pow(plaintext, e, n)

decrypted = pow(int(ciphertext), int(d), int(n))

print(plaintext)
print("")
print(ciphertext)
print("")
print(decrypted)
print(plaintext == decrypted)
print("----")

def encryption(message, public_key):
  return ''.join([chr(pow(ord(i), public_key['e'], public_key['n'])) for i in list(message)])

def decryption(cipher, private_key):
  return ''.join([chr(pow(ord(i), private_key['d'], private_key['n'])) for i in list(cipher)])

# plaintext = ''.join(sorted('''qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;'ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>?`1234567890-=~!@#$%^&*()_+'''))
# ciphertext = encryption(plaintext, {'e': e, 'n': n})
# decrypted = decryption(ciphertext, {'d':d, 'n':n})

# print(plaintext)
# print("")
# print(ciphertext)
# print("")
# print(decrypted)
# print(plaintext == decrypted)