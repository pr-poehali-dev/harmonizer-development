
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">РЕШЕНИЯ</h1>
        
        <Card className="border-none shadow-lg bg-gradient-to-br from-purple-50 to-white">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">Гармонизаторы пространства — революция в защите вашего здоровья</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Инновационные технологии для нейтрализации вредных излучений
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4 p-4 bg-purple-100 rounded-lg">
              <Icon name="Shield" className="text-purple-700 h-10 w-10" />
              <p className="font-medium">
                Гармонизатор — это устройство, преобразующее вредные геопатогенные и техногенные излучения 
                в природные биосовместимые волны, безопасные для человеческого организма.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-purple-800 mt-6">Почему гармонизаторы — оптимальное решение?</h2>
            <p>
              Среди всех методов защиты от негативных излучений гармонизаторы пространства занимают лидирующую позицию благодаря 
              своей эффективности и простоте применения. В отличие от других способов, гармонизаторы:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Не требуют перестановки мебели или смены места жительства</li>
              <li>Работают автономно, без вашего участия</li>
              <li>Создают защитное поле, охватывающее всё помещение</li>
              <li>Нейтрализуют как геопатогенные, так и техногенные излучения</li>
            </ul>

            <h2 className="text-xl font-semibold text-purple-800 mt-6">Многообразие гармонизаторов на современном рынке</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800">По форме исполнения:</h3>
                <ul className="mt-2 space-y-1">
                  <li>• Трехмерные (объемные устройства)</li>
                  <li>• Плоские (информационные структуры)</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800">По спектру воздействия:</h3>
                <ul className="mt-2 space-y-1">
                  <li>• Универсальные (все типы излучений)</li>
                  <li>• Специализированные (геопатогенные или техногенные)</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800">По принципу работы:</h3>
                <ul className="mt-2 space-y-1">
                  <li>• Нейтрализующие излучения</li>
                  <li>• Усиливающие защитные функции организма</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-800">По источнику энергии:</h3>
                <ul className="mt-2 space-y-1">
                  <li>• Автономные (не требующие питания)</li>
                  <li>• С элементами питания</li>
                  <li>• Электрические</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-purple-800 mt-6">Дополнительные преимущества гармонизаторов</h2>
            <p>
              Многие современные гармонизаторы обладают уникальной способностью структурировать воду, 
              что значительно повышает её биологическую ценность и положительное влияние на организм. 
              Качество структуризации — один из важных параметров при выборе гармонизатора.
            </p>
            
            <div className="bg-purple-100 p-4 rounded-lg mt-4 flex items-center gap-4">
              <Icon name="Info" className="text-purple-700 h-8 w-8" />
              <p className="italic">
                В перспективе ожидается разработка стандартизированных методов оценки эффективности гармонизаторов, 
                что сделает выбор оптимального устройства еще более объективным и обоснованным.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-4">
            <Button className="bg-purple-700 hover:bg-purple-800">
              <Link to="/contact" className="text-white">Подобрать гармонизатор</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;
