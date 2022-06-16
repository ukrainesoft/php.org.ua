- [«uopz_backup](function.uopz-backup.md)
- [uopz_copy »](function.uopz-copy.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Скласти клас

#uopz_compose

(PECL uopz 1, PECL uopz 2)

uopz_compose — Скласти клас

**Увага**

Ця функція була *Видалена* у PECL uopz 5.0.0.

### Опис

**uopz_compose**(
string `$name`,
array `$classes`,
array `$methods` u003d ?,
array `$properties` u003d ?,
int `$flags` u003d ?
): void

Створює клас заданого імені, який реалізує, успадковує або
використовує всі надані класи

### Список параметрів

`name`
Коректне ім'я класу

`classes`
Масив імен класів, інтерфейсів та трейтів

`methods`
Асоціативний масив методів, де значення або замикання, або
представлені структурою [модифікатори u003d замикання]

`properties`
Асоціативний масив властивостей, де ключі – імена, а значення –
модифікатори

`flags`
Тип запису за замовчуванням ZEND_ACC_CLASS

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **uopz_compose()****

` <?phpclass myClass {}trait myTrait {}interface myInterface {}uopz_compose(    Composed::class, [        myClass::class,        myTrait::class,        myInterface::class    ], [    "__construct" u003d> function() {        / * ... */    }]);var_dump( class_uses(Composed::class), class_parents(Composed::class), class_implements(Composed::class));?> `

Результат виконання цього прикладу:

array(1) {
["myTrait"]u003d>
string(7) "myTrait"
}
array(1) {
["myClass"]u003d>
string(7) "myClass"
}
array(1) {
["myInterface"]u003d>
string(11) "myInterface"
}
