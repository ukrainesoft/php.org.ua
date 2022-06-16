- [«array_udiff_uassoc](function.array-udiff-uassoc.md)
- [array_uintersect_assoc »](function.array-uintersect-assoc.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- обчислює розбіжність масивів, використовуючи для порівняння
callback-функцію

#array_udiff

(PHP 5, PHP 7, PHP 8)

array_udiff — Обчислює розбіжність масивів, використовуючи порівняння
callback-функцію

### Опис

**array_udiff**(array `$array`, array `...$arrays`,
[callable](language.types.callable.md) `$value_compare_func`): array

Обчислює розбіжність масивів, використовуючи порівняння даних
callback-функцію. Це відрізняється від поведінки
[array_diff()](function.array-diff.md), яка використовує вбудовану
функцію для порівняння даних.

### Список параметрів

`array`
Перший масив.

`arrays`
Масиви для порівняння.

`value_compare_func`
Callback-функція, що використовується для порівняння.

Функція порівняння повинна повертати ціле, яке менше, або
більше нуля, якщо перший аргумент є відповідно меншим,
рівним чи більшим, ніж другий.

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$a`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$b`): int

### Значення, що повертаються

Повертає масив, що містить всі елементи `array`, які не
існують у якомусь з інших аргументів.

### Приклади

**Приклад #1 Приклад використання **array_udiff()** з об'єктами класу
stdClass**

` <?php// массивы для сравнения$array1 u003d array(new stdclass, new stdclass,                new stdclass, new stdclass,               );$array2 u003d array(                new stdclass, new stdclass,               );// проставление некоторых свойств для объектов$array1 [0]->width u003d 11; $array1[0]->height u003d 3;$array1[1]->width u003d 7; $array1[1]->height u003d 1;$array1[2]->width u003d 2; $array1[2]->height u003d 9;$array1[3]->width u003d 5; $array1[3]->height u003d 7;$array2[0]->width u003d 7; $array2[0]->height u003d 5;$array2[1]->width u003d 9; $array2[1]->height u003d 2;function compare_by_area($a, $b) {   $areaA u003d $a->width * $a->height; $areaB u003d $b->width * $b->height; if ($areaA < $areaB) {        return -1; } elseif ($areaA > $areaB) {        return 1; } else {        return 0; }}print_r(array_udiff($array1, $array2, 'compare_by_area')));?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> stdClass Object
(
[width] u003d> 11
[height] u003d> 3
)

[1] u003d> stdClass Object
(
[width] u003d> 7
[height] u003d> 1
)

)

**Приклад #2 Приклад використання **array_udiff()** з об'єктами класу
DateTime**

` <?phpclass MyCalendar {    public $free u003d array(); public $booked u003d array(); public function __construct($week u003d 'now') {        $start u003d new DateTime($week); $start->modify('Monday this week midnight'); $endu003du003dclone$start; $end->modify('Friday this week midnight'); $interval u003d new DateInterval('P1D'); foreach (new DatePeriod($start, $interval, $end) as $freeTime) {           $this->free[] u003d $freeTime; }    }    public function bookAppointment(DateTime $date, $note) {        $this->booked[] u003d array('date' u003d> $date|| }    public function checkAvailability() {        return array_udiff($this->free, $this->booked, array($this, 'customCompare')); }    public function customCompare($free, $booked) {        if (is_array($free)) $a u003d $free['date']; else $a u003d $free; if (is_array($booked)) $b u003d $booked['date']; else $b u003d $booked; if ($a u003du003d $b) {             return 0; } elseif ($a > $b) {            return 1; } else {             return -1; }    }}// Створення календаря тижневих зустрічів$myCalendar u003d new MyCalendar;// Запис деяких тижневих зустріч $myCalendar->bookAppointment(newDateTime(' >|| bookAppointment(new DateTime('Wednesday this week'), "Катання на сноуборді.");$myCalendar->bookAppointment(new DateTime('Friday this week'), "Борьба | "Борьба | днів шляхом порівняння дат в $booked з датами з $freeecho "Я доступний в наступні дні на цьому тижню...

";foreach ($myCalendar->checkAvailability() as $free) {    echo $free->format('l'), "
";}echo "

";echo "Я зайнятий в наступні дні на цьому тижню...

";foreach ($myCalendar->booked as $booked) {   echo $booked['date']->format('l'), ": ", $booked['note'], "
";}?> `

Результат виконання цього прикладу:

Я доступний наступні дні цього тижня.

Tuesday
Thursday


Я зайнятий наступні дні цього тижня.

Monday: Прибирання квартири співробітника Google
Wednesday: Катання на сноуборді.
Friday: Боротьба з багами у коді.

### Примітки

> **Примітка**: Зверніть увагу, що ця функція обробляє лише
> один вимір багатовимірного масиву. Зрозуміло, ви можете обробити
> більше одного виміру, використовуючи
> `array_udiff($array1[0], $array2[0], "data_compare_func");`.

### Дивіться також

- [array_diff()](function.array-diff.md) - Обчислити розбіжність
масивів
- [array_diff_assoc()](function.array-diff-assoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу
- [array_diff_uassoc()](function.array-diff-uassoc.md) - Обчислює
розбіжність масивів з додатковою перевіркою індексу,
що здійснюється за допомогою callback-функції
- [array_udiff_assoc()](function.array-udiff-assoc.md) - Обчислює
розбіжність у масивах з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію
- [array_udiff_uassoc()](function.array-udiff-uassoc.md) - Обчислює
розбіжність у масивах з додатковою перевіркою індексів,
використовуючи для порівняння значень та індексів callback-функцію
- [array_intersect()](function.array-intersect.md) - Обчислює
сходження масивів
- [array_intersect_assoc()](function.array-intersect-assoc.md) -
Обчислює сходження масивів із додатковою перевіркою індексу
- [array_uintersect()](function.array-uintersect.md) - Обчислює
перетин масивів, використовуючи для порівняння значень
callback-функцію
- [array_uintersect_assoc()](function.array-uintersect-assoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексів,
використовуючи для порівняння значень callback-функцію
- [array_uintersect_uassoc()](function.array-uintersect-uassoc.md) -
Обчислює перетин масивів з додатковою перевіркою індексу,
використовуючи для порівняння індексів та значень індивідуальні
callback-функції
