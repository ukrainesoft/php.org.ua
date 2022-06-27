- [« openssl_x509_free](function.openssl-x509-free.md)
- [openssl_x509_read »](function.openssl-x509-read.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Розібрати сертифікат X509 та отримати масив з даними про нього

# openssl_x509_parse

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_x509_parse — Розібрати сертифікат X509 та отримати масив з
даними про нього

### Опис

**openssl_x509_parse**([OpenSSLCertificate](class.opensslcertificate.md)\|string
`$certificate`, bool `$short_names` u003d **`true`**): array\|false

**openssl_x509_parse()** повертає інформацію сертифікату з
ідентифікатором `certificate`, включаючи такі поля, як ім'я суб'єкта, ім'я
видавця, призначення, дати початку та закінчення дії тощо.

### Список параметрів

`certificate`
Сертифікат X509 Перелік коректних значень дивись у [Параметри
Key/Certificate](openssl.certparams.md).

`short_names`
`short_names` визначає, як індексуватимуться дані у підсумковому
масиві. Якщо `short_names` поставити як **`true`** (за замовчуванням), то
поля індексуватимуться короткими іменами, а не довгими. Наприклад,
CN – це коротке ім'я для commonName.

### Значення, що повертаються

*Структура масиву, що повертається, ще не до кінця встояла, так що поки що
не документується.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------------------------|
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509. |
