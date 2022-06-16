- [«timezone_location_get](function.timezone-location-get.md)
- [timezone_name_get »](function.timezone-name-get.md)

- [PHP Manual](index.md)
- [Функції дати та часу](ref.datetime.md)
- Повертає часовий пояс відповідно до абревіатури

#timezone_name_from_abbr

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

timezone_name_from_abbr — Повертає часовий пояс відповідно до
абревіатурою

### Опис

**timezone_name_from_abbr**(string `$abbr`, int `$utcOffset` u003d -1, int
`$isDST` u003d -1): string\|false

### Список параметрів

`abbr`
Абревіатура часового поясу.

`utcOffset`
Зміщення щодо GMT за секунди. За замовчуванням -1, що означає
повернення першого знайденого часового поясу, що відповідає абревіатурі
`abbr`. Інакше буде здійснено пошук часового поясу з
заданим усуненням. Якщо пошук завершиться невдачею, буде повернено
найближчий до усунення часовий пояс.

`isDST`
Виправлення на літній час. За замовчуванням -1, у цьому випадку виправлення на
літній час не враховується. Якщо передано 1, усунення `utcOffset`
враховує чинний літній час. Якщо заданий 0, `utcOffset`
розраховується з урахуванням зимового часу. Якщо `abbr` не існує,
визначення часового поясу спирається тільки на `utcOffset` та `isDST`.

### Значення, що повертаються

Повертає ім'я часового поясу або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **timezone_name_from_abbr()****

`<?phpecho timezone_name_from_abbr("CET") . "
";echo timezone_name_from_abbr("", 3600, 0) . "
";?> `

Результатом виконання цього прикладу буде щось подібне:

Europe/Berlin
Europe/Paris

### Дивіться також

- [timezone_abbreviations_list()](function.timezone-abbreviations-list.md) -
Псевдонім DateTimeZone::listAbbreviations
