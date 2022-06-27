- [« Phar::getPath](phar.getpath.md)
- [Phar::getStub »](phar.getstub.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Отримати MD5/SHA1/SHA256/SHA512/OpenSSL підпис Phar-архіву

# Phar::getSignature

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::getSignature — Отримати MD5/SHA1/SHA256/SHA512/OpenSSL підпис
Phar-архіву

### Опис

public **Phar::getSignature**(): array\|false

Повертає перевірочний підпис phar-архіву у вигляді рядка
шістнадцяткових цифр.

### Список параметрів

### Значення, що повертаються

Масив, що містить цифровий підпис відкритого архіву за ключом `hash`, та
`MD5`, `SHA-1`, `SHA-256`, `SHA-512` або `OpenSSL` за ключом `hash_type`.
Підпис - це хеш, обчислений від вмісту архіву, яку можна
використовуватиме перевірки його цілісності. Коректний підпис потрібен
для всіх phar-архівів, що запускаються, якщо дозволена INI-змінна
[phar.require_hash](phar.configuration.md#ini.phar.require-hash). Якщо
сигнатури немає, функція повертає **`false`**.
