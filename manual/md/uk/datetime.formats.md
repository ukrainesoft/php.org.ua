- [«timezone_version_get](function.timezone-version-get.md)
- [Формати часу »](datetime.formats.time.md)

- [PHP Manual](index.md)
- [Дата/час](book.datetime.md)
- Допустимі формати дати/часу

# Допустимі формати дати/часу

## Зміст

- [Формати часу](datetime.formats.time.md)
- [Формати дати](datetime.formats.date.md)
- [Складні формати](datetime.formats.compound.md)
- [Відносні формати](datetime.formats.relative.md)

У цьому розділі описуються всі різні формати, які приймає
парсер: [DateTimeImmutable](class.datetimeimmutable.md),
[DateTime](class.datetime.md),
[date_create_immutable()](function.date-create-immutable.md),
[date_create()](function.date-create.md),
[date_parse()](function.date-parse.md) та
[strtotime()](function.strtotime.md). Формати згруповані за
розділів. Найчастіше формати з різних розділів, розділені
пробілом, комою або точкою, можуть використовуватися в одній і тій же
рядку дати/часу. Для кожного з підтримуваних форматів наведено
один або більше прикладів, а також опис формату. Символи в
одинарних лапках нечутливі до регістру (``t'` еквівалентно як
`t`, так і `T`), символи в подвійних лапках чутливі до регістру
(``T`` означає тільки `T`).

Слід взяти до уваги загальне зведення правил.

1. Парсер допускає кожної одиниці виміру (рік, місяць, день,
годину, хвилину, секунду) повний діапазон значень. Для року це всього 4
цифри, для місяця – 0-12, дня – 0-31, а для години та хвилини – 0-59.

2. Для секунд допускається значення 60, оскільки іноді рядки дати з
цією стрибаючою секундою справді з'являються. Але PHP реалізує
час Unix, де "60" не є допустимою кількістю секунд і тому
відбувається переповнення.

3. Функція [strtotime()](function.strtotime.md) повертає
**`false`**, якщо якесь число знаходиться поза діапазонами, а
конструктор
[DateTimeImmutable::\_\_construct()](datetimeimmutable.construct.md)
викидає виняток.

4. Якщо рядок містить дату, то всі елементи часу обнулюються до 0.

5. Усі менш значущі елементи часу скидаються до 0, якщо у
даному рядку присутня якась частина часу.

6. Парсер не робить жодних перевірок, щоб зробити його швидше (і
більш універсальним).

7. Існує додаткова перевірка, якщо вказано недійсну
дата:

` <?php$res u003d date_parse("2015-09-31");var_dump($res["warnings"]);?> `

Результат виконання цього прикладу:

array(1) {
[11] u003d>
string(27) "The parsed date was invalid"
}

8. Останні випадки вже можна обробити, для цього необхідно
використовувати метод
[DateTimeImmutable::createFromFormat()](datetimeimmutable.createfromformat.md),
надаючи правильний формат.

` <?php$res u003d DateImmutable::createFromFormat("Y-m-d", "2015-09-34");var_dump($res); `

Результат виконання цього прикладу:

class DateTime#1 (3) {
public $date u003d>
string(26) "2015-10-04 17:24:43.000000"
$timezone_type u003d>
int(3)
$timezone u003d>
string(13) "Europe/London"
}
