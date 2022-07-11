- [« lzf_compress](function.lzf-compress.md)
- [lzf_optimized_for »](function.lzf-optimized-for.md)

- [PHP Manual](index.md)
- [Функції LZF](ref.lzf.md)
- Розархівація LZF

#lzf_decompress

(PECL lzf \>u003d 0.1.0)

lzf_decompress — Розархівація LZF

### Опис

**lzf_decompress**(string `$data`): string

[lzf_compress()](function.lzf-compress.md) розархівує рядок
`data`, що містить дані стиснуті алгоритмом lzf.

### Список параметрів

`data`
Рядок зі стислими даними.

### Значення, що повертаються

Повертає розархівовані дані або **`false`** у разі
виникнення помилки.

### Дивіться також

- [lzf_compress()](function.lzf-compress.md) - Стиснення LZF
