- [«
ReflectionFunction::isDisabled](reflectionfunction.isdisabled.md)
- [ReflectionFunctionAbstract
»](class.reflectionfunctionabstract.md)

- [PHP Manual](index.md)
- [ReflectionFunction](class.reflectionfunction.md)
- Подання у вигляді рядка

# ReflectionFunction::\_\_toString

(PHP 5, PHP 7, PHP 8)

ReflectionFunction::\_\_toString — Подання у вигляді рядка

### Опис

public **ReflectionFunction::\_\_toString**(): string

Подання у вигляді рядка.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Результат виконання схожий на висновок
[ReflectionFunction::export()](reflectionfunction.export.md).

### Приклади

**Приклад #1 Приклад використання
**ReflectionFunction::\_\_toString()****

` <?phpfunction title($title, $name){    return sprintf("%s. %s
", $title, $name);}echo new ReflectionFunction('title');?> `

Результатом виконання цього прикладу буде щось подібне:

Function [ <user> function title ] {
@@ Command line code 1 - 1

- Parameters [2] {
Parameter #0 [ <required> $title ]
Parameter #1 [ <required> $name ]
}
}

### Дивіться також

- [ReflectionFunction::export()](reflectionfunction.export.md) -
Експортує функції
- [\_\_toString()](language.oop5.magic.md#object.tostring)
