# 4. Кривизна

Символы Кристоффеля можно занулить в любой точке выбором координат, поэтому сами по себе
они ничего не говорят о том, искривлено ли пространство. Нужна тензорная характеристика —
такая, что если она равна нулю в одной системе координат, то и во всех. Ею является
**тензор Римана**. В этой главе мы введём его тремя эквивалентными способами — через
некоммутативность ковариантных производных, через параллельный перенос по замкнутому контуру
и через относительное ускорение соседних геодезических, — изучим его симметрии и свёртки
(тензоры Риччи и Эйнштейна) и подробно вычислим кривизну сферы. Тензор Эйнштейна станет
левой частью уравнений поля в [гл. 6](../part2-gr/06-einstein-equations.md), а отклонение
геодезических — математической основой приливных сил.

## 4.1. Тензор Римана

Рассмотрим коммутатор ковариантных производных, действующих на вектор. По правилу дифференцирования тензоров из [гл. 3](03-connection.md)
(по \(+\Gamma\) на каждый верхний индекс и \(-\Gamma\) на каждый нижний)

\[
\nabla_\mu\nabla_\nu V^\rho = \pd_\mu(\nabla_\nu V^\rho) - \Gamma^\lambda_{\mu\nu}\nabla_\lambda V^\rho + \Gamma^\rho_{\mu\sigma}\nabla_\nu V^\sigma .
\]

Антисимметризуя по \(\mu\nu\), видим, что вторые производные \(\pd_\mu\pd_\nu V^\rho\) сокращаются,
сокращаются и члены \(\Gamma\,\pd V\), а остаётся

\begin{equation}
[\nabla_\mu, \nabla_\nu] V^\rho = R^\rho{}_{\sigma\mu\nu}V^\sigma - T^\lambda{}_{\mu\nu}\nabla_\lambda V^\rho ,
\label{eq:commutator}
\end{equation}

где \(T^\lambda{}_{\mu\nu}\) — кручение (в ОТО равно нулю), а

!!! definition "Определение: тензор Римана"
    \begin{equation}
    R^\rho{}_{\sigma\mu\nu} = \pd_\mu \Gamma^\rho_{\nu\sigma} - \pd_\nu \Gamma^\rho_{\mu\sigma}
     + \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}.
    \label{eq:riemann}
    \end{equation}

Левая часть \eqref{eq:commutator} — тензор при любом \(V\), значит, и \(R^\rho{}_{\sigma\mu\nu}\) —
тензор типа \((1,3)\), хотя построен из нетензорных \(\Gamma\). Это соглашение MTW/Кэрролла
(см. [Обозначения](../conventions.md)); у сферы в нём положительная скалярная кривизна.
На 1-формах и тензорах общего вида

\begin{equation}
[\nabla_\mu, \nabla_\nu]\,\omega_\sigma = -R^\lambda{}_{\sigma\mu\nu}\,\omega_\lambda, \qquad
[\nabla_\mu,\nabla_\nu]T^{\rho}{}_{\sigma} = R^\rho{}_{\lambda\mu\nu}T^\lambda{}_\sigma - R^\lambda{}_{\sigma\mu\nu}T^\rho{}_\lambda
\label{eq:commutator-forms}
\end{equation}

(без кручения).

!!! theorem "Плоскостность"
    \(R^\rho{}_{\sigma\mu\nu} = 0\) всюду в окрестности тогда и только тогда, когда существуют
    координаты, в которых \(g_{\mu\nu}\) постоянна (т. е. метрика — евклидова или Минковского).

В одну сторону утверждение очевидно: при постоянной метрике \(\Gamma = 0\) и \(R = 0\) в этих
координатах, а значит, в любых. Обратное утверждение следует из того, что при \(R=0\) параллельный
перенос не зависит от пути (см. следующий раздел); перенеся ортонормированный базис из точки во
все соседние, получим коммутирующие векторные поля, т. е. координатный базис с \(g_{\mu\nu} = \eta_{\mu\nu}\).

