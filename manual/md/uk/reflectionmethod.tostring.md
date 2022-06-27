- [«
ReflectionMethod::setAccessible](reflectionmethod.setaccessible.md)
- [ReflectionNamedType »](class.reflectionnamedtype.md)

- [PHP Manual](index.md)
- [ReflectionMethod](class.reflectionmethod.md)
- Повертає рядкове представлення об'єкта ReflectionMethod

# ReflectionMethod::\_\_toString

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::\_\_toString — Повертає рядкову виставу
об'єкта ReflectionMethod

### Опис

public **ReflectionMethod::\_\_toString**(): string

Повертає строкове представлення об'єкта ReflectionMethod.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Строкове представлення об'єкта
[ReflectionMethod](class.reflectionmethod.md).

### Приклади

**Приклад #1 Приклад використання **ReflectionMethod::\_\_toString()****

`<?phpclass HelloWorld {    public function sayHelloTo($name) {       return 'Привіт, ' . $name; }}$reflectionMethod u003d new ReflectionMethod(new HelloWorld(), 'sayHelloTo');echo $reflectionMethod;?> `

Результат виконання цього прикладу:

Method [ <user> public method sayHelloTo ] {
@@ /var/www/examples/reflection.php 16 - 18

- Parameters [1] {
Parameter #0 [ <required> $name ]
}
}

### Дивіться також

- [ReflectionMethod::export()](reflectionmethod.export.md) - Експорт
відбитого методу
- [\_\_toString()](language.oop5.magic.md#object.tostring)
