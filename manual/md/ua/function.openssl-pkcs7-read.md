- [« openssl_pkcs7_encrypt](function.openssl-pkcs7-encrypt.md)
- [openssl_pkcs7_sign »](function.openssl-pkcs7-sign.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експортувати файл PKCS7 до масиву сертифікатів PEM

# openssl_pkcs7_read

(PHP 7 \>u003d 7.2.0, PHP 8)

openssl_pkcs7_read — Експортувати файл PKCS7 до масиву сертифікатів PEM

### Опис

**openssl_pkcs7_read**(string `$data`, array `&$certificates`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`data`
Рядок даних, які ви бажаєте проаналізувати (формат p7b).

`certificates`
Масив сертифікатів PEM із вхідних даних p7b.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Get a PEM array from a P7B file**

` <?php$file u003d 'certs.p7b';$f u003d file_get_contents($file);$p7 u003d array();$r u003d openssl_pkcs7_read($f, $p7);if ($r u003du003du003d false) {    printf("ПОМИЛКА: %s не є коректним файлом p7b".PHP_EOL, $file); for($e u003d openssl_error_string(), $i u003d 0; $e; $e u003d openssl_error_string(), $i++)            printf("SSL l%d| exit(1);}print_r($p7);?> `

### Дивіться також

- [openssl_csr_sign()](function.openssl-csr-sign.md) - Підписати CSR
за допомогою іншого сертифіката (або їм же) та створити сертифікат
