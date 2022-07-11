- [« openssl_sign](function.openssl-sign.md)
- [openssl_spki_export »](function.openssl-spki-export.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експорт виклику, пов'язаного з підписаним ключем та викликом

#openssl_spki_export_challenge

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

openssl_spki_export_challenge — Експорт виклику, пов'язаного з підписаним
ключем та викликом

### Опис

**openssl_spki_export_challenge**(string `$spki`): string\|false

Експорт дзвінка з підписаного відкритого ключа та дзвінка.

### Список параметрів

`spki`
Коректний підписаний відкритий ключ із викликом

### Значення, що повертаються

Повертає рядок дзвінка або **`false`** у разі виникнення помилки.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо параметр `spki` передано
некоректні дані.

### Приклади

**Приклад #1 Приклад використання **openssl_spki_export_challenge()****

Повертає рядок дзвінка або **`null`** у разі виникнення помилки.

` <?php$pkey u003d openssl_pkey_new('secret password');$spkac u003d openssl_spki_new($pkey, 'challenge string');$challenge u003d openssl_spki_export_challenge(' $| ;?> `

**Приклад #2 Приклад використання **openssl_spki_export_challenge()** з
\<keygen\>**

Вилучення рядка виклику, отриманого з елемента \<keygen\>

` <?php$challenge u003d openssl_spki_export_challenge(preg_replace('/SPKACu003d/', '', $_POST['spkac']));?><keygen nameu003d"spkac" challengeu003d"challenge string" keytypeu003d" ">`

### Дивіться також

- [openssl_spki_new()](function.openssl-spki-new.md) - Створення
нового підписаного відкритого ключа із викликом
- [openssl_spki_verify()](function.openssl-spki-verify.md) -
Перевіряє підписаний відкритий ключ та виклик
- [openssl_spki_export()](function.openssl-spki-export.md) - Експорт
відкритого ключа у форматі PEM з підписаного відкритого ключа з
викликом
- [openssl_get_md_methods()](function.openssl-get-md-methods.md) -
Отримати список доступних методів хешування
- [openssl_csr_new()](function.openssl-csr-new.md) - Генерує CSR
- [openssl_csr_sign()](function.openssl-csr-sign.md) - Підписати CSR
за допомогою іншого сертифіката (або їм же) та створити сертифікат
