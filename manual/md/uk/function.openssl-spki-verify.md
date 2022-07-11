- [« openssl_spki_new](function.openssl-spki-new.md)
- [openssl_verify »](function.openssl-verify.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Перевіряє підписаний відкритий ключ та виклик

#openssl_spki_verify

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

openssl_spki_verify — Перевіряє підписаний відкритий ключ та виклик

### Опис

**openssl_spki_verify**(string `$spki`): bool

Перевіряє підписаний відкритий ключ та виклик

### Список параметрів

`spki`
Коректний підписаний відкритий ключ та виклик

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо параметр `spki` передано
некоректні дані.

### Приклади

**Приклад #1 Приклад використання **openssl_spki_verify()****

Перевірка наявного підписаного відкритого ключа із викликом

` <?php$pkey u003d openssl_pkey_new('secret password');$spkac u003d openssl_spki_new($pkey, 'challenge string');if (openssl_spki_verify(')'' {   echo$spkac;}else {   echo "Перевірка SPKAC не удалася";}?> `

**Приклад #2 Приклад використання **openssl_spki_verify()** з
\<keygen\>**

Перевірка наявного підписаного відкритого ключа та виклику,
отриманого з елемента \<keygen\>

`<?phpif (openssl_spki_verify(preg_replace('/SPKACu003d/', '', $_POST['spkac']))) {    echo $spkac;} else {  ка| nameu003d"spkac" challengeu003d"challenge string" keytypeu003d"RSA">`

### Дивіться також

- [openssl_spki_new()](function.openssl-spki-new.md) - Створення
нового підписаного відкритого ключа із викликом
- [openssl_spki_export_challenge()](function.openssl-spki-export-challenge.md) -
Експорт виклику, пов'язаного з підписаним ключем та викликом
- [openssl_spki_export()](function.openssl-spki-export.md) - Експорт
відкритого ключа у форматі PEM з підписаного відкритого ключа з
викликом
- [openssl_get_md_methods()](function.openssl-get-md-methods.md) -
Отримати список доступних методів хешування
- [openssl_csr_new()](function.openssl-csr-new.md) - Генерує CSR
- [openssl_csr_sign()](function.openssl-csr-sign.md) - Підписати CSR
за допомогою іншого сертифіката (або їм же) та створити сертифікат
