- [« Функціональність, оголошена застарілою в PHP
7.0.x](migration70.deprecated.md)
- [Нові функції »](migration70.new-functions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.6.x на PHP 7.0.x](migration70.md)
- Змінені функції

## Змінені функції

### Ядро PHP

- [debug_zval_dump()](function.debug-zval-dump.md) тепер друкує
"int" замість "long", і "float" замість "double"
- [dirname()](function.dirname.md) приймає другий,
необов'язковий параметр `depth` для отримання імені директорії на
`depth` рівнів вище за поточну.
- [getrusage()](function.getrusage.md) тепер підтримується в
Windows.
- Функції [mktime()](function.mktime.md) та
[gmmktime()](function.gmmktime.md) більше не приймають параметр
`is_dst`.
- Функція [preg_replace()](function.preg-replace.md) більше не
підтримує " " (**`PREG_REPLACE_EVAL`**). Замість цього
використовуйте
[preg_replace_callback()](function.preg-replace-callback.md).
- Функція [setlocale()](function.setlocale.md) більше не приймає
параметр `category` передано у вигляді рядка. Тепер потрібно
використовувати константи **`LC_*`**.
- Функції [exec()](function.exec.md),
[system()](function.system.md) та
[passthru()](function.passthru.md) тепер захищені від NULL-байта.
- [shmop_open()](function.shmop-open.md) тепер повертає не
ціле, а ресурс, який має бути переданий у
[shmop_size()](function.shmop-size.md),
[shmop_write()](function.shmop-write.md),
[shmop_read()](function.shmop-read.md),
[shmop_close()](function.shmop-close.md) та
[shmop_delete()](function.shmop-delete.md).
- [substr()](function.substr.md) та
[iconv_substr()](function.iconv-substr.md) повертають порожню
рядок, якщо start дорівнює довжині рядка.
- Використання [xml_parser_free()](function.xml-parser-free.md)
тепер недостатньо для звільнення ресурсу парсера, якщо він
посилається на об'єкт, а цей об'єкт посилається на ресурс парсера. В
такому випадку необхідно додатково видалити вручну (unset)
змінну $parser.
