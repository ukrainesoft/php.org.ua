- [« Vtiful\Kernel\Excel::fileName](vtiful-kernel-excel.filename.md)
- [Vtiful\Kernel\Excel::header »](vtiful-kernel-excel.header.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Excel](class.vtiful-kernel-excel.md)
- Отримати дескриптор

# Vtiful\Kernel\Excel::getHandle

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Excel::getHandle — Отримати дескриптор

### Опис

public **Vtiful\Kernel\Excel::getHandle**()

Отримати дескриптор текстового ресурсу xlsx.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ресурс

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$fileObject  u003d new \Vtiful\Kernel\Excel($config);$file u003d $fileObject->fileName('tutorial.xlsx', 'sheet_one')    ->header(['name', 'age']);$handleu003du003d$file->getHandle();?> `
