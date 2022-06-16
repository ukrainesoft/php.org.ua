- [« yaz_connect](function.yaz-connect.md)
- [yaz_element »](function.yaz-element.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Визначає бази даних у сеансі

# yaz_database

(PHP 4 u003d 4.0.6, PECL yaz u003d 0.9.0)

yaz_database — Визначає бази даних у сеансі

### Опис

**yaz_database**(resource `$id`, string `$databases`): bool

Функція дозволяє змінювати бази даних протягом сеансу, вказавши одну або
кілька баз даних, які будуть використовуватися при пошуку, пошуку та
і т.д. - перевизначення баз даних, вказаних у виклику
[yaz_connect()](function.yaz-connect.md).

### Список параметрів

`id`
Ресурс з'єднання, повернутий
[yaz_connect()](function.yaz-connect.md).

`databases`
Рядок, що містить одну або кілька баз даних. Декілька баз даних,
розділені знаком плюс `+`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
