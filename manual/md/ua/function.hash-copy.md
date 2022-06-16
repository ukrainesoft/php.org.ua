- [«hash_algos](function.hash-algos.md)
- [hash_equals »](function.hash-equals.md)

- [PHP Manual](index.md)
- [Функції Hash](ref.hash.md)
- Копіює контекст хешування

# hash_copy

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

hash_copy — Копіює контекст хешування

### Опис

**hash_copy**([HashContext](class.hashcontext.md) `$context`):
[HashContext](class.hashcontext.md)

### Список параметрів

`context`
Контекст хешування, повернутий
[hash_init()](function.hash-init.md).

### Значення, що повертаються

Повертає копію контексту хешування.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------------------------------|
| 7.2.0 | Приймає та повертає [HashContext](class.hashcontext.md), а не ресурс. |

### Приклади

**Приклад #1 Приклад використання **hash_copy()****

` <?php$context u003d hash_init("md5");hash_update($context, "data");/* копія контексту для подальшого використання */$copy_context u003d hash_copy($context);
";hash_update($copy_context, "data");echo hash_final($copy_context), "
";?> `

Результат виконання цього прикладу:

8d777f385d3dfec8815d20f7496026dc
511ae0b1c13f95e5f08f1a0dd3da3d93