## 4.2. Геометрический смысл: голономия

Перенесём вектор \(V\) параллельно вдоль малой замкнутой петли — параллелограмма со сторонами
\(\delta a\,A^\mu\) и \(\delta b\,B^\nu\). Разлагая решение уравнения параллельного переноса из
[гл. 3](03-connection.md) до второго порядка, получаем изменение вектора после обхода

\begin{equation}
\delta V^\rho = (\delta a)(\delta b)\,A^\nu B^\mu\,R^\rho{}_{\sigma\mu\nu}\,V^\sigma
\label{eq:holonomy}
\end{equation}

(знак меняется при смене ориентации обхода). Изменение пропорционально площади петли, а
коэффициент — тензор Римана. В частности, в двумерном случае вектор поворачивается на угол,
равный интегралу гауссовой кривизны по охватываемой площади. На единичной сфере для шапки,
ограниченной широтой \(\theta_0\), это \(\int K\,\d A = 2\pi(1-\cos\theta_0)\) — ровно тот угол,
который мы нашли прямым интегрированием в разделе 3.4 и который показывает интерактив
«голономия на сфере» в [гл. 3](03-connection.md).

## 4.3. Симметрии и тождества Бьянки

Опустим первый индекс, \(R_{\rho\sigma\mu\nu} = g_{\rho\lambda}R^\lambda{}_{\sigma\mu\nu}\). Проще всего
изучать его в локально инерциальных координатах (гл. 2), где \(\Gamma(p) = 0\):

\begin{equation}
R_{\rho\sigma\mu\nu} = \tfrac12\left(\pd_\mu\pd_\sigma g_{\rho\nu} - \pd_\mu\pd_\rho g_{\nu\sigma}
 - \pd_\nu\pd_\sigma g_{\rho\mu} + \pd_\nu\pd_\rho g_{\mu\sigma}\right)\quad\text{в точке } p.
\label{eq:riemann-rnc}
\end{equation}

Отсюда непосредственно читаются симметрии, которые как тензорные равенства верны в любых координатах:

\begin{equation}
R_{\rho\sigma\mu\nu} = -R_{\sigma\rho\mu\nu} = -R_{\rho\sigma\nu\mu} = R_{\mu\nu\rho\sigma},
\qquad R_{\rho[\sigma\mu\nu]} = 0 .
\label{eq:riemann-symmetries}
\end{equation}

Последнее равенство — **первое (алгебраическое) тождество Бьянки**:
\(R_{\rho\sigma\mu\nu} + R_{\rho\mu\nu\sigma} + R_{\rho\nu\sigma\mu} = 0\).

!!! theorem "Число независимых компонент"
    В \(n\) измерениях тензор Римана имеет
    \begin{equation}
    N(n) = \frac{n^2(n^2-1)}{12}
    \label{eq:riemann-count}
    \end{equation}
    независимых компонент: \(N(2) = 1\), \(N(3) = 6\), \(N(4) = 20\).

??? info "Подсчёт"
    Антисимметричные пары \([\rho\sigma]\) и \([\mu\nu]\) принимают \(m = n(n-1)/2\) значений;
    симметрия при перестановке пар оставляет \(m(m+1)/2\) компонент. Тождество \(R_{[\rho\sigma\mu\nu]}=0\)
    (с учётом остальных симметрий циклическое тождество эквивалентно полной антисимметрии)
    накладывает \(\binom{n}{4}\) условий. Итого
    \(\tfrac{m(m+1)}{2} - \binom n4 = \frac{n^2(n^2-1)}{12}\). Для \(n = 4\) это 20 — именно столько
    вторых производных метрики нельзя устранить выбором координат (гл. 2).

Дифференцируя \eqref{eq:riemann-rnc} ещё раз, получаем **второе (дифференциальное) тождество Бьянки**:

