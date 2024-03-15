export interface IUser {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
}
export interface ILesson {
  id: number;
  title: string;
  description: string;
  complite: number;
  passageTime: number;
  active: boolean;
}

export const user: IUser = {
  id: 1,
  avatar: "",
  firstName: "Тест",
  lastName: "Тестов",
};

export const lessons: ILesson[] = [
  {
    id: Math.round(Date.now() * Math.random()),
    title: "Дерево навигации",
    description:
      "Есть над чем задуматься: акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В целом, конечно, перспективное планирование однозначно фиксирует необходимость кластеризации усилий.",
    complite: 0,
    passageTime: 15,
    active: false,
  },
  {
    id: Math.round(Date.now() * Math.random()),
    title: "Дашборт",
    description:
      "Есть над чем задуматься: акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В целом, конечно, перспективное планирование однозначно фиксирует необходимость кластеризации усилий.",
    complite: 10,
    passageTime: 15,
    active: false,
  },
  {
    id: Math.round(Date.now() * Math.random()),
    title: "Киплборд",
    description:
      "Есть над чем задуматься: акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В целом, конечно, перспективное планирование однозначно фиксирует необходимость кластеризации усилий.",
    complite: 0,
    passageTime: 15,
    active: false,
  },
  {
    id: Math.round(Date.now() * Math.random()),
    title: "Библиотека требований",
    description:
      "Есть над чем задуматься: акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В целом, конечно, перспективное планирование однозначно фиксирует необходимость кластеризации усилий.",
    complite: 0,
    passageTime: 15,
    active: false,
  },
  {
    id: Math.round(Date.now() * Math.random()),
    title: "Очередь",
    description:
      "Есть над чем задуматься: акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В целом, конечно, перспективное планирование однозначно фиксирует необходимость кластеризации усилий.",
    complite: 0,
    passageTime: 15,
    active: false,
  },
  {
    id: Math.round(Date.now() * Math.random()),
    title: "Менеджмент: Документы",
    description:
      "Есть над чем задуматься: акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В целом, конечно, перспективное планирование однозначно фиксирует необходимость кластеризации усилий.",
    complite: 0,
    passageTime: 15,
    active: false,
  },
  {
    id: Math.round(Date.now() * Math.random()),
    title: "Менеджмент: Задания",
    description:
      "Есть над чем задуматься: акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. В целом, конечно, перспективное планирование однозначно фиксирует необходимость кластеризации усилий.",
    complite: 0,
    passageTime: 15,
    active: false,
  },
];
