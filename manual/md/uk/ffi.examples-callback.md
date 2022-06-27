- [« Прості приклади використання FFI](ffi.examples-basic.md)
- [Комплексний приклад PHP/FFI/preloading
»](ffi.examples-complete.md)

- [PHP Manual](index.md)
- [Приклади](ffi.examples.md)
- Callback-функції PHP

## Callback-функції PHP

Можна присвоїти замикання PHP змінної типу "покажчик" (pointer) або
передати його як аргумент функції:

` <?php$zend u003d FFI::cdef("    typedef int (*zend_write_func_t)(const char *str, size_t str_length);    extern zend_write_ !
";$orig_zend_write u003d clone $zend->zend_write;$zend->zend_write u003d function($str, $len) {    global $orig_zend_write;    $orig
", 3);    $ret u003d $orig_zend_write($str, $len);    $orig_zend_write("}
", 2);    return $ret;};echo "Привіт, світ 2!
";$zend->zend_write u003d $orig_zend_write;echo "Привіт, світ 3!
";?> `

Результат виконання цього прикладу:

Привіт, світ 1!
{
Привіт, світ 2!
}
Привіт світ 3!

Хоч це і працює, але дана функціональність підтримується не на
всіх платформах libffi, не ефективна і викликає витік ресурсів при
завершення запитів.

**Підказка**

Тому рекомендується мінімізувати використання callback-функцій PHP.