\begin{equation}
\nabla_\lambda R_{\rho\sigma\mu\nu} + \nabla_\mu R_{\rho\sigma\nu\lambda} + \nabla_\nu R_{\rho\sigma\lambda\mu} = 0,
\qquad\text{т. е.}\qquad \nabla_{[\lambda}R_{\rho\sigma]\mu\nu} = 0 .
\label{eq:bianchi}
\end{equation}

## 4.4. Тензор Риччи, скалярная кривизна, тензор Эйнштейна

Единственная (с точностью до знака) нетривиальная свёртка Римана — **тензор Риччи**

\begin{equation}
R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu},
\label{eq:ricci}
\end{equation}

симметричный в силу \eqref{eq:riemann-symmetries}. Его след — **скалярная кривизна**
\(R = g^{\mu\nu}R_{\mu\nu}\). Свёртка второго тождества Бьянки \eqref{eq:bianchi} дважды
(сначала по \(\rho\mu\), затем по \(\sigma\nu\)) даёт \(\nabla^\mu R_{\rho\mu} = \tfrac12\nabla_\rho R\),
то есть

\begin{equation}
\nabla^\mu G_{\mu\nu} = 0, \qquad G_{\mu\nu} \equiv R_{\mu\nu} - \tfrac12 R\, g_{\mu\nu}.
\label{eq:einstein-tensor}
\end{equation}

!!! definition "Определение: тензор Эйнштейна"
    \(G_{\mu\nu} = R_{\mu\nu} - \tfrac12 R g_{\mu\nu}\) — симметричный тензор, построенный из метрики
    и её первых и вторых производных, тождественно бездивергентный (**свёрнутое тождество Бьянки**).

Именно поэтому \(G_{\mu\nu}\) стоит в левой части уравнений Эйнштейна
\(G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G\,T_{\mu\nu}\): закон сохранения \(\nabla^\mu T_{\mu\nu} = 0\)
становится их геометрическим следствием. Подробнее — в [гл. 6](../part2-gr/06-einstein-equations.md).

### Тензор Вейля

Риччи содержит лишь часть информации Римана (10 из 20 компонент в \(n=4\)). Оставшуюся
бесследовую часть описывает **тензор Вейля** (\(n\ge3\)):

\begin{equation}
C_{\rho\sigma\mu\nu} = R_{\rho\sigma\mu\nu} - \frac{2}{n-2}\left(g_{\rho[\mu}R_{\nu]\sigma} - g_{\sigma[\mu}R_{\nu]\rho}\right)
+ \frac{2}{(n-1)(n-2)}\,R\,g_{\rho[\mu}g_{\nu]\sigma}.
\label{eq:weyl}
\end{equation}

У него те же симметрии, что у Римана, и все его свёртки равны нулю. Вейль инвариантен при
конформных преобразованиях \(g \to \Omega^2 g\) (в форме \(C^\rho{}_{\sigma\mu\nu}\)). В вакууме
\(R_{\mu\nu} = 0\) и кривизна целиком описывается Вейлем — это приливные поля и гравитационные
волны; метрика Фридмана, напротив, конформно плоская: \(C = 0\). В \(n = 3\) Вейль тождественно равен
нулю, а в \(n=2\) не определён: там Риман определяется одной функцией.

## 4.5. Пространства максимальной симметрии

Если пространство однородно и изотропно (в нём \(n(n+1)/2\) векторов Киллинга), кривизна одинакова
во всех точках и направлениях, и единственный допустимый тензор с симметриями Римана —

\begin{equation}
R_{\rho\sigma\mu\nu} = K\left(g_{\rho\mu}g_{\sigma\nu} - g_{\rho\nu}g_{\sigma\mu}\right),
\qquad R_{\mu\nu} = (n-1)K\,g_{\mu\nu}, \qquad R = n(n-1)K ,
\label{eq:max-symmetric}
\end{equation}

с постоянной \(K\). При \(K>0\) это сфера (в евклидовой сигнатуре) или пространство де Ситтера
(в лоренцевой), при \(K<0\) — гиперболическое пространство или анти-де Ситтер. Пространственные
сечения вселенной Фридмана — трёхмерные пространства максимальной симметрии с \(K = k/a^2\),
\(k \in \{-1, 0, +1\}\) (см. [гл. 10](../part3-cosmology/10-frw.md)).

