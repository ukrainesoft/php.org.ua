- [«unset](function.unset.md)
- [var_export »](function.var-export.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Виводить інформацію про змінну

#var_dump

(PHP 4, PHP 5, PHP 7, PHP 8)

var_dump — Виводить інформацію про змінну

### Опис

**var_dump**([mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`): void

Функція відображає структуровану інформацію про один або кілька
виразах, включаючи їх тип та значення. Масиви та об'єкти аналізуються
рекурсивно з різним відступом значень для візуального відображення
структури.

Усі загальнодоступні, закриті та захищені властивості об'єкта будуть
повернені при висновку, якщо об'єкт не реалізує метод
[\_\_debugInfo()](language.oop5.magic.md#language.oop5.magic.debuginfo).

**Підказка**

Як і з будь-якою іншою функцією, що здійснює виведення безпосередньо в
браузер, ви можете використовувати [функції контролю
виводу](book.outcontrol.md), щоб перехоплювати виведені цієї
функцією дані та зберігати їх, наприклад, у рядок (string).

### Список параметрів

`value`
Вираз, який потрібно відобразити.

`values`
Наступні вирази відображення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **var_dump()****

` <?php$a u003d array(1, 2, array("a", "b", "c"));var_dump($a);?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
int(1)
[1]u003d>
int(2)
[2]u003d>
array(3) {
[0]u003d>
string(1) "a"
[1]u003d>
string(1) "b"
[2]u003d>
string(1) "c"
}
}

` <?php$b u003d 3.1;$c u003d true;var_dump($b, $c);?> `

Результат виконання цього прикладу:

float(3.1)
bool(true)

### Дивіться також

- [print_r()](function.print-r.md) - Виводить легкочитану
інформацію про змінну
- [debug_zval_dump()](function.debug-zval-dump.md) - Виводить
рядкове уявлення внутрішньої структури zval
- [var_export()](function.var-export.md) - Виводить або повертає
інтерпретоване рядкове подання змінної
- [\_\_debugInfo()](language.oop5.magic.md#language.oop5.magic.debuginfo)
