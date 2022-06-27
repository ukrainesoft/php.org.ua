- [« Нова функціональність](migration70.new-features.md)
- [Змінені функції »](migration70.changed-functions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.6.x на PHP 7.0.x](migration70.md)
- функціональність, оголошена застарілою в PHP 7.0.x

## Функціональність, оголошена застарілою в PHP 7.0.x

### Конструктори в стилі PHP 4

Конструктори в стилі PHP 4 (методи з тим самим ім'ям, що й сам клас)
оголошені застарілими та будуть видалені в майбутньому. У PHP 7 буде
видаватись попередження **`E_DEPRECATED`** у разі використання
таких конструкторів. Класи, що реалізують метод **\_\_construct()**,
торкнутися не будуть.

`<?phpclass foo {   function foo() {        echo 'Я конструктор!'; }}?> `

Результат виконання цього прикладу:

Deprecated: Методи з тими самими назвами, як їх класифікації, не будуть constructors in a future version of PHP; foo has a deprecated constructor in example.php on line 3

### Статичні виклики нестатичних методів

[Статичні](language.oop5.static.md) виклики методів, не визначених
як **static**, оголошені застарілими та можуть бути в майбутньому заборонені.

` <?phpclass foo {   function bar() {        echo 'Я не статичний!'; }}foo::bar();?> `

Результат виконання цього прикладу:

Deprecated: Non-static method foo::bar() should not be called statically in - on line 8
Я не статичний!

### Опція salt функції [password_hash()](function.password-hash.md)

Опція salt функції [password_hash()](function.password-hash.md) була
оголошено застарілою для запобігання використанню розробниками
своїх власних salt (часто небезпечних). Функція самостійно
генерує криптографічно безпечний salt, якщо він не заданий
розробником, отже більше немає потреби в користувачах
генератори salt.

### Опція контексту SSL `capture_session_meta`

Опція контексту SSL `capture_session_meta` оголошена застарілою.
Метадані SSL тепер доступні за допомогою функції
[stream_get_meta_data()](function.stream-get-meta-data.md).

### Застарілі функції [LDAP](book.ldap.md)

Наступні функції були оголошені застарілими:

- [ldap_sort()](function.ldap-sort.md)
