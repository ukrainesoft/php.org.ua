- [« openssl_dh_compute_key](function.openssl-dh-compute-key.md)
- [openssl_encrypt »](function.openssl-encrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Обчислення дайджесту

# openssl_digest

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

openssl_digest - Обчислення дайджесту

### Опис

**openssl_digest**(string `$data`, string `$digest_algo`, bool `$binary`
u003d **`false`**): string\|false

Обчислює значення дайджесту для переданих даних за допомогою зазначеного
методу. Повертає необроблений рядок або рядок шістнадцяткових
чисел.

### Список параметрів

`data`
Дані.

`digest_algo`
Метод обчислення дайджесту, наприклад "sha256". Список доступних методів
можна отримати за допомогою
[openssl_get_md_methods()](function.openssl-get-md-methods.md).

`binary`
Якщо **`true`**, то буде повернено необроблений рядок. Інакше буде
повернено рядок шістнадцяткових чисел.

### Значення, що повертаються

Повертає обчислений дайджест або **`false`** у разі виникнення
помилки.

### Помилки

Видає помилку рівня **`E_WARNING`**, якщо в параметрі `digest_algo`
передано невідомий метод.

### Дивіться також

- [openssl_get_md_methods()](function.openssl-get-md-methods.md) -
Отримати список доступних методів хешування
