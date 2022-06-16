- [« Phar::setMetadata](phar.setmetadata.md)
- [Phar::setStub »](phar.setstub.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Встановити алгоритм підписання phar-архіву та застосування його

# Phar::setSignatureAlgorithm

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.1.0)

Phar::setSignatureAlgorithm — Встановити алгоритм підписання phar-архіву
та застосування його

### Опис

public **Phar::setSignatureAlgorithm**(int `$algo`, ?string
`$privateKey` u003d **`null`**): void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Встановлює алгоритм підписання phar-архіву та застосовує його. Доступні
наступні алгоритми підписання: `Phar::MD5`, `Phar::SHA1`,
`Phar::SHA256`, `Phar::SHA512` та `Phar::OPENSSL`.

Зверніть увагу, що для всіх phar-архівів, що виконуються, підпис
створюється автоматично, з стандартним використанням `SHA1`. Архіви з
даними на основі tar або zip (створені за допомогою класу
[PharData](class.phardata.md)) повинні мати явно створену за допомогою
**Phar::setSignatureAlgorithm()** підпис.

### Список параметрів

`algo`
Одна з констант: `Phar::MD5`, `Phar::SHA1`, `Phar::SHA256`,
`Phar::SHA512` або `Phar::OPENSSL`

`privateKey`
Секретний ключ OpenSSL, витягнутий із сертифіката, або файл із ключем
OpenSSL:

` <?php$private u003d openssl_get_privatekey(file_get_contents('private.pem'));$pkey u003d '';openssl_pkey_export($private, $pkey);$p->setSignatureAlgorithm(Phar::OPENS > `

Подробиці про іменування та розміщення файлу відкритого ключа дивіться у
розділ [Вступ до phar](phar.using.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md) у
будь-які помилки, крім помилок запису на диск. При помилках запису на диск
викидає виняток [PharException](class.pharexception.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------|
| 8.0.0 | `privateKey` тепер допускає значення null. |

### Дивіться також

- [Phar::getSupportedSignatures()](phar.getsupportedsignatures.md) -
Отримати масив підтримуваних алгоритмів підпису архіву
- [Phar::getSignature()](phar.getsignature.md) - Отримати
MD5/SHA1/SHA256/SHA512/OpenSSL підпис Phar-архіву
