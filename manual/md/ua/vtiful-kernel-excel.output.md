- [«
Vtiful\Kernel\Excel::mergeCells](vtiful-kernel-excel.mergeCells.md)
- [Vtiful\Kernel\Excel::setColumn
»](vtiful-kernel-excel.setColumn.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- Висновок

# Vtiful\Kernel\Excel::output

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::output - Висновок

### Опис

public **Vtiful\Kernel\Excel::output**()

Виведення файлу xlsx на диск.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Шлях до файлу XLSX;

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$fileObject  u003d new \Vtiful\Kernel\Excel($config);$file u003d $fileObject->fileName('tutorial.xlsx', 'sheet_one')   ->header(['name', 'age'])    ->data([      ['viest', 23],      ['wjx', 2$]| ();?> `
