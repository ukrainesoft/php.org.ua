- [« Визначення просторів
імен](language.namespaces.definition.md)
- [Опис кількох просторів імен в одному файлі
»](language.namespaces.definitionmultiple.md)

- [PHP Manual](index.md)
- [Простори імен](language.namespaces.md)
- Визначення підпросторів імен

## Визначення підпросторів імен

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

Так само як файли та каталоги, простори імен PHP дозволяють створювати
ієрархію імен. Таким чином, ім'я простору може бути визначено з
підрівнями:

**Приклад #1 Визначення простору імен з ієрархією**

` <?phpnamespace MyProject\Sub\Level;const CONNECT_OK u003d 1;class Connection { /* ... */ }function connect() { /* ... */  }?> `

Вищенаведений приклад створює константу
`MyProject\Sub\Level\CONNECT_OK`, клас `MyProject\Sub\Level\Connection`
та функцію `MyProject\Sub\Leve