В двух измерениях Риман имеет одну компоненту, и формула \eqref{eq:max-symmetric} верна **всегда**,
но с \(K(x)\), зависящей от точки: это **гауссова кривизна**, \(R = 2K\). Великая теорема Гаусса
(Theorema egregium): \(K\) — внутренняя характеристика поверхности, определяемая только метрикой,
хотя классически она вводилась как произведение главных кривизн \(1/(R_1R_2)\) вложенной поверхности.
Цилиндр, например, внутренне плоский: \(K = \tfrac1{R}\cdot 0 = 0\).

## 4.6. Пример: кривизна двумерной сферы

!!! example "Пример: сфера радиуса \(a\)"
    Метрика \(\d s^2 = a^2(\d\theta^2 + \sin^2\theta\,\d\phi^2)\), ненулевые символы
    \(\Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta\), \(\Gamma^\phi_{\theta\phi} = \cot\theta\) (гл. 3).
    По \eqref{eq:riemann}
    \[
    \begin{aligned}
    R^\theta{}_{\phi\theta\phi} &= \pd_\theta\Gamma^\theta_{\phi\phi} - \pd_\phi\Gamma^\theta_{\theta\phi}
    + \Gamma^\theta_{\theta\lambda}\Gamma^\lambda_{\phi\phi} - \Gamma^\theta_{\phi\lambda}\Gamma^\lambda_{\theta\phi}\\
    &= (\sin^2\theta - \cos^2\theta) - 0 + 0 - (-\sin\theta\cos\theta)\cot\theta = \sin^2\theta .
    \end{aligned}
    \]
    Опуская индекс: \(R_{\theta\phi\theta\phi} = a^2\sin^2\theta\). Сравнение с \eqref{eq:max-symmetric}:
    \(K(g_{\theta\theta}g_{\phi\phi} - 0) = K a^4\sin^2\theta\), откуда
    \begin{equation}
    K = \frac{1}{a^2}, \qquad R_{\mu\nu} = \frac{1}{a^2}\,g_{\mu\nu}, \qquad R = \frac{2}{a^2} > 0 .
    \label{eq:sphere-curvature}
    \end{equation}
    Полная кривизна \(\int K\,\d A = 4\pi\) не зависит от радиуса — частный случай теоремы
    Гаусса–Бонне \(\int K\,\d A = 2\pi\chi\) с эйлеровой характеристикой сферы \(\chi = 2\).

### Пример на Python: символьное вычисление кривизны

Следующая функция вычисляет \(\Gamma\), Риман, Риччи и \(R\) для произвольной метрики строго в
соглашениях [гл. 3](03-connection.md) и \eqref{eq:riemann}, \eqref{eq:ricci}. Проверим её на сфере и
на пространственной метрике Фридмана с \(k=+1\), записанной как \(a^2[\d\chi^2 + \sin^2\chi\,\d\Omega^2]\).

