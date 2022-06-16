- [«uopz_get_hook](function.uopz-get-hook.md)
- [uopz_get_property »](function.uopz-get-property.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- отримати поточний імітатор (mock) для класу

#uopz_get_mock

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_get_mock — Отримати поточний імітатор для класу

### Опис

**uopz_get_mock**(string `$class`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає поточний імітатор `class`.

### Список параметрів

`class`
Назва імітованого класу

### Значення, що повертаються

Або рядок, що містить назву імітатора, або об'єкт, або
**`null`**, якщо імітатор не заданий.

### Приклади

**Приклад #1 Приклад використання **uopz_get_mock()****

`<?phpclass A {    public static function who() {       echo "A"; }}class mockA {    public static function who() {       echo "mockA"; }}uopz_set_mock(A::class, mockA::class);echo uopz_get_mock(A::class);?> `

Результат виконання цього прикладу:

mockA

### Дивіться також

- [uopz_set_mock()](function.uopz-set-mock.md) - Використати
імітатор замість класу для нових об'єктів
- [uopz_unset_mock()](function.uopz-unset-mock.md) - Видалити раніше
встановлений імітатор
