- [« sodium_crypto_box_open](function.sodium-crypto-box-open.md)
- [sodium_crypto_box_publickey
»](function.sodium-crypto-box-publickey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Обчислює відкритий ключ із секретного ключа

# sodium_crypto_box_publickey_from_secretkey

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_box_publickey_from_secretkey — Обчислює відкритий ключ з
секретного ключа

### Опис

**sodium_crypto_box_publickey_from_secretkey**(string `$secret_key`):
string

З огляду на секретний ключ обчислює відповідний відкритий ключ.

Працює тільки з типом ключів, призначеним для використання з
**crypto_box()** (який використовує еліптичну криву Діффі-Хеллмана
на кривій Монтгомері, Curve25519; скорочено X25519), а не
**crypto_sign()** (який використовує алгоритм цифрового підпису Едвардса
за кривою Едвардса з відповідними параметрами; скорочено Ed25519).

### Список параметрів

`secret_key`
Секретний ключ X25519

### Значення, що повертаються

Відкритий ключ X25519.
