- [« ReflectionClass::hasConstant](reflectionclass.hasconstant.md)
- [ReflectionClass::hasProperty »](reflectionclass.hasproperty.md)

- [PHP Manual](index.md)
- [ReflectionClass](class.reflectionclass.md)
- Перевіряє, чи заданий метод

# ReflectionClass::hasMethod

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

ReflectionClass::hasMethod — Перевіряє, чи заданий метод

### Опис

public **ReflectionClass::hasMethod**(string `$name`): bool

Перевіряє, чи в класі визначений зазначений метод чи ні.

### Список параметрів

`name`
Ім'я методу, що перевіряється.

### Значення, що повертаються

**`true`**, якщо метод визначений, інакше **`false`**

### Приклади

**Приклад #1 Приклад використання **ReflectionClass::hasMethod()****

`<?phpClass C {    public function publicFoo() {        return true; }   protected function protectedFoo() {        return true; }   private function privateFoo() {        return true; }   static function staticFoo() {        return true; }}$rc u003d new ReflectionClass("C");var_dump($rc->hasMethod('publicFoo'));var_dump($rc->hasMethod('protectedFoo'));var_dump($rc->hasMethod(' privateFoo'));var_dump($rc->hasMethod('staticFoo'));// C не має метод farbar_dump($rc->hasMethod('bar'));// Імена методів реєстронезалежніvar_d> ('PUBLICfOO'));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(true)
bool(true)
bool(false)
bool(true)

### Дивіться також

- [ReflectionClass::hasConstant()](reflectionclass.hasconstant.md) -
Перевіряє, чи визначена константа
- [ReflectionClass::hasProperty()](reflectionclass.hasproperty.md) -
Перевіряє, чи визначено властивість
