- [« openssl_free_key](function.openssl-free-key.md)
- [openssl_get_cipher_methods
»](function.openssl-get-cipher-methods.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Отримати доступні розташування сертифікатів

# openssl_get_cert_locations

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

openssl_get_cert_locations — Отримати доступні місця розташування
сертифікатів

### Опис

**openssl_get_cert_locations**(): array

**openssl_get_cert_locations()** повертає масив з інформацією про
доступних сховищах, в яких відбуватиметься пошук SSL
сертифікати.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив з розташуванням сховищ сертифікатів.

### Приклади

**Приклад #1 Приклад використання **openssl_get_cert_locations()****

` <?phpvar_dump(openssl_get_cert_locations());?> `

Результат виконання цього прикладу:

array(8) {
["default_cert_file"]u003d>
string(21) "/usr/lib/ssl/cert.pem"
["default_cert_file_env"]u003d>
string(13) "SSL_CERT_FILE"
["default_cert_dir"]u003d>
string(18) "/usr/lib/ssl/certs"
["default_cert_dir_env"]u003d>
string(12) "SSL_CERT_DIR"
["default_private_dir"]u003d>
string(20) "/usr/lib/ssl/private"
["default_default_cert_area"]u003d>
string(12) "/usr/lib/ssl"
["ini_cafile"]u003d>
string(0) ""
["ini_capath"]u003d>
string(0) ""
}
