- [« Опис кількох просторів імен в одному
файлі](language.namespaces.definitionmultiple.md)
- [Простори імен та динамічні особливості мови
»](language.namespaces.dynamic.md)

- [PHP Manual](index.md)
- [Простори імен](language.namespaces.md)
- Використання простору імен: основи

## Використання простору імен: основи

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

До обговорення використання просторів імен важливо зрозуміти, як PHP
дізнається, які елементи із простору імен запитуються у вашому коді.
Можна провести аналогію між просторами імен PHP та файловою.
системою. Є три способи звернутися до файлу у файловій системі:

1. Відносне ім'я файлу, таке як `foo.txt`, що перетворюється на
`currentdirectory/foo.txt`, де currentdirectory - поточна
директорія, у якій ми. Тоді, якщо поточна директорія
`/home/foo`, то ім'я перетворюється на `/home/foo/foo.txt`.
2. Відносне ім'я шляху, таке як subdirectory/foo.txt,
перетворюється на `currentdirectory/subdirectory/foo.txt`.
3. Абсолютне ім'я шляху, таке як `/main/foo.txt`, яке залишається
таким же: `/main/foo.txt`.

Той же принцип застосовується і до елементів з просторів імен PHP. Наприклад,
ім'я класу може бути вказано трьома способами:

1. Неповні імена (імена класів без префіксу), такі як
`$a u003d new foo();` або `foo::staticmethod();`. Якщо поточний
простір імен `currentnamespace`, то ці імена перетворюються на
`currentnamespace oo`. Якщо код знаходиться у глобальному просторі
імен, то імена залишаються такими ж: `foo`. Попередження: неповні
імена для функцій та констант будуть визначатися у глобальному
просторі імен, якщо вони не визначені у поточному просторі
імен. Докладніше в [Використання просторів імен: доступ до
глобальних функцій та класів] (language.namespaces.fallback.md).
2. Повні імена (імена класів із префіксами), такі як
`$a u003d new subnamespace oo();` або
`subnamespace oo::staticmethod();`. Якщо поточний простір імен
`currentnamespace`, то ці імена перетворюються на
`currentnamespace\subnamespace oo`. Якщо код знаходиться у глобальному
просторі імен, то імена перетворюються на `subnamespace oo`.
3. Абсолютні імена або імена із попереднім префіксом, що позначає
глобальний простір. $a u003d new

так само, як і записані: `currentnamespace oo`.

Нижче наведено приклад трьох варіантів синтаксису в реальному коді:

file1.php

` <?phpnamespace Foo\Bar\subnamespace;const FOO u003d 1;function foo() {}class foo{    static function staticmethod() {}}?> `

file2.php

` <?phpnamespace Foo\Bar;include 'file1.php';const FOO u003d 2;function foo() {}class foo{    static function staticmethod() {}}/* Неповні імена| // визначається як функція Foo\Bar oofoo::staticmethod(); // визначається як клас Foo\Bar oo з методом?staticmethodecho FOO; // визначається як константа Foo\Bar\FOO/* Повні імена */subnamespace oo(); // визначається як функція Foo\Bar\subnamespace oosubnamespace oo::staticmethod(); // визначається як Класс Foo\Bar\subnamespace oo // визначається як константа Foo\Bar\subnamespace\FOO/* Абсолютні імена */\Foo\Bar oo(); // визначається як функція Foo\Bar oo\Foo\Bar oo::staticmethod(); // визначається як клас Foo\Bar oo з методом?staticmethodecho \Foo\Bar\FOO; // визначається як константа Foo\Bar\FOO?> `

Зверніть увагу, що для доступу до будь-яких глобальних класів, функцій
або константам, може використовуватися абсолютне ім'я, таке як
**\strlen()**, або **\Exception**, або `\INI_ALL`.

**Приклад #1 Доступ до глобальних класів, функцій та константів з
простору імен**

` <?phpnamespace Foo;function strlen() {}const INI_ALL u003d 3;class Exception {}$a u003d \strlen('hi'); // викликає глобальну функцію strlen$b u003d \INI_ALL; // отримує доступ до глобальної константі INI_ALL$c u003d new \Exception('error'); // Створює примірник глобального класу Exception?> `
