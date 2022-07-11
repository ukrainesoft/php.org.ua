- [«jddayofweek](function.jddayofweek.md)
- [jdtofrench »] (function.jdtofrench.md)

- [PHP Manual](index.md)
- [Календарь](ref.calendar.md)
- Повертає назву місяця

#jdmonthname

(PHP 4, PHP 5, PHP 7, PHP 8)

jdmonthname — Повертає назву місяця

### Опис

**jdmonthname**(int `$julian_day`, int `$mode`): string

Повертає рядок, який містить назву місяця. `mode` задає режим
роботи функції перетворення з числа днів у юліанському літочисленні,
а також визначає тип значення назви місяця, що повертається.

| Режим | Назва місяця Значення |
|---------------------------------|--------------- --------------|----------------------------------- -------------------------------------------------- -------------------------------------------|
| **`CAL_MONTH_GREGORIAN_SHORT`** | Григоріанське - скорочене | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec |
| **`CAL_MONTH_GREGORIAN_LONG`** | Григоріанське | January, February, March, April, May, June, July, August, September, October, November, December |
| **`CAL_MONTH_JULIAN_SHORT`** | Юліанське - скорочене | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec |
| **`CAL_MONTH_JULIAN_LONG`** | Юліанське | January, February, March, April, May, June, July, August, September, October, November, December |
| **`CAL_MONTH_JEWISH`** | Єврейське | Тишрі, Хешван, Кіслев, Тевет, Шеват, АдарІ, АдарІІ, Nisan, Iyyar, Sivan, Tammuz, Av, Elul |
| **`CAL_MONTH_FRENCH`** | Французьке республіканське | Vendemiaire, Brumaire, Frimaire, Nivose, Pluviose, Ventose, Germinal, Floreal, Prairial, Messidor, Thermidor, Fructidor, Extra |

**Режими роботи**

### Список параметрів

`jday`
Число днів у юліанському літочисленні, яке потрібно перетворити

`mode`
Режим календаря (див. таблицю вище)

### Значення, що повертаються

Назва місяця для заданого Юліанського Дня, що відповідає календарю
`mode`.
