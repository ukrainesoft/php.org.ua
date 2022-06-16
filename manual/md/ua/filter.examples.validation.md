- [« Приклади](filter.examples.md)
- [Очищення (нормалізація)»] (filter.examples.sanitization.md)

- [PHP Manual](index.md)
- [Приклади](filter.examples.md)
- Перевірка (валідація)

## Перевірка (валідація)

**Приклад #1 Валідація e-mail адреси, використовуючи функцію
[filter_var()](function.filter-var.md)**

` <?php$email_a u003d 'joe@example.com';$email_b u003d 'bogus';if (filter_var($email_a, FILTER_VALIDATE_EMAIL)) {    echo "E-mail адрес '$e.
";}if(filter_var($email_b, FILTER_VALIDATE_EMAIL)) {    echo "E-mail адрес '$email_b' вказаний вірно.
";} else {    echo "E-mail адреса '$email_b' вказано невірно.
";}?> `

Результат виконання цього прикладу:

E-mail адреса 'joe@example.com' вказана правильно.
E-mail адреса 'bogus' вказана неправильно.

**Приклад #2 Валідація IP-адреси, використовуючи функцію
[filter_var()](function.filter-var.md)**

` <?php$ip_a u003d '127.0.0.1';$ip_b u003d '42.42';if (filter_var($ip_a, FILTER_VALIDATE_IP)) {    echo "IP-адреса '$ip_a $ip_b, FILTER_VALIDATE_IP)) {    echo "IP-адреса '$ip_b' вказано вірно.";}?> `

Результат виконання цього прикладу:

Адреса '127.0.0.1' вказана правильно.

**Приклад #3 Додаткові параметри функції
[filter_var()](function.filter-var.md)**

`<?php$int_a u003d '1';$int_b u003d '-1';$int_c u003d '4';$options u003d array(    'options' u003d> array(        ''_           3,    ));if (filter_var($int_a, FILTER_VALIDATE_INT, $options) !u003du003d FALSE) {    echo "Число A '$int_a' є правильним|.
";}if(filter_var($int_b, FILTER_VALIDATE_INT, $options) !u003du003d FALSE) {    echo "Число B '$int_b' є вірним (від 0 до 3).
";}if (filter_var($int_c, FILTER_VALIDATE_INT, $options) !u003du003d FALSE) {    echo "Число C '$int_c' є вірним (від 0 до 3).
";}$options['options']['default'] u003d 1;if (($int_c u003d filter_var($int_c, FILTER_VALIDATE_INT, $options)) !u003du003d FALSE) {    echo '' вірним (від 0 і 3).";}?> `

Результат виконання цього прикладу:

Число A '1' є вірним (від 0 до 3).
Число C '1 є вірним (від 0 до 3).
