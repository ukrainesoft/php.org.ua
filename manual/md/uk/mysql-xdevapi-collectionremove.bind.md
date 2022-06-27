- [«
mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)
- [CollectionRemove::\_\_construct
»](mysql-xdevapi-collectionremove.construct.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)
- Прив'язує значення до заповнювача

# CollectionRemove::bind

(No version information available, might only be in Git)

CollectionRemove::bind — Прив'язує значення до заповнювача

### Опис

public **mysql_xdevapi\CollectionRemove::bind**(array
`$placeholder_values`):
[mysql_xdevapi\CollectionRemove](class.mysql-xdevapi-collectionremove.md)

Прив'язує параметр до заповнювача за умови пошуку операції видалення.

Заповнювач має вигляд :NAME, де ':' - це загальний префікс, який має
завжди вказаний перед будь-яким NAME, де NAME це ім'я заповнювача. Метод
bind приймає список заповнювачів, якщо за умови пошуку операції
видалення необхідно замінити на кілька об'єктів.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`placeholder_values`
Значення заповнювача для заміни за умови пошуку. Допускається
використання кількох значень, які необхідно передати у вигляді
масиву зіставлень PLACEHOLDER_NAME-\>PLACEHOLDER_VALUE.

### Значення, що повертаються

Об'єкт CollectionRemove, який можна використовувати для виконання
команди або додавання додаткових операцій.

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionRemove::bind()****

` <?php$res u003d $coll->remove('age > :age_from and age < :age_to')->bind(['age_from' u003d> 20, 'age_to' u003d> 50])->limit(7 )->execute();?> `
