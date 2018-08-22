# Keychain

Manage JWK key sets and issue/verify JWT tokens using public key signatures.

## Key sets

The `keys` module helps you to manage sets of JWK keys (public/private keys pairs).

### Example usage

```typescript
import * as keys from "keychain/keys";

// SELECT AND CONVERT KEYS
// 1. Fetch a key set from somewhere.
// 2. Select a key with ID "abc123".
// 3. Convert the key from private to public.
// 3. Convert the key to PEM format.
fetchKeys()
  .then(keys.selectKey("abc123"))
  .then(keys.private2public)
  .then(keys.key2pem)
  .then((key) => {
    // ...do something with the key
  })
  .catch(console.error);
```

## Tokens

The `token` module is used to issue/sign a JWT token using a private key and then verify the token using a corresponding public key.

### Example usage

```typescript
import * as readline from "readline";
import * as keys from "keychain/keys";
import * as token from "keychain/token";

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

Note that when verifying a token using a key set the correct key is selected automatically if possible (using the `kid` claim in the token header).
