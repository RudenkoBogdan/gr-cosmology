# 16. Линейная теория возмущений

Инфляция оставила после себя малые возмущения кривизны \(\mathcal R\) с амплитудой
\(\sim 5\times10^{-5}\) ([глава 15](15-inflation.md)). Пока контрасты плотности малы,
их эволюцию можно описать, линеаризуя уравнения Эйнштейна и уравнения движения
вещества около фона FRW. Главная техническая трудность — **калибровочная свобода**:
разбиение \(g_{\mu\nu} = \bar g_{\mu\nu} + \delta g_{\mu\nu}\) зависит от выбора координат,
и часть «возмущений» оказывается фиктивной. Разобравшись с ней, мы выведем уравнения
для потенциалов и плотностей в ньютоновской калибровке, найдём, как ведут себя
возмущения на сверх- и подгоризонтных масштабах, получим уравнение Мезароша для
радиационной эпохи и вычислим фактор роста \(D(a)\) в модели ΛCDM.

Всюду используется конформное время \(\tau\), \(\d t = a\,\d\tau\), штрих — \(\pd_\tau\),
\(\mathcal H = a'/a = aH\). Возмущения раскладываются в Фурье по сопутствующему
волновому вектору \(\vb k\); физическая длина волны \(\lambda = 2\pi a/k\).

## 16.1. SVT-разложение

Наиболее общее возмущение плоской FRW-метрики запишем как

\begin{equation}
\d s^2 = a^2(\tau)\left[-(1+2A)\,\d\tau^2 + 2B_i\,\d x^i\d\tau
+ \left(\delta_{ij} + h_{ij}\right)\d x^i \d x^j\right].
\label{eq:general-pert}
\end{equation}

Десять функций \(A, B_i, h_{ij}\) по-разному преобразуются под пространственными
вращениями. Любой 3-вектор раскладывается на градиент и бездивергентную часть,
\(B_i = \pd_i B + \hat B_i\), \(\pd_i\hat B^i = 0\), а симметричный тензор — как

\begin{equation}
h_{ij} = -2\psi\,\delta_{ij} + 2\pd_i\pd_j E + 2\pd_{(i}\hat E_{j)} + 2\hat E_{ij},
\qquad \pd^i\hat E_{ij} = \hat E^i{}_i = 0.
\label{eq:svt}
\end{equation}

!!! theorem "Теорема о разложении"
    В линейном порядке **скалярные** (\(A, B, \psi, E\) — 4 функции), **векторные**
    (\(\hat B_i, \hat E_i\) — 4 функции) и **тензорные** (\(\hat E_{ij}\) — 2 функции)
    возмущения эволюционируют независимо: однородный изотропный фон не может их
    перемешивать.

Векторные возмущения в расширяющейся Вселенной затухают (если нет источников),
тензорные — это гравитационные волны. Структуры порождают скалярные возмущения;
дальше занимаемся только ими.

## 16.2. Калибровки

При бесконечно малой замене координат \(\tilde x^\mu = x^\mu + \xi^\mu\),
\(\xi^0 = T\), \(\xi^i = \pd^i L\), возмущение метрики меняется на производную Ли фона:
\(\delta\tilde g_{\mu\nu} = \delta g_{\mu\nu} - \mathcal L_\xi \bar g_{\mu\nu}\). Для
\(\bar g_{\mu\nu} = a^2\eta_{\mu\nu}\) прямой выкладкой получаем

\begin{equation}
\tilde A = A - T' - \mathcal H T, \qquad
\tilde B = B + T - L', \qquad
\tilde\psi = \psi + \mathcal H T, \qquad
\tilde E = E - L.
\label{eq:gauge-transform}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Производная Ли фона.** Для \(\bar g_{\mu\nu} = a^2(\tau)\eta_{\mu\nu}\) фон зависит только от \(\tau\), поэтому в формуле

    \[
    \mathcal L_\xi\bar g_{\mu\nu} = \xi^\lambda\pd_\lambda\bar g_{\mu\nu} + \bar g_{\lambda\nu}\pd_\mu\xi^\lambda + \bar g_{\mu\lambda}\pd_\nu\xi^\lambda
    \]

    первый член равен \(T\,\pd_\tau(a^2)\eta_{\mu\nu} = 2a^2\mathcal H\,T\,\eta_{\mu\nu}\) (так как \((a^2)' = 2aa' = 2a^2\mathcal H\)).

    **Шаг 2. Компонента \(00\).** \(\bar g_{00} = -a^2\), \(\xi^0 = T\):

    \[
    \mathcal L_\xi\bar g_{00} = -2a^2\mathcal H T + 2\bar g_{00}\pd_\tau T = -2a^2\left(\mathcal H T + T'\right).
    \]

    Так как \(\delta g_{00} = -2a^2A\), из \(\delta\tilde g_{00} = \delta g_{00} - \mathcal L_\xi\bar g_{00}\):
    \(-2a^2\tilde A = -2a^2A + 2a^2(\mathcal HT + T')\), т. е. \(\tilde A = A - T' - \mathcal HT\).

    **Шаг 3. Компонента \(0i\).** Первый член исчезает (\(\eta_{0i} = 0\)); остаются \(\bar g_{00}\pd_i\xi^0 + \bar g_{ij}\pd_\tau\xi^j\):

    \[
    \mathcal L_\xi\bar g_{0i} = -a^2\pd_i T + a^2\pd_i L' = a^2\pd_i\left(L' - T\right).
    \]

    С \(\delta g_{0i} = a^2\pd_i B\) получаем \(\pd_i\tilde B = \pd_i B - \pd_i(L' - T)\), т. е. \(\tilde B = B + T - L'\).

    **Шаг 4. Компонента \(ij\).** \(\bar g_{kj}\pd_i\xi^k = a^2\pd_i\pd_j L\), и так же второй член:

    \[
    \mathcal L_\xi\bar g_{ij} = 2a^2\mathcal H T\,\delta_{ij} + 2a^2\pd_i\pd_j L.
    \]

    С \(\delta g_{ij} = a^2(-2\psi\delta_{ij} + 2\pd_i\pd_jE)\) сравниваем коэффициенты при \(\delta_{ij}\) и при \(\pd_i\pd_j\):
    \(-2\tilde\psi = -2\psi - 2\mathcal HT\) ⇒ \(\tilde\psi = \psi + \mathcal HT\); \(2\tilde E = 2E - 2L\) ⇒ \(\tilde E = E - L\).

    **Проверка.** При чистом сдвиге времени \(T\) без \(L\) кривизна \(\psi\) меняется на \(\mathcal HT\): это расширение фона за время \(T\), \(\delta\ln a = \mathcal H T\).

Две функции \(T, L\) позволяют обнулить две из четырёх скалярных функций. Из оставшихся
можно составить **калибровочно-инвариантные** комбинации — потенциалы Бардина:

\begin{equation}
\Psi \equiv A + \mathcal H(B - E') + (B - E')', \qquad
\Phi \equiv \psi - \mathcal H(B - E').
\label{eq:bardeen}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Преобразование комбинации \(B - E'\).** Из \(\eqref{eq:gauge-transform}\):

    \[
    \tilde B - \tilde E' = (B + T - L') - (E' - L') = (B - E') + T.
    \]

    **Шаг 2. Инвариантность \(\Phi\).** Подставляем \(\tilde\psi = \psi + \mathcal HT\):

    \[
    \tilde\Phi = \psi + \mathcal HT - \mathcal H\left[(B - E') + T\right] = \psi - \mathcal H(B - E') = \Phi.
    \]

    **Шаг 3. Инвариантность \(\Psi\).**

    \[
    \begin{aligned}
    \tilde\Psi &= (A - T' - \mathcal HT) + \mathcal H\left[(B-E') + T\right] + \left[(B-E') + T\right]' \\
    &= A + \mathcal H(B-E') + (B-E')' + \left(-T' - \mathcal HT + \mathcal HT + T'\right) = \Psi.
    \end{aligned}
    \]

    **Проверка.** В ньютоновской калибровке \(B = E = 0\) сразу \(\Psi = A\), \(\Phi = \psi\).

!!! definition "Определение: ньютоновская калибровка"
    Выбор \(B = E = 0\) называется **ньютоновской** (конформно-ньютоновской,
    продольной) калибровкой. В ней \(A = \Psi\), \(\psi = \Phi\):

    \begin{equation}
    \d s^2 = a^2(\tau)\left[-(1+2\Psi)\,\d\tau^2 + (1-2\Phi)\,\d\vb x^2\right].
    \label{eq:newtonian-gauge}
    \end{equation}

    На малых масштабах \(\Psi\) совпадает с ньютоновским гравитационным потенциалом
    (сравните с метрикой слабого поля из [главы 6](../part2-gr/06-einstein-equations.md)).

Возмущения вещества тоже калибровочно-зависимы. Например, контраст плотности
\(\delta = \delta\rho/\bar\rho\) преобразуется как \(\tilde\delta = \delta - T\bar\rho'/\bar\rho = \delta + 3\mathcal H(1+w)T\).
Поэтому утверждение «контраст плотности растёт» имеет смысл только с указанием
калибровки — или на подгоризонтных масштабах, где все разумные калибровки согласуются.

??? calc "Вычисления"

    **Шаг 1. Преобразование скаляра.** Для скаляра производная Ли сводится к \(\mathcal L_\xi\bar\rho = \xi^\lambda\pd_\lambda\bar\rho = T\bar\rho'\), поэтому \(\delta\tilde\rho = \delta\rho - T\bar\rho'\). Делим на \(\bar\rho\):

    \[
    \tilde\delta = \delta - T\,\frac{\bar\rho'}{\bar\rho}.
    \]

    **Шаг 2. Уравнение непрерывности фона.** \(\bar\rho' = -3\mathcal H(\bar\rho + \bar p) = -3\mathcal H(1+w)\bar\rho\). Подставляем:

    \[
    \tilde\delta = \delta + 3\mathcal H(1+w)\,T.
    \]

    **Проверка.** Для пыли \(\bar\rho \propto a^{-3}\), и сдвиг времени на \(T\) меняет \(\ln\bar\rho\) на \(-3\mathcal HT\), что и даёт \(\pm 3\mathcal H T\) в контрасте.

Важная инвариантная величина — **кривизна сопутствующих гиперповерхностей**

\begin{equation}
\mathcal R = \psi + \mathcal H\,\frac{\delta q}{\bar\rho + \bar p}\;\;\xrightarrow{\text{ньют.}}\;\;
\mathcal R = \Phi + \frac{2}{3}\,\frac{\Phi' / \mathcal H + \Psi}{1+w},
\label{eq:curvature-R}
\end{equation}

где \(\delta q\) — потенциал скорости (\(\delta T^0{}_i = -\pd_i\delta q\)), а второе
выражение получено с помощью \(0i\)-уравнения Эйнштейна (см. ниже). Знак \(\mathcal R\)
зависит от соглашений; у нас \(\mathcal R\) и \(\Phi\) одного знака.

??? calc "Вычисления"

    **Шаг 1. Потенциал скорости через \(\theta\).** Для идеальной жидкости \(\delta T^0{}_i = (\bar\rho + \bar p)v_i\). Для скалярной моды \(v_i = \pd_i v\), и по определению \(\delta T^0{}_i = -\pd_i\delta q\) имеем \(\delta q = -(\bar\rho+\bar p)v\). В фурье-пространстве \(\pd_j \to ik_j\):

    \[
    \theta = ik_jv^j = ik_j\,(ik_j v) = -k^2 v
    \quad\Longrightarrow\quad
    \frac{\delta q}{\bar\rho + \bar p} = -v = \frac{\theta}{k^2}.
    \]

    **Шаг 2. Подстановка в определение \(\mathcal R\).** В ньютоновской калибровке \(\psi = \Phi\):

    \[
    \mathcal R = \Phi + \mathcal H\,\frac{\theta}{k^2}.
    \]

    **Шаг 3. \(\theta\) из \(0i\)-уравнения.** Из \(\eqref{eq:ein-0i}\): \(\theta/k^2 = (\Phi' + \mathcal H\Psi)/\left[4\pi Ga^2\bar\rho(1+w)\right]\).

    **Шаг 4. Уравнение Фридмана.** \(\mathcal H^2 = \tfrac{8\pi G}{3}a^2\bar\rho\), т. е. \(4\pi Ga^2\bar\rho = \tfrac32\mathcal H^2\). Тогда

    \[
    \mathcal R = \Phi + \frac{\mathcal H(\Phi' + \mathcal H\Psi)}{\tfrac32\mathcal H^2(1+w)}
    = \Phi + \frac23\,\frac{\Phi'/\mathcal H + \Psi}{1+w}.
    \]

    **Проверка.** Все слагаемые безразмерны; при \(\Phi = \Psi =\) const и \(w = 1/3\) получаем \(\mathcal R = \tfrac32\Phi\) — того же знака, что \(\Phi\).

## 16.3. Уравнения Эйнштейна в ньютоновской калибровке

Возмущение тензора энергии-импульса смеси жидкостей описываем плотностью \(\delta\rho\),
давлением \(\delta p\), дивергенцией скорости \(\theta = i k_j v^j\) и анизотропным
напряжением \(\sigma\). Линеаризованные уравнения Эйнштейна в фурье-представлении
(Ма и Бертшингер, 1995):

\begin{align}
k^2\Phi + 3\mathcal H\left(\Phi' + \mathcal H\Psi\right) &= -4\pi G a^2\,\delta\rho,
\label{eq:ein-00}\\
k^2\left(\Phi' + \mathcal H\Psi\right) &= 4\pi G a^2\,(\bar\rho + \bar p)\,\theta,
\label{eq:ein-0i}\\
k^2(\Phi - \Psi) &= 12\pi G a^2\,(\bar\rho + \bar p)\,\sigma.
\label{eq:ein-ij}
\end{align}

Анизотропное напряжение создают в основном свободно летящие нейтрино; пренебрегая им
(ошибка \(\sim 10\%\) в радиационную эпоху и меньше потом), имеем \(\Phi = \Psi\).
Комбинируя \(\eqref{eq:ein-00}\) и \(\eqref{eq:ein-0i}\), получаем **релятивистское уравнение
Пуассона**

\begin{equation}
k^2\Phi = -4\pi G a^2\,\bar\rho\,\Delta, \qquad
\Delta \equiv \delta + 3\mathcal H(1+w)\frac{\theta}{k^2},
\label{eq:poisson}
\end{equation}

где \(\Delta\) — контраст плотности в сопутствующей калибровке. При \(k \gg \mathcal H\)
поправка мала, и \(k^2\Phi = -4\pi Ga^2\bar\rho\delta\) — обычное уравнение Пуассона в
сопутствующих координатах.

??? calc "Вычисления"

    **Шаг 1. Исходные уравнения.** Из \(\eqref{eq:ein-0i}\) выражаем комбинацию, входящую в \(\eqref{eq:ein-00}\):

    \[
    \Phi' + \mathcal H\Psi = \frac{4\pi Ga^2(\bar\rho + \bar p)\,\theta}{k^2}.
    \]

    **Шаг 2. Подстановка в \(00\)-уравнение.**

    \[
    k^2\Phi + 3\mathcal H\cdot\frac{4\pi Ga^2(\bar\rho+\bar p)\theta}{k^2} = -4\pi Ga^2\,\delta\rho.
    \]

    **Шаг 3. Перенос в правую часть.** Выносим \(-4\pi Ga^2\) и подставляем \(\delta\rho = \bar\rho\delta\), \(\bar\rho + \bar p = \bar\rho(1+w)\):

    \[
    k^2\Phi = -4\pi Ga^2\left[\bar\rho\,\delta + 3\mathcal H\bar\rho(1+w)\frac{\theta}{k^2}\right]
    = -4\pi Ga^2\bar\rho\left[\delta + 3\mathcal H(1+w)\frac{\theta}{k^2}\right].
    \]

    **Проверка.** Отношение поправки к \(\delta\): \(\theta \sim \mathcal H\delta\) (из уравнения непрерывности), поэтому поправка \(\sim (\mathcal H/k)^2\delta\) и исчезает при \(k \gg \mathcal H\).

Сохранение \(\nabla_\mu T^{\mu\nu} = 0\) для невзаимодействующей компоненты с
\(w = \) const и \(\delta p = c_s^2\delta\rho\):

\begin{align}
\delta' &= -(1+w)\left(\theta - 3\Phi'\right) - 3\mathcal H\left(c_s^2 - w\right)\delta,
\label{eq:continuity}\\
\theta' &= -\mathcal H(1 - 3w)\theta - \frac{w'}{1+w}\theta + \frac{c_s^2}{1+w}k^2\delta + k^2\Psi.
\label{eq:euler}
\end{align}

Для холодной тёмной материи (\(w = c_s^2 = 0\)):
\(\delta_c' = -\theta_c + 3\Phi'\), \(\theta_c' = -\mathcal H\theta_c + k^2\Psi\).

## 16.4. Сверхгоризонтные масштабы и начальные условия

При \(k \ll \mathcal H\) из \(\eqref{eq:ein-00}\)–\(\eqref{eq:ein-0i}\) следует, что для
адиабатических возмущений

\begin{equation}
\mathcal R' \simeq 0 \qquad (k \ll \mathcal H):
\label{eq:R-conserved}
\end{equation}

**кривизна \(\mathcal R\) сохраняется вне горизонта**. Именно поэтому спектр, рассчитанный
при выходе мод за горизонт во время инфляции, можно без изменений перенести в момент их
возвращения под горизонт, миновав неизвестную физику разогрева. При постоянном \(w\)
потенциал на сверхгоризонтных масштабах тоже постоянен, и из \(\eqref{eq:curvature-R}\)

\begin{equation}
\Phi = \frac{3+3w}{5+3w}\,\mathcal R:\qquad
\Phi_{\rm RD} = \frac23\mathcal R, \qquad \Phi_{\rm MD} = \frac35\mathcal R.
\label{eq:phi-R}
\end{equation}

При переходе от излучения к веществу сверхгоризонтный потенциал уменьшается в \(9/10\).
Адиабатичность означает, что все компоненты возмущены «одним и тем же сдвигом времени»:
\(\delta_\gamma/(1+w_\gamma) = \delta_c/(1+w_c)\), т. е. \(\delta_c = \delta_b = \tfrac34\delta_\gamma = \tfrac34\delta_\nu\).
Из \(\eqref{eq:ein-00}\) при \(k\to0\) в радиационную эпоху \(\delta_\gamma = -2\Psi\).

??? calc "Вычисления"

    **Шаг 1. Потенциал из \(\mathcal R\).** На сверхгоризонтных масштабах при постоянном \(w\) \(\Phi' = 0\); без анизотропного напряжения \(\Psi = \Phi\). Из \(\eqref{eq:curvature-R}\):

    \[
    \mathcal R = \Phi + \frac{2}{3}\frac{\Phi}{1+w} = \Phi\,\frac{3(1+w) + 2}{3(1+w)} = \Phi\,\frac{5+3w}{3+3w}
    \quad\Longrightarrow\quad
    \Phi = \frac{3+3w}{5+3w}\,\mathcal R.
    \]

    **Шаг 2. Частные случаи.** \(w = \tfrac13\): \(\Phi = \tfrac{4}{6}\mathcal R = \tfrac23\mathcal R\). \(w = 0\): \(\Phi = \tfrac35\mathcal R\).

    **Шаг 3. Отношение.** Так как \(\mathcal R\) сохраняется, \(\Phi_{\rm MD}/\Phi_{\rm RD} = \tfrac35\big/\tfrac23 = \tfrac{9}{10}\).

    **Шаг 4. Адиабатичность.** Одинаковый сдвиг времени \(T\) для всех компонент даёт \(\delta_i = -T\bar\rho_i'/\bar\rho_i = 3\mathcal H(1+w_i)T\), так что \(\delta_i/(1+w_i)\) одинаково. С \(w_c = w_b = 0\), \(w_\gamma = w_\nu = \tfrac13\): \(\delta_c = \delta_\gamma/(4/3) = \tfrac34\delta_\gamma\).

    **Шаг 5. \(\delta_\gamma\) из \(00\)-уравнения.** При \(k \to 0\) отбрасываем \(k^2\Phi\), а \(\Phi' = 0\):

    \[
    3\mathcal H^2\Psi = -4\pi Ga^2\bar\rho\,\delta = -\tfrac32\mathcal H^2\,\delta
    \quad\Longrightarrow\quad
    \delta = -2\Psi,
    \]

    где использовано \(4\pi Ga^2\bar\rho = \tfrac32\mathcal H^2\). В радиационную эпоху \(\bar\rho \approx \bar\rho_r\) и \(\delta \approx \delta_\gamma\), т. е. \(\delta_\gamma = -2\Psi\).

    **Проверка.** Яма \(\Psi < 0\) соответствует избытку плотности \(\delta_\gamma > 0\).

## 16.5. Подгоризонтные масштабы: рост тёмной материи

Внутри горизонта (\(k \gg \mathcal H\)) производными потенциала можно пренебречь, а уравнение
Пуассона принимает ньютоновский вид. Исключая \(\theta_c\), получаем

\begin{equation}
\delta_c'' + \mathcal H\,\delta_c' = -k^2\Psi = 4\pi G a^2\sum_i\bar\rho_i\delta_i,
\label{eq:growth-conformal}
\end{equation}

или в космическом времени, когда кластеризуется только вещество,

\begin{equation}
\ddot\delta + 2H\dot\delta - 4\pi G\bar\rho_m\delta = 0.
\label{eq:growth}
\end{equation}

Это уравнение второго порядка: «трение» \(2H\dot\delta\) от расширения против
гравитационной неустойчивости. В статической среде получился бы экспоненциальный рост
Джинса; в расширяющейся рост степенной.

??? calc "Вычисления"

    **Шаг 1. Подгоризонтный предел уравнений CDM.** При \(k \gg \mathcal H\) отбрасываем \(3\Phi'\): \(\delta_c' = -\theta_c\), \(\theta_c' = -\mathcal H\theta_c + k^2\Psi\).

    **Шаг 2. Исключение \(\theta_c\).** Дифференцируем первое уравнение и подставляем второе, затем снова \(\theta_c = -\delta_c'\):

    \[
    \delta_c'' = -\theta_c' = \mathcal H\theta_c - k^2\Psi = -\mathcal H\delta_c' - k^2\Psi.
    \]

    **Шаг 3. Пуассон.** При \(k \gg \mathcal H\) и \(\Psi = \Phi\) из \(\eqref{eq:poisson}\): \(-k^2\Psi = 4\pi Ga^2\sum_i\bar\rho_i\delta_i\). Это \(\eqref{eq:growth-conformal}\).

    **Шаг 4. Переход к \(t\).** \(\d/\d\tau = a\,\d/\d t\), значит

    \[
    \delta' = a\dot\delta,\qquad
    \delta'' = a\frac{\d}{\d t}\left(a\dot\delta\right) = a^2\ddot\delta + a\dot a\,\dot\delta,\qquad
    \mathcal H\delta' = (a H)(a\dot\delta) = a\dot a\,\dot\delta.
    \]

    **Шаг 5. Сборка.** \(a^2\ddot\delta + 2a\dot a\dot\delta = 4\pi Ga^2\bar\rho_m\delta\); делим на \(a^2\) и учитываем \(\dot a/a = H\):

    \[
    \ddot\delta + 2H\dot\delta - 4\pi G\bar\rho_m\delta = 0.
    \]

    **Проверка.** Без расширения (\(H = 0\)) — \(\ddot\delta = 4\pi G\bar\rho\delta\), неустойчивость Джинса с ростом \(e^{t\sqrt{4\pi G\bar\rho}}\).

!!! example "Пример: Вселенная Эйнштейна–де Ситтера"
    При \(\Omega_m = 1\): \(H = 2/(3t)\), \(4\pi G\bar\rho = 2/(3t^2)\). Подставляя
    \(\delta \propto t^n\), получаем \(n(n-1) + \tfrac43 n - \tfrac23 = 0\), \(n = 2/3\) или
    \(n = -1\). Растущая мода \(\delta \propto t^{2/3} \propto a\), затухающая
    \(\delta \propto a^{-3/2}\). При этом \(\Phi \propto a^2\bar\rho\,\delta \propto a^{-1}\cdot a\) = const:
    в эпоху вещества **потенциалы постоянны на всех масштабах**.

??? calc "Вычисления"

    **Шаг 1. Фон ЭдС.** \(a \propto t^{2/3}\) ⇒ \(H = \tfrac{2}{3t}\); из \(H^2 = \tfrac{8\pi G}{3}\bar\rho\): \(4\pi G\bar\rho = \tfrac32H^2 = \tfrac{2}{3t^2}\).

    **Шаг 2. Подстановка \(\delta = t^n\).** \(\dot\delta = nt^{n-1}\), \(\ddot\delta = n(n-1)t^{n-2}\):

    \[
    n(n-1)t^{n-2} + 2\cdot\frac{2}{3t}\,n t^{n-1} - \frac{2}{3t^2}\,t^n = 0
    \;\Longrightarrow\;
    n^2 + \frac{n}{3} - \frac23 = 0 \;\Longrightarrow\; 3n^2 + n - 2 = 0.
    \]

    **Шаг 3. Корни.** \(n = \dfrac{-1 \pm\sqrt{1 + 24}}{6} = \dfrac{-1\pm5}{6}\), т. е. \(n = \tfrac23\) или \(n = -1\).

    **Шаг 4. Через \(a\).** \(t \propto a^{3/2}\): \(t^{2/3} \propto a\), \(t^{-1} \propto a^{-3/2}\).

    **Шаг 5. Потенциал.** \(k^2\Phi = -4\pi Ga^2\bar\rho\delta\) и \(\bar\rho \propto a^{-3}\): \(\Phi \propto a^2\cdot a^{-3}\cdot a = a^0\).

Для барионов после рекомбинации в правой части появляется давление:
\(\ddot\delta_b + 2H\dot\delta_b = 4\pi G\bar\rho_m\delta_m - c_s^2 k^2\delta_b/a^2\).
Рост подавлен на масштабах меньше **длины Джинса**
\(\lambda_J = c_s\sqrt{\pi/(G\bar\rho)}\). До рекомбинации барионы привязаны к фотонам и
\(c_s \approx 1/\sqrt3\): барион-фотонная жидкость не растёт, а осциллирует
([глава 17](17-cmb.md)).

??? calc "Вычисления"

    **Шаг 1. Пренебрегаем расширением.** На масштабах, где важно давление, временно отбросим \(2H\dot\delta\) и примем \(\delta_m = \delta_b\), \(\bar\rho = \bar\rho_m\):

    \[
    \ddot\delta_b = -\left(\frac{c_s^2k^2}{a^2} - 4\pi G\bar\rho\right)\delta_b.
    \]

    **Шаг 2. Критерий.** При положительной скобке решения осциллируют, при отрицательной растут. Граница — физическое волновое число \(k_J/a = \sqrt{4\pi G\bar\rho}/c_s\).

    **Шаг 3. Длина волны.**

    \[
    \lambda_J = \frac{2\pi a}{k_J} = \frac{2\pi c_s}{\sqrt{4\pi G\bar\rho}} = c_s\sqrt{\frac{4\pi^2}{4\pi G\bar\rho}} = c_s\sqrt{\frac{\pi}{G\bar\rho}}.
    \]

    **Проверка.** Размерность: \([c_s]/\sqrt{[G\rho]} =\) скорость·время = длина.

## 16.6. Эффект Мезароша

Что происходит с тёмной материей внутри горизонта в радиационную эпоху? Фотоны из-за
давления не кластеризуются, и \(\Psi\) под горизонтом быстро затухает; источником
роста остаётся только сама тёмная материя. Введём \(y = a/a_{\rm eq} = \bar\rho_m/\bar\rho_r\).
Тогда \(H^2 = H_{\rm eq}^2(y^{-3}+y^{-4})/2\), и \(\eqref{eq:growth}\) с источником лишь от
\(\delta_c\) принимает вид **уравнения Мезароша**:

\begin{equation}
\frac{\d^2\delta_c}{\d y^2} + \frac{2+3y}{2y(1+y)}\frac{\d\delta_c}{\d y}
- \frac{3}{2y(1+y)}\,\delta_c = 0.
\label{eq:meszaros}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Производные по \(y\).** \(y \propto a\) ⇒ \(\dot y = Hy\). Обозначим \(\delta_{,y} = \d\delta_c/\d y\):

    \[
    \dot\delta = yH\,\delta_{,y},\qquad
    \ddot\delta = yH\frac{\d}{\d y}\left(yH\delta_{,y}\right) = y^2H^2\delta_{,yy} + \left(yH^2 + y^2HH_{,y}\right)\delta_{,y}.
    \]

    **Шаг 2. Подстановка в \(\eqref{eq:growth}\).** С \(2H\dot\delta = 2yH^2\delta_{,y}\) и делением на \(y^2H^2\):

    \[
    \delta_{,yy} + \left(\frac{3}{y} + \frac{H_{,y}}{H}\right)\delta_{,y} - \frac{4\pi G\bar\rho_m}{y^2H^2}\,\delta_c = 0.
    \]

    **Шаг 3. Логарифмическая производная \(H\).** \(H^2 \propto y^{-3} + y^{-4} = y^{-4}(1+y)\), т. е. \(\ln H = -2\ln y + \tfrac12\ln(1+y) + \)const:

    \[
    \frac{3}{y} + \frac{H_{,y}}{H} = \frac{3}{y} - \frac{2}{y} + \frac{1}{2(1+y)} = \frac{2(1+y) + y}{2y(1+y)} = \frac{2+3y}{2y(1+y)}.
    \]

    **Шаг 4. Источник.** \(H^2 = \tfrac{8\pi G}{3}(\bar\rho_m + \bar\rho_r)\) и \(\bar\rho_m/(\bar\rho_m+\bar\rho_r) = y/(1+y)\):

    \[
    4\pi G\bar\rho_m = \frac32H^2\,\frac{y}{1+y}
    \quad\Longrightarrow\quad
    \frac{4\pi G\bar\rho_m}{y^2H^2} = \frac{3}{2y(1+y)}.
    \]

    **Шаг 5. Предел \(y \ll 1\).** Коэффициенты: \(\tfrac{2+3y}{2y(1+y)} \approx \tfrac1y\), а член \(\tfrac{3}{2y}\delta_c\) мал по сравнению с \(\delta_{,yy} \sim \delta_c/y^2\). Остаётся \(\delta_{,yy} + \delta_{,y}/y = 0\), т. е. \((y\,\delta_{,y})_{,y} = 0\) ⇒ \(y\delta_{,y} = C_2\) ⇒ \(\delta_c = C_1 + C_2\ln y\).

    **Проверка.** При \(y \gg 1\): \(\delta_{,yy} + \tfrac{3}{2y}\delta_{,y} - \tfrac{3}{2y^2}\delta_c = 0\), решения \(y^1\) и \(y^{-3/2}\) — моды ЭдС.

!!! theorem "Теорема (Мезарош, 1974)"
    Растущее решение уравнения \(\eqref{eq:meszaros}\): \(D_1(y) = y + \tfrac23\). Второе решение

    \begin{equation}
    D_2(y) = \left(y + \tfrac23\right)\ln\frac{\sqrt{1+y}+1}{\sqrt{1+y}-1} - 2\sqrt{1+y}.
    \label{eq:meszaros-decaying}
    \end{equation}

    При \(y \ll 1\) общее решение \(\delta_c \approx C_1 + C_2\ln y\): в радиационную
    эпоху возмущения тёмной материи растут лишь **логарифмически**.

Логарифмический рост закладывает излом в спектр мощности: моды, вошедшие под горизонт
до равенства (\(k > k_{\rm eq} \approx 0.010\ \text{Мпк}^{-1}\)), подавлены относительно
вошедших позже примерно в \((k/k_{\rm eq})^2\) раз, с логарифмической поправкой. Это
основа передаточной функции [главы 18](18-lss.md).

## 16.7. Фактор роста в ΛCDM

После равенства все масштабы растут одинаково: \(\delta(\vb k, a) = \delta(\vb k, a_i)\,D(a)/D(a_i)\).
**Фактор роста** \(D(a)\) — растущее решение \(\eqref{eq:growth}\). В переменной \(\ln a\):

\begin{equation}
\frac{\d^2 D}{\d\ln a^2} + \left(2 + \frac{\d\ln H}{\d\ln a}\right)\frac{\d D}{\d\ln a}
- \frac32\,\Omega_m(a)\,D = 0,
\qquad \Omega_m(a) = \frac{\Omega_m a^{-3}}{E^2(a)}.
\label{eq:growth-lna}
\end{equation}

??? calc "Вычисления"

    **Шаг 1. Замена переменной.** \(x = \ln a\), \(\d x/\d t = H\), штрих здесь — \(\d/\d x\):

    \[
    \dot D = HD_{,x},\qquad \ddot D = H\frac{\d}{\d x}\left(HD_{,x}\right) = H^2D_{,xx} + HH_{,x}D_{,x}.
    \]

    **Шаг 2. Подстановка в \(\eqref{eq:growth}\) и деление на \(H^2\).**

    \[
    D_{,xx} + \left(2 + \frac{H_{,x}}{H}\right)D_{,x} - \frac{4\pi G\bar\rho_m}{H^2}D = 0.
    \]

    **Шаг 3. Коэффициент источника.** \(\dfrac{4\pi G\bar\rho_m}{H^2} = \dfrac32\cdot\dfrac{8\pi G\bar\rho_m}{3H^2} = \dfrac32\Omega_m(a)\), где \(\bar\rho_m = \rho_{\rm cr,0}\Omega_ma^{-3}\), \(H^2 = H_0^2E^2\), откуда \(\Omega_m(a) = \Omega_ma^{-3}/E^2\).

    **Проверка.** ЭдС: \(H \propto a^{-3/2}\), \(\d\ln H/\d\ln a = -\tfrac32\), \(\Omega_m(a) = 1\): \(D'' + \tfrac12D' - \tfrac32D = 0\), \(D = a\) даёт \(1 + \tfrac12 - \tfrac32 = 0\).

Для плоской модели вещество + Λ (и вообще для \(w = 0, -1\) и кривизны) известно
интегральное решение (Хит, 1977):

\begin{equation}
D(a) = \frac52\,\Omega_m\,E(a)\int_0^a\frac{\d a'}{\left[a'E(a')\right]^3},
\qquad E(a) = \frac{H}{H_0} = \sqrt{\Omega_m a^{-3} + \Omega_\Lambda},
\label{eq:heath}
\end{equation}

нормированное так, что \(D = a\) в эпоху вещества. Удобна также **скорость роста**

\begin{equation}
f \equiv \frac{\d\ln D}{\d\ln a} \approx \Omega_m(a)^{\gamma}, \qquad \gamma \approx 0.55
\label{eq:growth-rate}
\end{equation}

(для ОТО; в модифицированных теориях гравитации \(\gamma\) другое — это один из тестов ОТО
на космологических масштабах). Когда начинает доминировать Λ, рост останавливается:
\(D(a) \to\) const.

??? calc "Вычисления"

    **Шаг 1. \(H\) — затухающее решение.** В плоской модели вещество + Λ: \(\dot H = -4\pi G(\bar\rho + \bar p) = -4\pi G\bar\rho_m\) (у Λ \(\rho + p = 0\)). Тогда \(\ddot H = -4\pi G\dot{\bar\rho}_m = 12\pi GH\bar\rho_m\), и

    \[
    \ddot H + 2H\dot H - 4\pi G\bar\rho_mH = (12 - 8 - 4)\pi G\bar\rho_mH = 0.
    \]

    **Шаг 2. Понижение порядка.** Ищем \(D = Hu\). Члены с \(u\) без производных сокращаются по шагу 1, остаётся

    \[
    H\ddot u + 2\dot H\dot u + 2H^2\dot u = 0
    \;\Longrightarrow\;
    \frac{\ddot u}{\dot u} = -2\frac{\dot H}{H} - 2\frac{\dot a}{a}
    \;\Longrightarrow\;
    \dot u = \frac{C}{a^2H^2}.
    \]

    **Шаг 3. Интеграл по \(a\).** \(\d t = \d a/(aH)\):

    \[
    u = C\int\frac{\d a}{a^3H^3},\qquad D = C\,H\int_0^a\frac{\d a'}{a'^3H^3(a')} = C'\,E(a)\int_0^a\frac{\d a'}{\left[a'E(a')\right]^3}.
    \]

    **Шаг 4. Нормировка.** При малых \(a\): \(E \approx \Omega_m^{1/2}a^{-3/2}\), \([a'E]^3 = \Omega_m^{3/2}a'^{-3/2}\),

    \[
    D \approx C'\,\Omega_m^{1/2}a^{-3/2}\cdot\Omega_m^{-3/2}\cdot\tfrac25a^{5/2} = C'\,\tfrac{2}{5\Omega_m}\,a,
    \]

    и условие \(D = a\) даёт \(C' = \tfrac52\Omega_m\) — множитель в \(\eqref{eq:heath}\).

    **Проверка.** Скорость роста в ЭдС: \(D = a\) ⇒ \(f = 1 = \Omega_m(a)^\gamma\) при любом \(\gamma\).

```python
import numpy as np
from scipy.integrate import solve_ivp, quad

Om, OL = 0.315, 0.685            # Planck 2018, плоская Вселенная (излучением пренебрегаем)
E = lambda a: np.sqrt(Om/a**3 + OL)

# Уравнение роста в переменной ln a:  D'' + (2 + dlnH/dlna) D' - (3/2) Om(a) D = 0
def rhs(lna, y):
    a = np.exp(lna)
    D, dD = y
    dlnH = -1.5*Om/a**3/E(a)**2
    Om_a = Om/a**3/E(a)**2
    return [dD, -(2+dlnH)*dD + 1.5*Om_a*D]

a_i = 1e-3                       # глубоко в эпохе материи: D = a
sol = solve_ivp(rhs, [np.log(a_i), 0], [a_i, a_i], rtol=1e-10, dense_output=True)

for z in (0, 0.5, 1, 2):
    D, dD = sol.sol(-np.log(1+z))
    a = 1/(1+z)
    # интегральная формула Хита для сравнения
    D_int = 2.5*Om*E(a)*quad(lambda x: 1/(x*E(x))**3, 0, a)[0]
    print(f"z={z}: D={D:.4f}  D_Heath={D_int:.4f}  f={dD/D:.3f}  Om(a)^0.55={(Om/a**3/E(a)**2)**0.55:.3f}")

# z=0: D=0.7879  D_Heath=0.7878  f=0.527  Om(a)^0.55=0.530
# z=0.5: D=0.6058  D_Heath=0.6058  f=0.761  Om(a)^0.55=0.761
# z=1: D=0.4780  D_Heath=0.4780  f=0.877  Om(a)^0.55=0.876
# z=2: D=0.3286  D_Heath=0.3286  f=0.959  Om(a)^0.55=0.958
```

Итак, из-за тёмной энергии сегодняшние возмущения примерно на 21 % меньше, чем были бы
в Вселенной Эйнштейна–де Ситтера с той же историей до \(z \sim 1\). Скорость роста
\(f(z=0) \approx 0.53\) измеряется по искажениям в пространстве красных смещений
([глава 18](18-lss.md)).

## Задачи

??? question "16.1. Калибровочные преобразования"
    Выведите \(\eqref{eq:gauge-transform}\) из \(\delta\tilde g_{\mu\nu} = \delta g_{\mu\nu} - \mathcal L_\xi\bar g_{\mu\nu}\)
    и проверьте инвариантность \(\Psi\) и \(\Phi\) из \(\eqref{eq:bardeen}\).

    ??? success "Решение"
        \(\mathcal L_\xi\bar g_{\mu\nu} = \xi^\lambda\pd_\lambda\bar g_{\mu\nu} + \bar g_{\lambda\nu}\pd_\mu\xi^\lambda + \bar g_{\mu\lambda}\pd_\nu\xi^\lambda\).
        Компонента \(00\): \(-2aa'T - 2a^2T' = -2a^2(\mathcal HT + T')\); так как \(\delta g_{00} = -2a^2A\),
        получаем \(\tilde A = A - T' - \mathcal HT\). Компонента \(0i\): \(a^2\pd_i(L' - T)\) ⇒ \(\tilde B = B + T - L'\).
        Компонента \(ij\): \(2a^2(\mathcal HT\delta_{ij} + \pd_i\pd_jL)\) ⇒ \(\tilde\psi = \psi + \mathcal HT\), \(\tilde E = E - L\).
        Так как \(B - E' \to B - E' + T\), в \(\Psi\) сдвиги \(-T'-\mathcal HT + \mathcal HT + T'\) сокращаются, а в \(\Phi\) —
        \(\mathcal HT - \mathcal HT\).

??? question "16.2. Решение Мезароша"
    Проверьте, что \(D_1 = y + 2/3\) удовлетворяет \(\eqref{eq:meszaros}\), и найдите асимптотику
    \(D_2\) при \(y \gg 1\).

    ??? success "Решение"
        \(D_1' = 1\), \(D_1'' = 0\): \(\dfrac{2+3y}{2y(1+y)} - \dfrac{3(y+2/3)}{2y(1+y)} = \dfrac{2 + 3y - 3y - 2}{2y(1+y)} = 0\).
        При \(y\gg1\): \(\ln\frac{\sqrt{1+y}+1}{\sqrt{1+y}-1} \approx 2y^{-1/2} + \tfrac23y^{-3/2} + \ldots\), и после сокращения
        главных членов \(D_2 \propto y^{-3/2}\) — затухающая мода эпохи вещества, как в примере ЭдС.

??? question "16.3. Сверхгоризонтный потенциал"
    Выведите \(\eqref{eq:phi-R}\) из \(\eqref{eq:curvature-R}\) при \(\Phi = \Psi =\) const.

    ??? success "Решение"
        \(\mathcal R = \Phi + \tfrac23\Phi/(1+w) = \Phi\,\dfrac{3(1+w) + 2}{3(1+w)}\), т. е.
        \(\Phi = \dfrac{3+3w}{5+3w}\mathcal R\). При \(w = 1/3\): \(2/3\); при \(w = 0\): \(3/5\).

??? question "16.4. Длина Джинса"
    Найдите длину Джинса барион-фотонной жидкости непосредственно перед рекомбинацией и
    сравните её с хаббловским радиусом. Что это означает для роста барионных возмущений?

    ??? success "Решение"
        \(\lambda_J = c_s\sqrt{\pi/(G\rho)}\), а \(H^2 = 8\pi G\rho/3\) ⇒
        \(\lambda_J = c_s\sqrt{8\pi^2/3}\,H^{-1} \approx 5.1\,c_s H^{-1}\). При \(c_s \approx 0.45\) (с учётом \(R \approx 0.6\))
        \(\lambda_J \approx 2.3\,H^{-1}\) — больше горизонта. Значит, все подгоризонтные барионные
        возмущения до рекомбинации осциллируют, а не растут; после неё \(c_s\) падает в \(\sim10^4\) раз
        и барионы падают в ямы тёмной материи.

??? question "16.5. Подавление роста Λ-членом"
    Используя \(\eqref{eq:heath}\), найдите \(D(a)\) в пределе \(\Omega_\Lambda \to 0\) и объясните,
    почему \(D(a=1) < 1\) в ΛCDM.

    ??? success "Решение"
        При \(E = a^{-3/2}\): \(D = \tfrac52 a^{-3/2}\int_0^a a'^{3/2}\d a' = a\). В ΛCDM с момента \(z \sim 0.3\text{–}1\)
        \(H\) убывает медленнее, «трение» \(2H\dot\delta\) больше, а источник \(4\pi G\bar\rho_m\) меньше; поэтому
        \(D/a\) уменьшается до \(\approx 0.79\) сегодня.

??? question "16.6. Интегральный эффект Сакса–Вольфа"
    Покажите с помощью \(\eqref{eq:growth-conformal}\) и уравнения Пуассона, что на подгоризонтных
    масштабах \(\Phi \propto D(a)/a\). Когда \(\Phi' \ne 0\)?

    ??? success "Решение"
        \(k^2\Phi = -4\pi Ga^2\bar\rho_m\delta = -\tfrac32\Omega_mH_0^2\,\delta/a\), а \(\delta \propto D\). Значит
        \(\Phi \propto D/a\): постоянен в эпоху вещества и убывает, когда доминирует Λ (а также у
        перехода от излучения к веществу). Изменяющиеся потенциалы сдвигают энергию проходящих через
        них фотонов CMB — это поздний и ранний ИСВ-эффекты ([глава 17](17-cmb.md)).

## Что дальше

Теперь у нас есть уравнения для тёмной материи и потенциалов. В [главе 17](17-cmb.md)
мы применим тот же формализм к барион-фотонной плазме до рекомбинации, получим
звуковые колебания и выведем, как они превращаются в акустические пики углового спектра
реликтового излучения.
