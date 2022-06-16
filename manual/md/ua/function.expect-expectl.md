- [« Функції Expect](ref.expect.md)
- [expect_popen »] (function.expect-popen.md)

- [PHP Manual](index.md)
- [Функції Expect](ref.expect.md)
- Чекає, поки виведення потоку не співпаде з одним із шаблонів, або
поки не закінчиться максимальний час очікування або повернеться EOF

# expect_expectl

(PECL expect u003d> 0.1.0)

expect_expectl — Очікує, доки виведення потоку не співпаде з одним із
шаблонів, або поки не закінчиться максимальний час очікування, або
повернеться EOF

### Опис

**expect_expectl**(resource `$expect`, array `$cases`, array `&$match` u003d
?): int

Чекає, поки виведення потоку не співпаде з одним із шаблонів, або поки не
закінчиться максимальний час очікування або повернеться EOF.

Якщо заданий параметр `match`, він заповнюється з результатами пошуку.
Збіг рядок буде збережено в `match[0]`. Підрядки, що збіглися (у
в залежності від дужок) в оригінальному шаблоні будуть збережені в
`match[1]`, `match[2]`, аж до `match[9]` (обмеження libexpect).

### Список параметрів

`expect`
Потік Expect, відкритий за допомогою
[expect_popen()](function.expect-popen.md).

`cases`
Масив очікуваних значень. Кожне очікуване значення є
себе індексований масив, описаний у цій таблиці:

| Індекс Тип значення | Опис | Обов'язковий | Значення за замовчуванням |
|--------|--------------|------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------|- -------------|------------------------------------ -------------------------------|
| 0 | string | шаблон, який порівнюватиметься з потоком виведення | так | |
| 1 | mixed | значення, яке поверне функція, якщо збіг знайдено | так | |
| 2 | integer | тип шаблону: [**`EXP_GLOB`**](expect.constants.md#constants.expect.exp-glob), [**`EXP_EXACT`**](expect.constants.md#constants.expect.exp- exact) або [**`EXP_REGEXP`**](expect.constants.md#constants.expect.exp-regexp) | ні | [**`EXP_GLOB`**](expect.constants.md#constants.expect.exp-glob) |

**Expect Case Array**

### Значення, що повертаються

Повертає значення, пов'язане з шаблоном, з яким воно співпало.

У разі виникнення помилки функція поверне:
[**`EXP_EOF`**](expect.constants.md#constants.expect.exp-eof),
[**`EXP_TIMEOUT`**](expect.constants.md#constants.expect.exp-timeout)
або
[**`EXP_FULLBUFFER`**](expect.constants.md#constants.expect.exp-fullbuffer)

### Список змін

| Версія | Опис |
|-------------------|----------------------------- -------------------------------------------------- --------|
| PECL Expect 0.2.1 | До версії 0.2.1, в параметр `match` повертався рядок, а не масив рядків, що збіглися. |

### Приклади

**Приклад #1 Приклад використання **expect_expectl()****

` <?php// Копіюємо файли с сервера:ini_set("expect.timeout", 30);$stream u003dfopen("expect://scp user@remotehost:/var/log/messages /home/user/messages. txt ","""); asked for yes/no"));while (true) {   switch (expect_expectl($stream, $cases))|
");              break;         case "asked for yes/no":             fwrite($es,
");            break;        case EXP_TIMEOUT:        case EXP_EOF:            break 2; // Прерывает как switch так и цикл while        default:            die("Произошла ошибка!");    }}fclose($stream);?> `

### Дивіться також

- [expect_popen()](function.expect-popen.md) - Запускає команду
через командну оболонку Bourne та відкриває для процесу потік PTY
