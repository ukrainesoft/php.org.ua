- [« Список змін](changelog.mysql_xdevapi.md)
- [Функції Mysql_xdevapi »](ref.mysql-xdevapi.md)

- [PHP Manual](index.md)
- [Mysql_xdevapi](book.mysql-xdevapi.md)
- Приклади

# Приклади

Центральною точкою входу в X DevAPI є функція
**mysql_xdevapi\getSession()**, яка отримує URI на сервер MySQL 8.0
та повертає об'єкт **mysql_xdevap\Session**.

**Приклад #1 Підключення до сервера MySQL**

` <?phptry { {   $session u003d mysql_xdevapi\getSession("mysqlx://user:password@host");} catch(Exception $e) {    die("Не удалося встановити з'єднання: $| );}// ... використовуйте $session?> `

Сесія забезпечує повний доступ до API. Для нової установки сервера
MySQL першим кроком є створення схеми бази даних із колекцією для
зберігання даних:

**Приклад #2 Створення схеми та колекції на сервері MySQL**

` <?php$schema u003d $session->createSchema("test");$collection u003d $schema->createCollection("example");?> `

При зберіганні даних, як правило,
[json_encode()](function.json-encode.md) використовується для кодування
даних у JSON, який потім може зберігатися в колекції.

У наступному прикладі дані зберігаються у колекції, яку ми створили
раніше, а потім знову витягаємо їх частини.

**Приклад #3 Зберігання та отримання даних**

` <?php$marco u003d [ "name" u003d> "Marco",  "age"  u003d> 19,  "job"  u003d> "Programmer"];$mike u003d [  "name" u003d> "| u003d> 39, "job"  u003d> "Manager"];$schema u003d $session->getSchema("test");$collection u003d $schema->getCollection("example");$collection->add($marco , $mike)->execute();var_dump($collection->find("name u003d 'Mike'")->execute()->fetchOne());?> `

Результатом виконання цього прикладу буде щось подібне:

array(4) {
["_id"]u003d>
string(28) "00005ad66aaf000000000000003"
["age"]u003d>
int(39)
["job"]u003d>
string(7) "Manager"
["name"]u003d>
string(4) "Mike"
}

Приклад демонструє, що сервер MySQL додає додаткове поле з
ім'ям `_id`, яке є первинним ключем до документа.

У прикладі також показано, що вилучені дані сортуються в
алфавітному порядку. Цей конкретний порядок виходить із ефективного
двійкового сховища всередині сервера MySQL, але на нього не випливає
сподіватися. За подробицями звертайтесь до документації за типом даних
MySQL JSON.

За бажанням можна використовувати ітератори PHP для вилучення кількох
документів:

**Приклад #4 Вилучення та ітерація декількох документів**

` <?php$result u003d $collection->find()->execute();foreach ($result as $doc) { echo "${doc["name"]} is a ${doc["job"] }.
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Marco is a Programmer.
Mike є Manager.
