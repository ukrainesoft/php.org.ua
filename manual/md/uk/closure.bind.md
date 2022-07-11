- [« Closure::\_\_construct](closure.construct.md)
- [Closure::bindTo »](closure.bindto.md)

- [PHP Manual](index.md)
- [Closure](class.closure.md)
- Дублює замикання із зазначенням конкретного зв'язаного об'єкту та
області видимості класу

# Closure::bind

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

Closure::bind — Дублює замикання із зазначенням конкретного зв'язаного
об'єкта та області видимості класу

### Опис

public static **Closure::bind**([Closure](class.closure.md)
`$closure`, ?object `$newThis`, object\|string\|null `$newScope` u003d
"static"): ?[Closure](class.closure.md)

Цей метод є статичним варіантом
[Closure::bindTo()](closure.bindto.md). Дивіться документацію до
зазначеного методу для детальної інформації.

### Список параметрів

`closure`
Анонімна функція для прив'язування об'єкту.

`newThis`
Об'єкт, до якого буде прив'язана передана анонімна функція, або
**`null`** для від'єднання функції від її поточного об'єкта.

`newScope`
Область видимості класу, з якою має бути пов'язане замикання або
'static' для збереження поточної області видимості. Якщо передано об'єкт,
то буде використано його клас. Цей параметр визначає видимість
protected (захищених) та private (закритих) методів прив'язаного
об'єкт. Заборонено як цей параметр передавати (об'єктом)
внутрішній клас.

### Значення, що повертаються

Повертає новий об'єкт [Closure](class.closure.md) або **`null`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад **Closure::bind()****

`<?phpclass A {    private static $sfoo u003d 1; private $ifoo u003d 2;}$cl1 u003d static function() {    return A::$sfoo;};$cl2 u003d function() {    return $this->ifoo: c:| , null, 'A');$bcl2 u003d Closure::bind($cl2, new A(), 'A');echo $bcl1(), "
";echo $bcl2(), "
";?> `

Результатом виконання цього прикладу буде щось подібне:

1
2

### Дивіться також

- [Анонімні функції](functions.anonymous.md)
- [Closure::bindTo()](closure.bindto.md) - Дублює замикання з
зазначенням пов'язаного об'єкта та області видимості класу
