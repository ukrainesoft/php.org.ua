- [«uopz_set_hook](function.uopz-set-hook.md)
- [uopz_set_property »](function.uopz-set-property.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- використовувати імітатор замість класу для нових об'єктів

#uopz_set_mock

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_set_mock — Використовувати імітатор замість класу для нових об'єктів

### Опис

**uopz_set_mock**(string `$class`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$mock`): void

Якщо `mock` - це рядок, який містить ім'я класу, тоді він буде створений
замість `class`. `mock` також може бути об'єктом.

> **Примітка**:
>
> Тільки динамічний доступ до властивостей та методів буде використовувати
> об'єкт `mock`. Статичний доступ використовуватиме оригінальний
> `class`. Дивіться
> [Приклад](function.uopz-set-mock.md#uopz_set_mock.example.static)
> нижче.

### Список параметрів

`class`
Ім'я класу, який буде імітовано.

`mock`
Імітатор у вигляді рядка, що містить ім'я використовуваного класу, або
об'єкт. Якщо переданий рядок, він має містити абсолютне ім'я
класу. У цьому випадку рекомендується використовувати магічну константу
`::class`.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|------------|------------------------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| uopz 6.0.0 | Імітування статичних функцій не підтримуються цієї функцією. Замість цього слід використовувати [uopz_redefine()](function.uopz-redefine.md) і [uopz_set_return()](function.uopz-set-return.md), або [Componere](book.componere.md). |

### Приклади

**Приклад #1 Приклад використання **uopz_set_mock()****

`<?phpclass A {    public function who() {        echo "A"; }}class mockA {    public function who() {        echo "mockA"; }}uopz_set_mock(A::class, mockA::class);(new A)->who();?> `

Результат виконання цього прикладу:

mockA

**Приклад #2 Приклад використання **uopz_set_mock()****

`<?phpclass A {    public function who() {        echo "A"; }}uopz_set_mock(A::class, new class {                            public function who() {                                echo "mockA";                            }                        });(new A)->who();?> `

Результат виконання цього прикладу:

mockA

**Приклад #3 **uopz_set_mock()** та статичні члени класу**

Починаючи з uopz 6.0.0, імітація статичних членів класу не
підтримується.

`<?phpclass A {    public static function who() {       echo "A"; }}uopz_set_mock(A::class, new class {                            const CON u003d 'mockA';                            public static function who() {                                echo "mockA";                            }                        });echo A::CON, PHP_EOL;A::who(); `

Результат виконання цього прикладу:

A
A

Висновок прикладу uopz 5:

mockA
mockA

### Дивіться також

- [uopz_get_mock()](function.uopz-get-mock.md) - Отримати поточний
імітатор (mock) для класу
- [uopz_unset_mock()](function.uopz-unset-mock.md) - Видалити раніше
встановлений імітатор
