
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-900">РЕШЕНИЯ</h1>
        
        <Card className="border-none shadow-lg bg-gradient-to-br from-purple-50 to-white">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">Гармонизаторы пространства: ваша защита от вредных излучений</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Инновационная технология нейтрализации геопатогенных и техногенных воздействий
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <div className="bg-purple-100 rounded-lg p-5 border-l-4 border-purple-600">
              <h2 className="text-xl font-semibold text-purple-800 mb-3">Почему именно гармонизаторы?</h2>
              <p className="mb-4">
                Гармонизирующие приборы — наиболее оптимальное решение для блокировки воздействия геопатогенных и техногенных зон. 
                Они восстанавливают окружающую среду до состояния полной биосовместимости с организмом человека, 
                избавляя вас от необходимости подстраиваться под местоположение источников излучения — негативные зоны 
                нейтрализуются автоматически.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-purple-100">
              <Icon name="Shield" className="text-purple-700 h-9 w-9 flex-shrink-0" />
              <p className="font-medium">
                <span className="text-purple-800 font-semibold">Гармонизатор пространства</span> — прибор в форме предмета 
                или плоской информационной структуры, который воздействует на геопатогенное и техногенное излучение 
                в заданном радиусе, преобразуя его в природное, полностью биосовместимое с человеческим организмом.
              </p>
            </div>

            <p className="italic text-gray-600">
              На сегодняшний день рынок предлагает широкий спектр гармонизаторов как на русскоязычных, так и на 
              англоязычных сайтах. В ожидании появления единой общепринятой классификации, мы предлагаем обзор основных типов 
              гармонизаторов, представленных сегодня.
            </p>

            <h2 className="text-xl font-semibold text-purple-800 mt-8">Виды гармонизаторов</h2>
            
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-800 mb-2">По форме исполнения</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><span className="font-medium">Трехмерные</span> — воздействуют на излучение благодаря особенностям технологии формы и материала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><span className="font-medium">Плоские</span> — работают за счет информационной структуры, нанесенной на носитель изображения</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-800 mb-2">По спектру воздействия</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Воздействующие только на геопатогенное излучение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Воздействующие только на техногенное излучение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Универсальные — нейтрализуют оба вида излучений</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-800 mb-2">По принципу работы</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><span className="font-medium">Нейтрализующие</span> — снижают излучения до неопасного для человека уровня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><span className="font-medium">Усиливающие</span> — повышают сопротивляемость организма к вредным излучениям</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-2 italic">
                  Приборы второго типа часто относят к медицинским, хотя в интернете они представлены как гармонизаторы пространства
                </p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-800 mb-2">По источнику энергии</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Использующие электрическую энергию для работы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Использующие элементы питания для усиления воздействия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Автономные — не требующие никаких источников энергии</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-5">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-800 mb-2">По зоне действия</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Точечные — направленные на один источник излучения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Радиальные — воздействующие на все источники в определенном радиусе от прибора</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Зональные — работающие в рамках ограниченного пространства (комнаты, дома)</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-purple-800 mb-2">По эффекту структуризации воды</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Имеющие эффект структуризации воды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Не влияющие на структуру воды</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  Важно учитывать качество структуризации и время, необходимое для этого процесса
                </p>
              </div>
            </div>

            <div className="bg-purple-100 p-5 rounded-lg mt-6">
              <h3 className="font-semibold text-purple-800 mb-2">Оценка эффективности</h3>
              <p className="mb-3">
                Гармонизаторы различаются по степени воздействия и эффективности нейтрализации излучений. 
                На данный момент отсутствуют стандартизированные методы измерения качества работы этих приборов, 
                что делает оценку относительной.
              </p>
              <p className="italic">
                Перспективным методом оценки эффективности гармонизаторов может стать анализ степени воздействия 
                на структуризацию воды в радиусе действия прибора за определенное время работы.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-4 pb-6">
            <Button className="bg-purple-700 hover:bg-purple-800 px-6 py-5">
              <Link to="/contact" className="text-white text-lg">Подобрать гармонизатор для вашего пространства</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;
