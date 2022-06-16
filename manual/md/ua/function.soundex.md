- [« similar_text](function.similar-text.md)
- [sprintf»](function.sprintf.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Повертає ключ soundex для рядка

# soundex

(PHP 4, PHP 5, PHP 7, PHP 8)

soundex — Повертає ключ soundex для рядка

### Опис

**soundex**(string `$string`): string

Повертає ключ soundex для рядка `string`.

Двом словам, які мають подібну вимову, відповідає той самий
ключ soundex. Ця властивість може бути використана, наприклад, при пошуку
по базі даних, коли відома вимова слова та невідомо його
написання.

Дана реалізація функції soundex описана Дональдом Кнутом (Donald
Knuth) у книзі "The Art Of Computer Programming, vol. 3: Sorting And
Searching", Addison-Wesley (1973), стор 391-392.

### Список параметрів

`string`
Вхідний рядок.

### Значення, що повертаються

Повертає ключ soundex у вигляді рядка (string). Повертає ключ soundex
у вигляді рядка (string) із чотирма символами. Якщо `string` міститься
хоча б одна літера, рядок, що повертається, починається з літери. В протилежному
у разі повертається ``0000``.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------|
| 8.0.0 | До цієї версії при виклику функції з порожнім рядком поверталося **`false`** без особливої причини. |

### Приклади

**Приклад #1 Приклади використання soundex**

`<?phpsoundex("Euler")       u003du003du003dsoundex("Ellery"); //E460soundex("Gauss")       u003du003du003dsoundex("Ghosh"); //G200soundex("Hilbert")     u003du003du003dsoundex("Heilbronn"); //H416soundex("Knuth")      u003du003du003dsoundex("Kant"); //K530soundex("Lloyd")       u003du003du003dsoundex("Ladd"); //L300soundex("Lukasiewicz")u003du003du003dsoundex("Lissajous"); // L222?

### Дивіться також

- [levenshtein()](function.levenshtein.md) - Обчислює відстань
Левенштейна між двома рядками
- [metaphone()](function.metaphone.md) - Повертає ключ metaphone
для рядка
- [similar_text()](function.similar-text.md) - Обчислює ступінь
подібності двох рядків
