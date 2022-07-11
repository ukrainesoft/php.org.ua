- [«gc_collect_cycles](function.gc-collect-cycles.md)
- [gc_enable »](function.gc-enable.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Вимикає збирач циклічних посилань

# gc_disable

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

gc_disable — Вимикає збирач циклічних посилань

### Опис

**gc_disable**(): void

Відключає збирач циклічних посилань, шляхом встановлення значення
[zend.enable_gc](info.configuration.md#ini.zend.enable-gc) в `0`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [Складання сміття](features.gc.md)
