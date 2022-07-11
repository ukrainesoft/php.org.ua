- [«gc_mem_caches](function.gc-mem-caches.md)
- [get_cfg_var »](function.get-cfg-var.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Повертає інформацію про поточний статус збирача сміття

# gc_status

(PHP 7 \>u003d 7.3.0, PHP 8)

gc_status — Повертає інформацію про поточний статус збирача сміття

### Опис

**gc_status**(): array

Повертає інформацію про поточний статус збирача сміття.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає асоціативний масив із такими елементами:

- ``runs'`
- ``collected'`
- ``threshold'`
- ``roots'`

### Приклади

**Приклад #1 Використання **gc_status()****

`<?php// створимо дерево об'єктів, для потрібно збирати сміття$a u003d new stdClass();$a->b u003d [];for ($i u003d 0; $i  u003d new stdClass(); $b->a u003d $a; $a->b[] u003d $b;}unset($a);unset($b);gc_collect_cycles();var_dump(gc_status()); `

Результатом виконання цього прикладу буде щось подібне:

array(4) {
["runs"]u003d>
int(5)
["collected"]u003d>
int(100002)
["threshold"]u003d>
int(50001)
["roots"]u003d>
int(0)
}

### Дивіться також

- [Збір сміття](features.gc.md)
