- [« Vtiful\Kernel\Excel::addSheet](vtiful-kernel-excel.addSheet.md)
- [Vtiful\Kernel\Excel::constMemory
»](vtiful-kernel-excel.constMemory.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- Додати автофільтр

# Vtiful\Kernel\Excel::autoFilter

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::autoFilter — Додати автофільтр

### Опис

public **Vtiful\Kernel\Excel::autoFilter**(string `$scope`)

Додавання автофільтра до аркуша.

### Список параметрів

`scope`
Початковий та кінцевий рядок координат осередку.

### Значення, що повертаються

Примірник [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$fileObject  u003d new \Vtiful\Kernel\Excel($config);$file u003d $excel->fileName('test.xlsx') ->header(['name', 'age'])   |>                        |
