- [« Threaded::isTerminated](threaded.isterminated.md)
- [Threaded::notify »](threaded.notify.md)

- [PHP Manual](index.md)
- [Threaded](class.threaded.md)
- обробка

# Threaded::merge

(PECL pthreads \>u003d 2.0.0)

Threaded::merge — Обробка

### Опис

public
**Threaded::merge**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$from`, bool `$overwrite` u003d ?): bool

Об'єднує дані у поточний об'єкт.

### Список параметрів

`from`
Дані об'єднання.

`overwrite`
Перезаписати існуючі ключі за промовчанням true.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єднання з таблицею властивостей пов'язаного об'єкта**

` <?php$array u003d [];while (count($array) < 10)    $array[] u003d count($array);$stdClass u003d new stdClass();$stdClass->foo u003d "$o" stdClass->bar u003d "bar";$stdClass->baz u003d "baz";$safe u003d new Threaded();$safe->merge($array);$safe->foo u003d "bar";$safe- >merge($stdClass, false);var_dump($safe);?> `

Результат виконання цього прикладу:

object(Threaded)#2 (13) {
["0"]u003d>
int(0)
["1"]u003d>
int(1)
["2"]u003d>
int(2)
["3"]u003d>
int(3)
["4"]u003d>
int(4)
["5"]u003d>
int(5)
["6"]u003d>
int(6)
["7"]u003d>
int(7)
["8"]u003d>
int(8)
["9"]u003d>
int(9)
["foo"]u003d>
string(3) "bar"
["bar"]u003d>
string(3) "bar"
["baz"]u003d>
string(3) "baz"
}
