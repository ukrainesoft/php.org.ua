- [« Firebird (PDO)] (ref.pdo-firebird.md)
- [IBM (PDO) »](ref.pdo-ibm.md)

- [PHP Manual](index.md)
- [Firebird (PDO)] (ref.pdo-firebird.md)
- З'єднання з базою Firebird

#PDO_FIREBIRD DSN

(PECL PDO_FIREBIRD \>u003d 0.1.0)

PDO_FIREBIRD DSN — З'єднання з базою Firebird

### Опис

Ім'я джерела даних (Data Source Name, DSN) PDO_FIREBIRD складається з
наступних елементів:

Префікс DSN
**`firebird:`**.

`dbname`
Назва бази даних.

`charset`
Кодування.

`role`
Ім'я ролі SQL.

`dialect`
діалект бази даних; або `1` або `3`. Якщо не вказано, діалектом по
замовчуванням буде `3`. Доступно з PHP 7.4.0.

### Приклади

**Приклад #1 Приклад PDO_FIREBIRD DSN із шляхом**

Наступний приклад демонструє PDO_FIREBIRD DSN для з'єднання з базою
Firebird:

firebird:dbnameu003d/path/to/DATABASE.FDB

**Приклад #2 Приклад PDO_FIREBIRD DSN із шляхом та портом**

Наступний приклад демонструє PDO_FIREBIRD DSN із зазначенням шляху та порту
для з'єднання з базою Firebird:

firebird:dbnameu003dhostname/port:/path/to/DATABASE.FDB

**Приклад #3 Приклад PDO_FIREBIRD DSN для localhost та шляхи до employee.fdb
у системі Debian**

Наступний приклад демонструє PDO_FIREBIRD DSN для з'єднання з
Firebird на локальному хості та базою даних employee.fdb:

firebird:dbnameu003dlocalhost:/var/lib/firebird/2.5/data/employee.fdb

**Приклад #4 PDO_FIREBIRD DSN для підключення до dialect 1 database**

Наступний приклад демонструє PDO_FIREBIRD DSN для з'єднання з базою
даних Firebird test.fdb, створеної з допомогою діалекту 1.
Підтримується починаючи з PHP 7.4.0.

firebird:dbnameu003dlocalhost:/var/lib/firebird/2.5/data/test.fdb;charsetu003dutf-8;dialectu003d1
