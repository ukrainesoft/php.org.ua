- [« SplFileObject::setFlags](splfileobject.setflags.md)
- [SplFileObject::\_\_toString »](splfileobject.tostring.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Встановити максимальну довжину рядка

# SplFileObject::setMaxLineLen

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::setMaxLineLen — Встановити максимальну довжину рядка

### Опис

public **SplFileObject::setMaxLineLen**(int `$maxLength`): void

Встановлює максимальну довжину рядка читання.

### Список параметрів

`maxLength`
Максимальна довжина рядка.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає [DomainException](class.domainexception.md), якщо значення
`maxLength` менше нуля.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::setMaxLineLen()****

` <?php$file u003d new SplFileObject("lipsum.txt");$file->setMaxLineLen(20);foreach ($file as $line) {   echo $line . "
";}?> `

Вміст lipsum.txt

``` txtcode
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis nec sapien felis, ac sodales nisl.
Nulla vitae magna vitae purus aliquet consequat.
````

Результатом виконання цього прикладу буде щось подібне:

Lorem ipsum dolor s
it amet, consectetu
r adipiscing elit.

Duis nec sapien fel
is, ac sodales nisl
.

Nulla vitae magna v
itae purus aliquet
consequat.

### Дивіться також

- [SplFileObject::getMaxLineLen()](splfileobject.getmaxlinelen.md) -
Отримати максимальну довжину рядка
