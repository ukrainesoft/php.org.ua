- [« Функції OpenSSL](ref.openssl.md)
- [openssl_cms_decrypt »](function.openssl-cms-decrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Отримує довжину вектора, що ініціалізує, шифру

# openssl_cipher_iv_length

(PHP 5 \>u003d 5.3.3, PHP 7, PHP 8)

openssl_cipher_iv_length — Отримує довжину вектора, що ініціалізує.
шифру

### Опис

**openssl_cipher_iv_length**(string `$cipher_algo`): int\|false

Повертає довжину шифру, що ініціалізує вектор.

### Список параметрів

`cipher_algo`
Метод шифрування. Список потенційних значень можна отримати за допомогою
[openssl_get_cipher_methods()](function.openssl-get-cipher-methods.md).

### Значення, що повертаються

Повертає довжину вектора, що ініціалізує, шифру або **`false`**.

### Помилки

Видає помилку рівня **`E_WARNING`** у разі передачі невідомого
алгоритм шифрування.

### Приклади

**Приклад #1 Приклад використання **openssl_cipher_iv_length()****

` <?php$method u003d 'AES-128-CBC';$ivlen u003d openssl_cipher_iv_length($method);echo $ivlen;?> `

Результатом виконання цього прикладу буде щось подібне:

16
