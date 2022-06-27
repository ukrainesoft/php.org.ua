- [«eio_readlink](function.eio-readlink.md)
- [eio_rename »] (function.eio-rename.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Отримує абсолютний приведений до канонічного виду шлях

#eio_realpath

(PECL eio \>u003d 0.0.1dev)

eio_realpath - Отримує абсолютний приведений до канонічного виду шлях

### Опис

**eio_realpath**(
string `$path`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
string `$data` u003d NULL
): resource

**eio_realpath()** повертає абсолютний шлях через аргумент `result`
функції `callback`.

### Список параметрів

`path`
Короткий чи відносний шлях

`pri`

`callback`

`data`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **eio_realpath()****

` <?phpvar_dump(getcwd());function my_realpath_allback($data, $result) {   var_dump($result);}eio_realpath("../", EIO_PRI_DEFAULT, "my_realpath_alle"?

Результатом виконання цього прикладу буде щось подібне:

string(12) "/home/ruslan"
string(5) "/home"