```python
import sympy as sp

def curvature(g, x):
    n = len(x)
    gi = g.inv()
    Gam = [[[sp.simplify(sum(gi[l, s]*(sp.diff(g[n_, s], x[m]) + sp.diff(g[m, s], x[n_])
                                         - sp.diff(g[m, n_], x[s])) for s in range(n))/2)
             for n_ in range(n)] for m in range(n)] for l in range(n)]   # Gam[l][m][n] = Γ^l_{mn}
    def Riem(r, s, m, n_):                                               # R^r_{s m n}
        e = sp.diff(Gam[r][n_][s], x[m]) - sp.diff(Gam[r][m][s], x[n_])
        e += sum(Gam[r][m][l]*Gam[l][n_][s] - Gam[r][n_][l]*Gam[l][m][s] for l in range(n))
        return sp.trigsimp(sp.expand_trig(sp.simplify(e)))
    R4 = [[[[Riem(r, s, m, n_) for n_ in range(n)] for m in range(n)] for s in range(n)] for r in range(n)]
    Ric = sp.Matrix(n, n, lambda m, n_: sp.simplify(sum(R4[l][m][l][n_] for l in range(n))))
    Rs = sp.simplify(sum(gi[m, n_]*Ric[m, n_] for m in range(n) for n_ in range(n)))
    return Gam, R4, Ric, Rs

a, th, ph, chi = sp.symbols('a theta phi chi', positive=True)

# 2-сфера
g = sp.diag(a**2, a**2*sp.sin(th)**2)
Gam, R4, Ric, Rs = curvature(g, [th, ph])
print(R4[0][1][0][1], Ric, Rs)
# sin(theta)**2 Matrix([[1, 0], [0, sin(theta)**2]]) 2/a**2

# 3-сфера (пространственное сечение закрытой вселенной)
g3 = sp.diag(a**2, a**2*sp.sin(chi)**2, a**2*sp.sin(chi)**2*sp.sin(th)**2)
_, _, Ric3, Rs3 = curvature(g3, [chi, th, ph])
print(sp.simplify(Ric3 - 2*g3/a**2), Rs3)
# Matrix([[0, 0, 0], [0, 0, 0], [0, 0, 0]]) 6/a**2   -> K = 1/a^2, R = n(n-1)K
```

## 4.7. Отклонение геодезических

Кривизна проявляется физически как относительное ускорение свободно падающих частиц.
Рассмотрим однопараметрическое семейство геодезических \(x^\mu(\tau, s)\): \(\tau\) — аффинный
параметр вдоль каждой, \(s\) нумерует геодезические. Касательный вектор \(T^\mu = \pd x^\mu/\pd\tau\),
**вектор отклонения** \(S^\mu = \pd x^\mu/\pd s\) указывает на соседнюю геодезическую. Так как это
координатные векторы, \([T, S] = 0\), т. е. \(T^\nu\nabla_\nu S^\mu = S^\nu\nabla_\nu T^\mu\).
Относительная скорость \(V^\mu = T^\nu\nabla_\nu S^\mu\), относительное ускорение
\(A^\mu = T^\nu\nabla_\nu V^\mu\). Используя \([T,S]=0\), уравнение геодезической \(T^\nu\nabla_\nu T^\mu = 0\)
и \eqref{eq:commutator}, получаем

!!! theorem "Уравнение отклонения геодезических (Якоби)"
    \begin{equation}
    A^\mu = \frac{D^2 S^\mu}{\d\tau^2} = R^\mu{}_{\nu\rho\sigma}\,T^\nu T^\rho S^\sigma .
    \label{eq:geodesic-deviation}
    \end{equation}

??? info "Вывод"
    \(A^\mu = T^\rho\nabla_\rho(S^\sigma\nabla_\sigma T^\mu)
    = (T^\rho\nabla_\rho S^\sigma)\nabla_\sigma T^\mu + T^\rho S^\sigma\nabla_\rho\nabla_\sigma T^\mu\).
    Во втором слагаемом переставим производные: \(\nabla_\rho\nabla_\sigma T^\mu = \nabla_\sigma\nabla_\rho T^\mu + R^\mu{}_{\nu\rho\sigma}T^\nu\).
    Тогда \(T^\rho S^\sigma\nabla_\sigma\nabla_\rho T^\mu = S^\sigma\nabla_\sigma(T^\rho\nabla_\rho T^\mu) - (S^\sigma\nabla_\sigma T^\rho)\nabla_\rho T^\mu\).
    Первое равно нулю (геодезическая), второе сокращается с первым слагаемым \(A^\mu\) в силу
    \(S^\sigma\nabla_\sigma T^\rho = T^\sigma\nabla_\sigma S^\rho\). Остаётся \(R^\mu{}_{\nu\rho\sigma}T^\nu T^\rho S^\sigma\).

