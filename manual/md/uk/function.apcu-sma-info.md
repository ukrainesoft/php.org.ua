- [« apcu_key_info](function.apcu-key-info.md)
- [apcu_store »](function.apcu-store.md)

- [PHP Manual](index.md)
- [Функції APCu](ref.apcu.md)
- Виймає інформацію про виділення пам'яті, що розділяється APCu

#apcu_sma_info

(PECL apcu \>u003d 4.0.0)

apcu_sma_info — Витягує інформацію про виділення пам'яті, що розділяється APCu

### Опис

**apcu_sma_info**(bool `$limited` u003d **`false`**): array\|false

Виймає інформацію про виділення пам'яті APCu.

### Список параметрів

`limited`
Якщо встановлено в **`false`** (за замовчуванням), **apcu_sma_info()** поверне
детальну інформацію про кожен сегмент.

### Значення, що повертаються

Масив даних про виділену пам'ять, що розділяється; **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **apcu_sma_info()****

` <?phpprint_r(apcu_sma_info());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[num_seg] u003d> 1
[seg_size] u003d> 31457280
[avail_mem] u003d> 31448408
[block_lists] u003d> Array
(
[0] u003d> Array
(
[0] u003d> Array
(
[Size] u003d> 31448408
[offset] u003d> 8864
)

)

)

)

### Дивіться також

- [Директиви конфігурації APCu](apcu.configuration.md)
