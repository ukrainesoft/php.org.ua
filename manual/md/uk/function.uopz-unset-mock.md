- [«uopz_unset_hook](function.uopz-unset-hook.md)
- [uopz_unset_return »](function.uopz-unset-return.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Видалити раніше встановлений імітатор

#uopz_unset_mock

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_unset_mock — Видалити раніше встановлений імітатор

### Опис

**uopz_unset_mock**(string `$class`): void

Видаляє раніше встановлений імітатор для `class`.

### Список параметрів

`class`
Ім'я імітованого класу.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає [RuntimeException](class.runtimeexception.md), якщо раніше
ні заданий імітатор для `class`.

### Приклади

**Приклад #1 Приклад використання **uopz_unset_mock()****

`<?phpclass A {    public static function who() {       echo "A"; }}class mockA {    public static function who() {       echo "mockA"; }}uopz_set_mock(A::class, mockA::class);uopz_unset_mock(A::class);A::who();?> `

Результат виконання цього прикладу:

A

### Дивіться також

- [uopz_set_mock()](function.uopz-set-mock.md) - Використати
імітатор замість класу для нових об'єктів
- [uopz_get_mock()](function.uopz-get-mock.md) - Отримати поточний
імітатор (mock) для класу
