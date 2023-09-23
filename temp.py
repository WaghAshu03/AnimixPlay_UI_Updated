import hashlib
import itertools
import string

# Example SHA-256 hash to guess
target_hash = "9c15f485ee82b949c7f2e18f6c13a10c73267b76b20c6a4018b964d93c39c1a3"

# Define the characters to consider for generating combinations
characters = string.ascii_letters + string.digits

# Maximum length of the text to guess
max_length = 6

# Brute-force approach: try all possible combinations of characters up to max_length
for length in range(1, max_length + 1):
    for combination in itertools.product(characters, repeat=length):
        guess = ''.join(combination)
        hashed_guess = hashlib.sha256(guess.encode()).hexdigest()
        
        if hashed_guess == target_hash:
            print("Original text:", guess)
            break
