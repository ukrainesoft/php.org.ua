- [« Атака за допомогою ін'єкцій у
запиту](mongodb.security.request_injection.md)
- [MongoDB\Driver »](book.mongodb.md)

- [PHP Manual](index.md)
- [Безпека](mongodb.security.md)
- Атака за допомогою ін'єкцій у скриптах

# Атака за допомогою ін'єкцій у скриптах

Якщо ви використовуєте JavaScript, переконайтеся, що всі змінні, які
перетинають кордон PHP-JavaScript, передаються у поле `scope`
[MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md), а не
інтерполуються у рядок JavaScript. Це може виникнути при
використання пропозицій `$where` у запитах, командах mapReduce та
group, а також у будь-який інший час, коли ви можете передати JavaScript
до бази даних.

Наприклад, припустимо, що у нас є деякий JavaScript, щоб
вітати користувача у журналах бази даних. Ми могли б зробити:

` <?php$m u003d new MongoDB\Driver\Manager;// Не робіть так!!!$username u003d $_GET['field'];$cmd u003d new \MongoDB\Driver\Command( [    'eval'| "print('Привіт, $username!');"] );$r u003d $m->executeCommand( 'dramio', $cmd );?> `

Однак що, якщо зловмисник передасть JavaScript?

` <?php$m u003d new MongoDB\Driver\Manager;// Не робіть так!!!$username u003d $_GET['field'];// $username is set to "'); db.users.drop( ); print('"$cmd u003d new \MongoDB\Driver\Command( [    'eval' u003d> "print('Привіт, $username!');"] );$r u003d $m->executeCommand( 'drami) ', $cmd );?> `

Тепер MongoDB виконає рядок JavaScript
`"print('Привіт, '); db.users.drop(); print('!');"`. Цю атаку легко
уникнути: використовуйте `args` для передачі змінних з PHP
JavaScript:

` <?php$m u003d new MongoDB\Driver\Manager;$_GET['field'] u003d 'derick';$args u003d [ $_GET['field'] ];$cmd u003d new \MongoDB\Driver\Command( [   'eval' u003d> "function greet(username) { print('Привіт, ' + username + '!'); }",   'args' u003d> $args,] );$ | 'dramio', $cmd );?> `

Це додає аргумент в область JavaScript, яка використовується в
як аргумент для функції `greet`. Тепер, якщо хтось спробує
відправити шкідливий код, MongoDB надрукує нешкідливо
`Привіт, '); db.dropDatabase(); print('!`).

Використання аргументів допомагає запобігти виконанню шкідливого
введення базою даних. Тим не менш, ви повинні переконатися, що ваш код не
перевернеться і все одно виконає введення! Найкраще уникати виконання
*будь-якого* JavaScript на сервері.

Настійно рекомендується уникати речення [» $where
clause](https://www.mongodb.com/docs/manual/reference/operator/query/where/#considerations)
із запитами, оскільки це істотно впливає на продуктивність. за
можливості використовуйте або звичайні оператори запитів, або
[» Aggregation
Framework](https://www.mongodb.com/docs/manual/core/aggregation-pipeline).

Як альтернатива
[» MapReduce](https://www.mongodb.com/docs/manual/core/map-reduce/),
використовує JavaScript, розгляньте можливість використання
[» Aggregation
Framework](https://www.mongodb.com/docs/manual/core/aggregation-pipeline).
На відміну від Map/Reduce, він використовує ідіоматичний мову для
побудови запитів, без необхідності писати та використовувати більше
повільний підхід JavaScript, який потрібний для Map/Reduce.

Команда
[»eval](https://www.mongodb.com/docs/manual/reference/command/eval/)
застаріла з MongoDB 3.0, і її слід уникати.
