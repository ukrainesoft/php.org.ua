- [« Перевірка (валідація)] (filter.examples.validation.md)
- [Функції фільтрації даних»] (ref.filter.md)

- [PHP Manual](index.md)
- [Приклади](filter.examples.md)
- Очищення (нормалізація)

## Очищення (нормалізація)

**Приклад #1 Нормалізація та валідація e-mail адрес**

` <?php$a u003d 'joe@example.org';$b u003d 'bogus - at - example dot org';$c u003d '(bogus@example.org)';$sanitized_a u003d filter_var($a, );if (filter_var($sanitized_a, FILTER_VALIDATE_EMAIL)) {    echo "Нормалізований e-mail (a) є вірним.
";}$sanitized_b u003d filter_var($b, FILTER_SANITIZE_EMAIL);if (filter_var($sanitized_b, FILTER_VALIDATE_EMAIL)) {    echo "Нормалізований e-mail   | ) є невірним.
";}$sanitized_c u003d filter_var($c, FILTER_SANITIZE_EMAIL);if (filter_var($sanitized_c, FILTER_VALIDATE_EMAIL)) {    echo "Нормалізований e-mail |
";    echo "До нормалізації: $c
";    echo "Після нормалізації: $sanitized_c
";}?> `

Результат виконання цього прикладу:

Нормалізований e-mail (a) є вірним.
Нормалізований e-mail (b) є неправильним.
Нормалізований e-mail (c) є вірним.
До нормалізації: (bogus@example.org)
Після нормалізації: bogus@example.org

**Приклад #2 Налаштування стандартного фільтра**

`filter.defaultu003du003dfull_special_charsfilter.default_flagsu003du003d0`