В плоском пространстве \(A^\mu = 0\) и прямые расходятся линейно. В искривлённом — нет: на сфере
меридианы, параллельные на экваторе, сходятся к полюсу. Для единичного касательного вектора
на 2-сфере \eqref{eq:geodesic-deviation} с \eqref{eq:max-symmetric} даёт для поперечного отклонения
\(\ddot\xi = -K\xi\), т. е. \(\xi \propto \sin(s/a)\): именно так расстояние между меридианами
\(a\sin\theta\,\Delta\phi\) зависит от пройденной дуги \(s = a\theta\).

!!! example "Пример: ньютоновы приливные силы"
    В слабом статическом поле (гл. 3) для медленных частиц \(T^\mu \approx (1, 0,0,0)\), и по
    \eqref{eq:riemann} \(R^i{}_{0j0} \approx \pd_j\Gamma^i_{00} = \pd_i\pd_j\Phi\). Тогда
    \begin{equation}
    \frac{\d^2 S^i}{\d t^2} = R^i{}_{00j}S^j = -R^i{}_{0j0}S^j = -\frac{\pd^2\Phi}{\pd x^i\pd x^j}\,S^j ,
    \label{eq:tidal}
    \end{equation}
    — ньютоново выражение для приливного ускорения (разность ускорений \(-\nabla\Phi\) в соседних точках).
    Для точечной массы \(\Phi = -GM/r\) вдоль радиуса \(\ddot S = +\tfrac{2GM}{r^3}S\) (растяжение),
    поперёк \(\ddot S = -\tfrac{GM}{r^3}S\) (сжатие). След \(\pd_i\pd_i\Phi = 4\pi G\rho\) — это
    уравнение Пуассона; в ОТО его аналог \(R_{00} \approx 4\pi G\rho\) (для пыли) — первый намёк на то,
    что в уравнения поля войдёт тензор Риччи.

## Задачи

??? question "4.1. Кривизна в полярных координатах"
    Вычислите \(R^r{}_{\theta r\theta}\) для плоской метрики \(\d r^2 + r^2\d\theta^2\) с
    \(\Gamma^r_{\theta\theta} = -r\), \(\Gamma^\theta_{r\theta} = 1/r\) и убедитесь, что он равен нулю.

    ??? success "Решение"
        \(R^r{}_{\theta r\theta} = \pd_r\Gamma^r_{\theta\theta} - \pd_\theta\Gamma^r_{r\theta}
        + \Gamma^r_{r\lambda}\Gamma^\lambda_{\theta\theta} - \Gamma^r_{\theta\lambda}\Gamma^\lambda_{r\theta}
        = -1 - 0 + 0 - (-r)(1/r) = 0.\)
        Ненулевые \(\Gamma\) — артефакт координат; тензорная кривизна равна нулю.

??? question "4.2. Двумерные многообразия"
    Покажите, что в \(n=2\) выполнено \(R_{\mu\nu} = \tfrac12 R\,g_{\mu\nu}\), и следовательно
    \(G_{\mu\nu} \equiv 0\). Что это означает для «ОТО в двух измерениях»?

    ??? success "Решение"
        В \(n=2\) Риман имеет одну компоненту, и \(R_{\rho\sigma\mu\nu} = K(g_{\rho\mu}g_{\sigma\nu} - g_{\rho\nu}g_{\sigma\mu})\).
        Свёртка: \(R_{\sigma\nu} = K(2g_{\sigma\nu} - g_{\sigma\nu}) = K g_{\sigma\nu}\), \(R = 2K\),
        значит \(R_{\mu\nu} = \tfrac12 R g_{\mu\nu}\) и \(G_{\mu\nu} = 0\) тождественно. Уравнения Эйнштейна
        в 2D не содержат динамики: они требуют \(T_{\mu\nu} = 0\) (при \(\Lambda = 0\)).

