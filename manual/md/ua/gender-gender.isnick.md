- [«Gender\Gender::get](gender-gender.get.md)
- [Gender\Gender::similarNames »](gender-gender.similarnames.md)

- [PHP Manual](index.md)
- [Gender\Gender](class.gender.md)
- Перевіряє, чи є name0 псевдонімом для name1

# Gender\Gender::isNick

(PECL gender \>u003d 0.9.0)

Gender\Gender::isNick — Перевіряє, чи є name0 псевдонімом для
name1

### Опис

public **Gender\Gender::isNick**(string `$name0`, string `$name1`, int
`$country` u003d ?): array

Перевіряє, чи name0 є псевдонімом для name1.

### Список параметрів

`name0`
Ім'я для перевірки.

`name1`
Ім'я для перевірки.

`country`
Ідентифікатор країни, яка визначається константою класу Gender. Якщо
опущений, використовується ANY_COUNTRY.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
