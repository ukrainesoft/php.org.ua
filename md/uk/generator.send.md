- [« Generator::rewind](generator.rewind.md)
- [Generator::throw »](generator.throw.md)

- [PHP Manual](index.md)
- [Generator](class.generator.md)
- Передати значення у генератор

# Generator::send

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

Generator::send — Передати значення в генератор

### Опис

public
**Generator::send**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Передача заданого значення в генератор як результат поточного виразу
[yield](language.generators.syntax.md#control-structures.yield) та
поновлення його роботи.

Якщо генератор ще не дійшов до першого виклику оператора
[yield](language.generators.syntax.md#control-structures.yield), він
виконається до моменту першого дзвінка
[yield](language.generators.syntax.md#control-structures.yield),
перш ніж передасть у нього значення. Так що немає потреби викликати
генератор за допомогою [Generator::next()](generator.next.md) перед
виклик цього методу (як це робиться в Python).

### Список параметрів

`value`
Значення, що відправляється в генератор. Це значення буде поточним
значенням вираження, що повертається
[yield](language.generators.syntax.md#control-structures.yield)
генератори.

### Значення, що повертаються

Повертає згенероване значення.

### Приклади

**Приклад #1 Використання **Generator::send()** для впровадження значень**

` <?phpfunction printer() {    echo "I'm printer!".PHP_EOL; while(true)${  $string u003d yield; echo $string.PHP_EOL; }}$printeru003du003dprinter();$printer->send('Hello world!');$printer->send('Bye world!');?> `

Результат виконання цього прикладу:

I'm printer!
Hello world!
Bye world!
