- [« Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- [Vtiful\Kernel\Excel::autoFilter
»](vtiful-kernel-excel.autoFilter.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- Додати лист

# Vtiful\Kernel\Excel::addSheet

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::addSheet — Додати лист

### Опис

public **Vtiful\Kernel\Excel::addSheet**(string `$sheetName`)

Створіть новий аркуш у файлі xlsx.

### Список параметрів

`sheetName`
Ім'я аркуша

### Значення, що повертаються

Примірник [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$fileObject  u003d new \Vtiful\Kernel\Excel($config);$file u003d $fileObject->fileName('tutorial.xlsx', 'sheet_one')   ->header(['name', 'age'])    ->data([        ['viest', 23],        ['w'x|| )   ->header(['name', 'age'])   ->data([       ['james', 33],        ['king', 33]>|
