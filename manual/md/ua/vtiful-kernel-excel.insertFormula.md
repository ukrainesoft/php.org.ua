- [« Vtiful\Kernel\Excel::header](vtiful-kernel-excel.header.md)
- [Vtiful\Kernel\Excel::insertImage
»](vtiful-kernel-excel.insertImage.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- Вставити формулу розрахунку

# Vtiful\Kernel\Excel::insertFormula

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::insertFormula — Вставити формулу розрахунку

### Опис

public **Vtiful\Kernel\Excel::insertFormula**(int `$row`, int `$column`,
string `$formula`)

Вставити формулу розрахунку.

### Список параметрів

`row`
рядок осередку

`column`
стовпець осередку

`formula`
рядок формули

### Значення, що повертаються

Примірник [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$excel u003d new \Vtiful\Kernel\Excel($config);$file u003d $excel->fileName("free.xlsx") ->header(['name', 'money']);for($index u003d 1; $index < 10; $index++) {    $file->insertText($index, 0, 'viest'); $file->insertText($index, 1, 10);}$file->insertText(12, 0, "Total");$file->insertFormula(12, 1, 'u003dSUM(B2:B11)') ; // вставити формулу$file->output(); `
