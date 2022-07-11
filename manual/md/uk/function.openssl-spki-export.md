- [«
openssl_spki_export_challenge](function.openssl-spki-export-challenge.md)
- [openssl_spki_new »](function.openssl-spki-new.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експорт відкритого ключа у форматі PEM із підписаного відкритого
ключа із викликом

# openssl_spki_export

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

openssl_spki_export — Експорт відкритого ключа у форматі PEM з
підписаного відкритого ключа із викликом

### Опис

**openssl_spki_export**(string `$spki`): string\|false

Експортує відкритий ключ у форматі PEM із підписаного відкритого ключа
з викликом

### Список параметрів

`spki`
Коректний відкритий ключ із викликом

### Значення, що повертаються

Повертає відкритий ключ у форматі PEM або **`false`** у випадку
виникнення помилки.

### Помилки

Викликає помилку рівня **`E_WARNING`** якщо у параметр `spki` передано
некоректні дані.

### Приклади

**Приклад #1 Приклад використання **openssl_spki_export()****

Повертає відкритий ключ у форматі PEM або **`null`** у випадку
виникнення помилки.

` <?php$pkey u003d openssl_pkey_new('secret password');$spkac u003d openssl_spki_new($pkey, 'challenge string');$pubKey u003d openssl_spki_export(preg_replace(') ;if ($pubKey) {   echo $pubKey;}?> `

**Приклад #2 Приклад використання **openssl_spki_export()** з
\<keygen\>**

Повертає відкритий ключ у форматі PEM, отриманий із елемента
\<keygen\>

` <?php$spkac u003d openssl_spki_export(preg_replace('/SPKACu003d/', '', $_POST['spkac']));if ($spkac !u003d NULL) {    echo $spkac| вдалося витягти відкритий ключ";}?><keygen nameu003d"spkac" challengeu003d"challenge string" keytypeu003d"RSA">`

### Дивіться також

- [openssl_spki_new()](function.openssl-spki-new.md) - Створення
нового підписаного відкритого ключа із викликом
- [openssl_spki_verify()](function.openssl-spki-verify.md) -
Перевіряє підписаний відкритий ключ та виклик
- [openssl_spki_export_challenge()](function.openssl-spki-export-challenge.md) -
Експорт виклику, пов'язаного з підписаним ключем та викликом
- [openssl_get_md_methods()](function.openssl-get-md-methods.md) -
Отримати список доступних методів хешування
- [openssl_csr_new()](function.openssl-csr-new.md) - Генерує CSR
- [openssl_csr_sign()](function.openssl-csr-sign.md) - Підписати CSR
за допомогою іншого сертифіката (або їм же) та створити сертифікат
