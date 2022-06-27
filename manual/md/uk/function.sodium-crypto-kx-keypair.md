- [«
sodium_crypto_kx_client_session_keys](function.sodium-crypto-kx-client-session-keys.md)
- [sodium_crypto_kx_publickey
»](function.sodium-crypto-kx-publickey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Створює нову пару ключів.

# sodium_crypto_kx_keypair

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_kx_keypair — Створює нову пару ключів sodium

### Опис

**sodium_crypto_kx_keypair**(): string

Створити нову пару ключів sodium, що складається із секретного ключа (32
байта) та наступного за ним відкритого ключа (32 байта). Ключі можна
отримати, викликавши
[sodium_crypto_kx_secretkey()](function.sodium-crypto-kx-secretkey.md)
і
[sodium_crypto_kx_publickey()](function.sodium-crypto-kx-publickey.md)
відповідно.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає нову пару ключів у разі успішного виконання; викидає
виняток інакше.

### Приклади

**Приклад #1 Приклад використання **sodium_crypto_kx_keypair()****

Створити нову пару ключів та витягти з неї секретний та відкритий ключі.

` <?php$keypair u003d sodium_crypto_kx_keypair();$secret u003d sodium_crypto_kx_secretkey($keypair);$public u003d sodium_crypto_kx_publickey($keypair);printf("секретний ключ: 
відкритий ключ: %s", sodium_bin2hex($secret), sodium_bin2hex($public));?> `

Результатом виконання цього прикладу буде щось подібне:

секретний ключ: e7c5c918fdc40762e6000542c0118f4368ce8fd242b0e48c1e17202797a25daf
відкритий ключ: d1f59fda8652caf40ed1a01d2b6f3802b60846986372cd8fa337b7c12c428b18
