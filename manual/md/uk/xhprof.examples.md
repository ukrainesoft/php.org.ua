- [«Зумовлені константи](xhprof.constants.md)
- [Функції Xhprof »](ref.xhprof.md)

- [PHP Manual](index.md)
- [Xhprof](book.xhprof.md)
- Приклади

# Приклади

**Приклад #1 Приклади використання Xhprof, опціонально з GUI**

У цьому прикладі профайлер запускається, зупиняється та використовує
вбудований GUI інтерфейс для збереження та розбору результатів. Іншими
словами, виконання коду модуля завершується на функції
[xhprof_disable()](function.xhprof-disable.md).

`<?phpxhprof_enable(XHPROF_FLAGS_CPU + XHPROF_FLAGS_MEMORY);for ($i u003d 0; $i <u003d 1000; $i++) {|    $a u003d $i /xhprof/";include_once $XHPROF_ROOT . "/xhprof_lib/utils/xhprof_lib.php";include_once $XHPROF_ROOT . "/xhprof_lib/utils/xhprof_runs.php";$xhprof_runs u003d new XHProfRuns_Default();$run_id u003d $xhprof_runs->save_run($xhprof_data, "xhprof_xx php?runu003d{$run_id}&sourceu003dxhprof_testing
";?> `

Результатом виконання цього прикладу буде щось подібне:

http://localhost/xhprof/xhprof_html/index.php?runu003dt11_4bdf44d21121f&sourceu003dxhprof_testing
