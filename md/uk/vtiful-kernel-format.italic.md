- [« Vtiful\Kernel\Format::bold](vtiful-kernel-format.bold.md)
- [Vtiful\Kernel\Format::underline
»](vtiful-kernel-format.underline.md)

- [PHP Manual](index.md)
- [Vtiful\Kernel\Format](class.vtiful-kernel-format.md)
- Курсив

# Vtiful\Kernel\Format::italic

(PECL xlswriter \>u003d 1.2.1)

Vtiful\Kernel\Format::italic — Курсив

### Опис

public **Vtiful\Kernel\Format::italic**(resource `$handle`)

Формат курсиву [Vtiful\Kernel\Format](class.vtiful-kernel-format.md)

### Список параметрів

`handle`
Дескриптор файлу xlsx

### Значення, що повертаються

Ресурс

### Приклади

**Приклад #1 Приклад використання**

` <?php$config u003d [   'path' u003d> './tests'];$excel  u003d new \Vtiful\Kernel\Excel($config);$fileObject u003d $excel->fileName('tutorial01.xlsx') ;$fileHandleu003du003d$fileObject->getHandle();$italicStyle u003d \Vtiful\Kernel\Format::italic($fileHandle);$fileObject->header(['name', 'age'])    ->data([ ['viest', 21]])   ->setColumn('A:A', 200, $italicStyle)   ->output();?> `
