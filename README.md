# Keychain

Manage JWK key sets and issue/verify JWT tokens using public key signatures.

## JWK keys

The `jwk` module has data structures and helper functions to handle JWK keys.

## Key sets

The `keys` module helps you to manage sets of JWK keys (public/private keys pairs).

### Example usage

```typescript
import { jwk, keys } from "keychain";

// SELECT AND CONVERT KEYS
// 1. Fetch a key set from somewhere.
// 2. Decode the key set.
// 3. Select a key with ID "abc123".
// 4. Convert the key from private to public.
// 5. Convert the key to PEM format.
fetchKeys()
  .then(keys.decode)
  .then(keys.selectKey("abc123"))
  .then(jwk.private2public)
  .then(jwk.key2pem)
  .then((key) => {
    // ...do something with the key
  })
  .catch(console.error);
```

## Tokens

The `token` module is used to issue/sign a JWT token using a private key and then verify the token using a corresponding public key.

### Example usage

```typescript
import { keys, token } from "keychain";

const payload = {
  hello: "world"
};

// ISSUE A TOKEN
// 1. Fetch a key set from somewhere.
// 2. Select a key with ID "abc123".
// 3. Use the key to issue and sign a new token.
// 4. Print the token to the console.
fetchKeys()
  .then(keys.selectKey("abc123"))
  .then(token.issue(payload, { expiresIn: "5m" }))
  .then(console.log)
  .catch(console.error);

// VERIFY A TOKEN
// 1. Fetch a key set from somewhere.
// 2. Verify the token stored in `input` using correct key from key set.
// 3. If successful, print the payload from the token to the console.
fetchKeys()
  .then(token.verify(input))
  .then(console.log)
  .catch(console.error);
```

Note that when verifying a token using a key set the correct key is selected automatically from the set if possible (using the `kid` claim in the token header). You can also use `token.verify()` with a specific key instead of a key set if you already know which key to use.
