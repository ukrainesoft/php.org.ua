- [« Функції Mysql_xdevapi](ref.mysql-xdevapi.md)
- [getSession »](function.mysql-xdevapi-getsession.md)

- [PHP Manual](index.md)
- [Функції Mysql_xdevapi](ref.mysql-xdevapi.md)
- пов'язує підготовлені змінні твердження як
параметрів

# expression

(No version information available, might only be in Git)

expression — Зв'язує підготовлені змінні твердження як
параметрів

### Опис

**mysql_xdevapi xpression**(string `$expression`): object

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`expression`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **mysql_xdevapi\Expression()****

` <?php$expression u003d mysql_xdevapi\Expression("[age,job]");$res  u003d $coll->find("age > 30")->fields($expression)->limit(3)-> execute();$datau003du003d$res->fetchAll();print_r($data);?> `

Результатом виконання цього прикладу буде щось подібне:

<?php
