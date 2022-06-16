- [«Collator::asort](collator.asort.md)
- [Collator::\_\_construct »](collator.construct.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Порівнює два рядки Unicode

# Collator::compare

#collator_compare

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::compare -- collator_compare — Порівнює два рядки Unicode

### Опис

Об'єктно-орієнтований стиль

public **Collator::compare**(string `$string1`, string `$string2`):
int\|false

Процедурний стиль

**collator_compare**([Collator](class.collator.md) `$object`, string
`$string1`, string `$string2`): int\|false

Порівнює два рядки Unicode відповідно до правил зіставлення.

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

`string1`
Перший рядок для порівняння.

`string2`
Другий рядок для порівняння.

### Значення, що повертаються

Повертає результат порівняння:

- 1, якщо `string1` *більше* `string2`;

- 0, якщо `string1` *рівна* `string2`;

- -1, якщо `string1` *менше* `string2`.

У разі виникнення помилки повертає **`false`**.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Приклади

**Приклад #1 Приклад використання **collator_compare()****

` <?php$s1 u003d 'Hello';$s2 u003d 'hello';$coll u003d collator_create( 'en_US' );$res  u003d collator_compare( $coll, $s1, $s2 );if ($ res false) {    echo collator_get_error_message( $coll );} else if( $res > 0 ) {    echo "s1 більше s2
";} else if( $res < 0 ) {    echo "s1 менше s2
";} else {    echo "s1 і s2 рівні
";}?> `

Результат виконання цього прикладу:


s1 більше s2

**Приклад #2 Порівняння рядків без діакритичних знаків та без урахування
регістру**

` <?php$c u003d new Collator( 'en' );$c->setStrength( Collator::PRIMARY );if ( $c->compare( 'Séan', 'Sean' ) u003du003d 0 ){   | Значення рівні
";} `

Результат виконання цього прикладу:


Значення рівні

У цьому прикладі Collator порівнює, беручи до уваги лише базові
символи. Документація для
[Collator-\>setStrength()](collator.setstrength.md) пояснює
різні сильні сторони.

### Дивіться також

- [collator_sort()](collator.sort.md) - Сортує масив з
використанням зазначеного засобу сортування
