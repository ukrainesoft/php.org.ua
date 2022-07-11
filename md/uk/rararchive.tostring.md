- [« RarArchive::setAllowBroken](rararchive.setallowbroken.md)
- [RarEntry »](class.rarentry.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Отримати текстове уявлення

# RarArchive::\_\_toString

(PECL rar \>u003d 2.0.0)

RarArchive::\_\_toString — Отримати текстове уявлення

### Опис

public **RarArchive::\_\_toString**(): string

Повертає рядок, який представляє об'єкт
[RarArchive](class.rararchive.md). Вона містить повний шлях до
поточного відкритого тому архіву та інформацію про те, чи коректний ресурс
або вже закрито за допомогою [RarArchive::close()](rararchive.close.md).

Даний метод призначений тільки для налагодження, тому що немає жодного
гарантії з чого складатиметься відповідь і як вона буде відформатована.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Текстове представлення об'єкта [RarArchive](class.rararchive.md).
Контент не визначено.

### Приклади

**Приклад #1 Приклад використання **RarArchive::\_\_toString()****

` <?php$rar_arch u003d RarArchive::open('latest_winrar.rar');echo $rar_arch."
";$rar_arch->close();echo $rar_arch."
";?> `

Результатом виконання цього прикладу буде щось подібне:

RAR Archive "D:\php_rar runk ests\latest_winrar.rar"
RAR Archive "D:\php_rar runk ests\latest_winrar.rar" (closed)
