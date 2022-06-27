- [«md5_file](function.md5-file.md)
- [metaphone»] (function.metaphone.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Повертає MD5-хеш рядки

# md5

(PHP 4, PHP 5, PHP 7, PHP 8)

md5 - Повертає MD5-хеш рядки

**Увага**

Не рекомендується використовувати цю функцію для забезпечення безпеки
зберігання паролів з огляду на високу швидкість роботи даного алгоритму. Більше
детально читайте в розділі [Відповіді на питання, що часто ставляться
хешування паролів](faq.passwords.md#faq.passwords.fasthash).

### Опис

**md5**(string `$string`, bool `$binary` u003d **`false`**): string

Обчислює MD5-хеш рядки `string`, використовуючи [» алгоритм MD5 RSA Data
Security, Inc.](http://www.faqs.org/rfcs/rfc1321) та повертає цей хеш.

### Список параметрів

`string`
Рядок.

`binary`
Якщо необов'язковий аргумент `binary` має значення **`true`**, то
повертається бінарний рядок із 16 символів.

### Значення, що повертаються

Повертає хеш у вигляді 32-символьного шістнадцяткового числа.

### Приклади

**Приклад #1 Приклад використання **md5()****

`<?php$str u003d 'яблуко';if (md5($str) u003du003du003d '1afa148eb41f2e7103f21410bf48346c') {    echo "Вам зелене або>

### Дивіться також

- [md5_file()](function.md5-file.md) - Повертає MD5-хеш файлу
- [sha1_file()](function.sha1-file.md) - Повертає SHA1-хеш файлу
- [crc32()](function.crc32.md) - Обчислює поліном CRC32 для рядка
- [sha1()](function.sha1.md) - Повертає SHA1-хеш рядки
- [hash()](function.hash.md) - Генерує хеш-код (підпис
повідомлення)
- [crypt()](function.crypt.md) - Необоротне хешування рядка
- [password_hash()](function.password-hash.md) - Створює хеш пароля
