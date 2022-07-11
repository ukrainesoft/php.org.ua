- [«
CollectionFind::lockExclusive](mysql-xdevapi-collectionfind.lockexclusive.md)
- [CollectionFind::offset »](mysql-xdevapi-collectionfind.offset.md)

- [PHP Manual](index.md)
- [mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)
- Виконує операцію із SHARED LOCK

# CollectionFind::lockShared

(No version information available, might only be in Git)

CollectionFind::lockShared — Виконує операцію з SHARED LOCK

### Опис

public **mysql_xdevapi\CollectionFind::lockShared**(int
`$lock_waiting_option` u003d ?):
[mysql_xdevapi\CollectionFind](class.mysql-xdevapi-collectionfind.md)

Дозволяє розділяти документи між кількома транзакціями, які
блокуються у режимі спільного використання.

Інші сеанси можуть читати рядки, але не можуть змінювати їх, поки ваша
транзакцію не буде зафіксовано.

Якщо якийсь із цих рядків був змінений іншою транзакцією, яка
ще не зафіксована,

ваш запит почекає завершення цієї транзакції, а потім використовує самі
останні значення.

### Список параметрів

`lock_waiting_option`
Додаткова опція очікування. За замовчуванням має значення
**`MYSQLX_LOCK_DEFAULT`**. Допустимі значення представлені константами:

- **`MYSQLX_LOCK_DEFAULT`**

- **`MYSQLX_LOCK_NOWAIT`**

- **`MYSQLX_LOCK_SKIP_LOCKED`**

### Значення, що повертаються

Об'єкт CollectionFind, який можна використовувати для подальшого
обробки

### Приклади

**Приклад #1 Приклад використання
**mysql_xdevapi\CollectionFind::lockShared()****

` <?php$session u003d mysql_xdevapi\getSession("mysqlx://user:password@localhost");$schema    u003d $session->getSchema("addressbook");$collection u003d $schema->createColle );$session->startTransaction();$result u003d $collection ->find("age > 50") ->lockShared() ->execute();// ... читаємо об'єкт врежиме міс транзакцію і розблокуємо документ$session->commit();?> `
