- [«mb_convert_encoding](function.mb-convert-encoding.md)
- [mb_convert_variables »](function.mb-convert-variables.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Перетворення кодувань "kana" з одного в інше ("zen-kaku",
"han-kaku" та інші)

#mb_convert_kana

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_convert_kana — Перетворення кодувань "kana" з одного на інше
("zen-kaku", "han-kaku" та інші)

### Опис

**mb_convert_kana**(string `$string`, string `$mode` u003d "KV", ?string
`$encoding` u003d **`null`**): string

Здійснює перетворення "han-kaku" - "zen-kaku" для рядкового
аргументу `string`. Ця функція може бути корисною тільки для японської
мови.

### Список параметрів

`string`
Початковий рядок (string).

`mode`
Налаштування конвертації.

Задається комбінацією наступних опцій.

| Налаштування | Опис |
|-----------|------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------|
| `r` | Перетворення "zen-kaku" літер на "han-kaku" |
| `R` | Перетворення "han-kaku" літер на "zen-kaku" |
| `n` | Перетворення "zen-kaku" чисел на "han-kaku" |
| `N` | Перетворення "han-kaku" чисел на "zen-kaku" |
| `a` | Перетворення "zen-kaku" літер та чисел у "han-kaku" |
| 'A' | Перетворення "han-kaku" букв і чисел в "zen-kaku" (Для налаштувань "a", "A" символи беруться з діапазону U+0021 - U+007E, крім U+0022, U+0027, U+005C, U+007E) |
| `s` | Перетворення "zen-kaku" пробілу на "han-kaku" (U+3000 -\> U+0020) |
| `S` | Перетворення "han-kaku" пропуску в "zen-kaku" (U+0020 -\> U+3000) |
| `k` | Перетворення "zen-kaku kata-kana" на "han-kaku kata-kana" |
| `K` | Перетворення "han-kaku kata-kana" на "zen-kaku kata-kana" |
| `h` | Перетворення "zen-kaku hira-gana" на "han-kaku kata-kana" |
| `H` | Перетворення "han-kaku kata-kana" на "zen-kaku hira-gana" |
| `c` | Перетворення "zen-kaku kata-kana" на "zen-kaku hira-gana" |
| `C` | Перетворення "zen-kaku hira-gana" на "zen-kaku kata-kana" |
| `V` | Виготовляє згортку фонем і перетворює їх на символ. Використовується з "K", "H" |

**Можливі налаштування перетворення**

`encoding`
Параметр 'encoding' є символьним кодуванням. Якщо він
опущений або дорівнює **`null`**, замість нього буде використано значення
внутрішнього кодування.

### Значення, що повертаються

Перетворений рядок (string).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------|
| 8.0.0 | Тепер параметр `encoding` може набувати значення **`null`**. |

### Приклади

**Приклад #1 Приклад використання **mb_convert_kana()****

` <?php/* Перетворення всіх символів "kana" в "zen-kaku" "kata-kana" */$str u003d mb_convert_kana($str, "KVC");/* Перетворення "han-kaku"ka " в "zen-kaku" "kata-kana"   і "zen-kaku" літерно-цифрових символів в "han-kaku" */$str u003d mb_convert_kana($str, "KVa");?> `
