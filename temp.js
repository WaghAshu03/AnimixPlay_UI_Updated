const p = 11;
const q = 13;

const n = p * q;
const phi_n = (p - 1) * (q - 1);

function gcd(a, b) {
  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const get_e = () => {
  for (let i = 2; i < phi_n; i++) {
    if (gcd(i, phi_n) === 1) return i;
  }

  process.exit();
};

const e = 17; //get_e();

const get_d = () => {
  let d = 0;
  for (let k = 1; k < phi_n; k++) {
    if ((k * phi_n + 1) % e === 0) {
      d = (k * phi_n + 1) / e;
      return d;
    }
  }
};

const d = get_d();

function modExp(base, exponent, modulus) {
  if (modulus === 1) return 0;
  let result = 1;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus;
    }
    exponent = Math.floor(exponent / 2);
    base = (base * base) % modulus;
  }
  return result;
}

// Encryption
const plaintext = 123; // Numerical plaintext
const ciphertext = modExp(plaintext, e, n);

// Decryption
const decrypted = modExp(ciphertext, d, n);

console.log("Original:", plaintext);
console.log("Ciphertext:", ciphertext);
console.log("Decrypted:", decrypted);
