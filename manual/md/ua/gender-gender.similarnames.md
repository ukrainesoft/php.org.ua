- [«Gender\Gender::isNick](gender-gender.isnick.md)
- [Gettext »](book.gettext.md)

- [PHP Manual](index.md)
- [Gender\Gender](class.gender.md)
- Отримати схожі імена

# Gender\Gender::similarNames

(PECL gender \>u003d 0.9.0)

Gender\Gender::similarNames — Отримати схожі імена

### Опис

public **Gender\Gender::similarNames**(string `$name`, int `$country` u003d
?): array

Отримати схожі імена для заданих імені та країни.

### Список параметрів

`name`
Ім'я для перевірки.

`country`
Ідентифікатор країни заданий константою класу. Якщо опущений, то
використовується ANY_COUNTRY.

### Значення, що повертаються

Повертає масив із знайденими схожими іменами.
