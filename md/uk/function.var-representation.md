- [« Функції var_representation](ref.var-representation.md)
- [Інші служби »](refs.remote.other.md)

- [PHP Manual](index.md)
- [Функції var_representation](ref.var-representation.md)
- Повертає коротку, читаючу, розбірливу рядкову виставу
змінної

# var_representation

(PECL var_representation \>u003d 0.1.0)

var_representation - Повертає коротке, читане, розбірливе
рядкове подання змінної

### Опис

**var_representation**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$flags` u003d 0): string

**var_representation()** (модуль PECL var_representation) повертає
рядок зі структурованою інформацією про цю змінну. Функція
схожа на [var_export()](function.var-export.md) з відмінностями у
відступах, екрануванні рядків та уявленнях масиву.

### Список параметрів

`value`
Змінна, на яку створюється уявлення.

`flags`
Бітова маска, що складається з: **`VAR_REPRESENTATION_SINGLE_LINE`**,
**`VAR_REPRESENTATION_UNESCAPED`**. Поведінка цих констант описано на
сторінці [константи
var_representation](var-representation.constants.md).

### Значення, що повертаються

Повертає уявлення змінної.

### Приклади

**Приклад #1 Приклад використання **var_representation()****

` <?php$a u003d [1, 2, ['key' u003d> 'value']];echo var_representation($a), "
";echo var_representation($a, VAR_REPRESENTATION_SINGLE_LINE), "
";?> `

Результат виконання цього прикладу:

[
1,
2,
[
'key' u003d> 'value',
],
]
[1, 2, ['key' u003d> 'value']]

**Приклад #2 Екранування символів керування**

`<?phpecho var_representation("Content-Length: 123
");

Результат виконання цього прикладу:

"Content-Length: 123
"

**Приклад #3 Експорт **stdClass****

` <?php$person u003d new stdClass;$person->name u003d 'ElePHPant ElePHPantsdotter';$person->website u003d 'https://php.net/elephpant.php';echo var_representation($person); `

Результат виконання цього прикладу:

(object) [
'name' u003d> 'ElePHPant ElePHPantsdotter',
'website' u003d> 'https://php.net/elephpant.php',
]

**Приклад #4 Експортування класів**

`<?phpclass A { public $var; }$a u003d new A;$a->var u003d 5;echo var_representation($a);?> `

Результат виконання цього прикладу:

\A::__set_state([
'var' u003d> 5,
])

**Приклад #5 Приклад використання
[\_\_set_state()](language.oop5.magic.md#object.set-state)**

`<?phpclass A{    public $var1; public $var2; public static function __set_state($an_array)    {        $obj u003d new A; $obj->var1 u003d $an_array['var1']; $obj->var2 u003d $an_array['var2']; return $obj; }}$a u003d new A;$a->var1 u003d 5;$a->var2 u003d 'foo';eval('$b u003d ' . var_representation($a) . ';'); // $b u003d \A::__set_state([                                              //   'var1' u003d> 5,                                              //   'var2' u003d> 'foo',                                              // ]);var_dump($b);?> `

Результат виконання цього прикладу:

object(A)#2 (2) {
["var1"]u003d>
int(5)
["var2"]u003d>
string(3) "foo"
}

### Дивіться також

- [var_export()](function.var-export.md) - Виводить або повертає
інтерпретоване рядкове подання змінної
