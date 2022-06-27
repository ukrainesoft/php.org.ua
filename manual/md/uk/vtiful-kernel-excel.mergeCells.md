- [«
Vtiful\Kernel\Excel::insertText](vtiful-kernel-excel.insertText.md)
- [Vtiful\Kernel\Excel::output »](vtiful-kernel-excel.output.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
-   Об'єднати комірки

# Vtiful\Kernel\Excel::mergeCells

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::mergeCells — Об'єднати осередки

### Опис

public **Vtiful\Kernel\Excel::mergeCells**(string `$scope`, string
`$data`)

Об'єднати комірки.

### Список параметрів

`scope`
початкові та кінцеві рядки координат осередку

`data`
дані рядки

### Значення, що повертаються

Примірник [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$excel u003d new \Vtiful\Kernel\Excel($config);$excel->fileName("test.xlsx")         ('A1:C1', 'Merge cells')        ->output(); `