??? question "4.3. Свёрнутое тождество Бьянки"
    Выведите \(\nabla^\mu G_{\mu\nu} = 0\) из \eqref{eq:bianchi}.

    ??? success "Решение"
        Свернём \eqref{eq:bianchi} с \(g^{\rho\mu}\):
        \(\nabla_\lambda R_{\sigma\nu} + \nabla^\rho R_{\rho\sigma\nu\lambda} - \nabla_\nu R_{\sigma\lambda} = 0\)
        (используя \(g^{\rho\mu}R_{\rho\sigma\lambda\mu} = -R_{\sigma\lambda}\)).
        Свернём с \(g^{\sigma\nu}\): \(\nabla_\lambda R - \nabla^\rho R_{\rho\lambda} - \nabla^\sigma R_{\sigma\lambda} = 0\),
        т. е. \(\nabla^\mu R_{\mu\lambda} = \tfrac12\nabla_\lambda R\), что эквивалентно \(\nabla^\mu G_{\mu\lambda} = 0\).

??? question "4.4. Кривизна гиперболической плоскости"
    Найдите скалярную кривизну метрики \(\d s^2 = \dfrac{\d x^2 + \d y^2}{y^2}\) (\(y>0\)).
    Можно воспользоваться функцией `curvature` из раздела 4.6.

    ??? success "Решение"
        Ненулевые символы: \(\Gamma^x_{xy} = -1/y\), \(\Gamma^y_{xx} = 1/y\), \(\Gamma^y_{yy} = -1/y\).
        \(R^x{}_{yxy} = \pd_x\Gamma^x_{yy} - \pd_y\Gamma^x_{xy} + \Gamma^x_{x\lambda}\Gamma^\lambda_{yy} - \Gamma^x_{y\lambda}\Gamma^\lambda_{xy}
        = 0 - 1/y^2 + 1/y^2 - 1/y^2 = -1/y^2\). Тогда \(R_{xyxy} = -1/y^4 = K\,g_{xx}g_{yy}\) с \(K=-1\), \(R = -2\):
        плоскость Лобачевского постоянной отрицательной кривизны.

??? question "4.5. Приливы от Луны"
    Оцените с помощью \eqref{eq:tidal} отношение приливного ускорения на поверхности Земли от Луны
    и от Солнца. (\(M_\odot/M_{\rm L} \approx 2.7\times10^7\), \(r_\odot/r_{\rm L} \approx 390\).)

    ??? success "Решение"
        Приливное ускорение \(\sim 2GM R_\oplus/r^3\). Отношение Луна/Солнце:
        \(\frac{M_{\rm L}}{M_\odot}\left(\frac{r_\odot}{r_{\rm L}}\right)^3 \approx \frac{390^3}{2.7\times10^7} \approx 2.2\).
        Лунные приливы примерно вдвое сильнее солнечных, хотя прямое притяжение Солнца в
        \(\approx 180\) раз больше: приливы определяются вторыми производными потенциала, т. е. кривизной.

??? question "4.6. Отклонение геодезических на сфере"
    Покажите, что на сфере радиуса \(a\) для единичного \(T\) и \(S \perp T\), \(|S| = \xi\),
    уравнение \eqref{eq:geodesic-deviation} даёт \(\ddot\xi = -\xi/a^2\).

    ??? success "Решение"
        С \eqref{eq:max-symmetric}: \(A_\mu = K(T_\mu (T\cdot S) - S_\mu (T\cdot T)) = -K S_\mu\), так как
        \(T\cdot S = 0\), \(T\cdot T = 1\). Значит \(\ddot\xi = -\xi/a^2\), \(\xi = \xi_0 \sin(s/a)\):
        геодезические, вышедшие из одной точки (полюса), снова сходятся через \(s = \pi a\) (в антиподе).

## Что дальше

Математический аппарат готов: многообразия, тензоры, связность, геодезические и кривизна.
В [главе 5](../part2-gr/05-equivalence.md) мы придадим ему физический смысл: принцип эквивалентности
отождествит свободное падение с геодезическим движением, а гравитацию — с кривизной пространства-времени.
