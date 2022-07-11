- [« Unix-сокети: UNIX та UDG](transports.unix.md)
- [Список тегів (tokens) парсера»] (tokens.md)

- [PHP Manual](index.md)
- [Appendices](appendices.md)
- Таблиця порівняння типів у PHP

# Таблиця порівняння типів у PHP

Наступні таблиці демонструють роботу PHP з [типами
змінних](language.types.md) та [операторами
порівняння](language.operators.comparison.md), як у випадку вільного,
так і у разі суворого порівняння. Також ця інформація відноситься до
розділу документації з [наведення
типів] (language.types.type-juggling.md). Натхненням на створення
цього розділу ми зобов'язані різним коментарям користувачів та роботі
над
[»BlueShoes](http://www.blueshoes.org/en/developer/php_cheat_sheet/).

До огляду таблиць важливо знати і розуміти типи змінних та їх значення.
Наприклад, ``42`` - string, у той час як `42` - int. **`false`** -
bool, а ``false'` - string.

> **Примітка**:
>
> HTML-форми не передають цілі, дробові чи булеві змінні:
> вони завжди передають рядки. Для перевірки є рядок числом,
> Використовуйте [is_numeric()](function.is-numeric.md).

> **Примітка**:
>
> Використання `if ($x)`, якщо `$x` не визначено, згенерує помилку
> рівня **`E_NOTICE`**. Натомість використовуйте функцію
> [empty()](function.empty.md) або [isset()](function.isset.md)
> та/або ініціалізуйте змінну.

> **Примітка**:
>
> Деякі арифметичні операції можуть повернути значення,
> представлене константою **`NAN`** (Not A Number, не число). Будь-яке
> суворе чи не суворе порівняння цього значення з будь-яким іншим,
> включаючи його, але виключаючи **`true`**, поверне **`false`** (тобто.
> `NAN! u003d NAN` і `NAN! u003du003d NAN`). Прикладами операцій, що повертають
> **`NAN`**, є `sqrt(-1)`, `asin(2)` та `acosh(0)`.

| Вираз | [gettype()](function.gettype.md) | [empty()](function.empty.md) | [is_null()](function.is-null.md) | [isset()](function.isset.md) | bool : `if($x)` |
|--------------------|---------------------------- --------|--------------------------------|-------- ----------------------------|--------------------- -----------|-----------------|
| $x u003d ""; string | **`true`** | **`false`** | **`true`** | **`false`** |
| $x u003d null; NULL | **`true`** | **`true`** | **`false`** | **`false`** |
| `var $x;` | NULL | **`true`** | **`true`** | **`false`** | **`false`** |
| $x не визначено | NULL | **`true`** | **`true`** | **`false`** | **`false`** |
| $x u003d []; array | **`true`** | **`false`** | **`true`** | **`false`** |
| $x u003d ['a', 'b']; array | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d false; bool | **`true`** | **`false`** | **`true`** | **`false`** |
| $x u003d true; bool | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d 1; int | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d 42; int | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d 0; int | **`true`** | **`false`** | **`true`** | **`false`** |
| $x u003d -1; int | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d "1"; string | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d "0"; string | **`true`** | **`false`** | **`true`** | **`false`** |
| $x u003d "-1"; string | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d "php"; string | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d "true"; string | **`false`** | **`false`** | **`true`** | **`true`** |
| $x u003d "false"; string | **`false`** | **`false`** | **`true`** | **`true`** |

**Порівняння типів $x і результатів функцій PHP, пов'язаних з типами**

| | **`true`** | **`false`** | `1` | `0` | `-1` | ''1'' | ``0'` | ``-1'`` | **`null`** | `[]` | "php" | ````` |
|-------------|-------------|-------------|------- ------|---------------|-------------|------------- |-------------|-------------|-------------|------- ------|---------------|---------------|
| **`true`** | **`true`** | **`false`** | **`true`** | **`false`** | **`true`** | **`true`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** | **`false`** |
| **`false`** | **`false`** | **`true`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** | **`false`** | **`true`** | **`true`** | **`false`** | **`true`** |
| `1` | **`true`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| `0` | **`false`** | **`true`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** | **`false`** | **`true`** | **`false`** | **`false`**\* | **`false`**\* |
| `-1` | **`true`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** |
| ''1'' | **`true`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| ``0'` | **`false`** | **`true`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| ``-1'`` | **`true`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** |
| **`null`** | **`false`** | **`true`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`true`** | **`false`** | **`true`** |
| `[]` | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`true`** | **`false`** | **`false`** |
| "php" | **`true`** | **`false`** | **`false`** | **`false`**\* | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** |
| ````` | **`false`** | **`true`** | **`false`** | **`false`**\* | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`true`** |

**Гнучке порівняння за допомогою `u003du003d`**

\* **`true`** до PHP 8.0.0.

| | **`true`** | **`false`** | `1` | `0` | `-1` | ''1'' | ``0'` | ``-1'`` | **`null`** | `[]` | "php" | ````` |
|-------------|-------------|-------------|------- ------|-------------|-------------|-------------|- ------------|-------------|-------------|--------- ----|-------------|-------------|
| **`true`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| `1` | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| `0` | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| `-1` | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| ''1'' | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| ``0'` | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** |
| ``-1'`` | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** | **`false`** |
| **`null`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** | **`false`** |
| `[]` | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** | **`false`** |
| "php" | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** | **`false`** |
| ````` | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`false`** | **`true`** |

**Жорстке порівняння за допомогою `u003du003du003d`**
