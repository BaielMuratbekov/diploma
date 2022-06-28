import { Header } from "../components/Header/Header";

function Abouts() {
  return (
    <>
      <Header title="About store" image="/assets/about3.webp">
        <div>
          <div>Sportswear store</div>
          <div>
            <span>🏪 ул. J. Abdrakhmanova 134a</span>
            <span>🏪 Shopping center "Bishkek Park" 3rd floor</span>
            <span>
              📞-<strong>0507161706</strong> whatsapp
            </span>
            <span>
              📞-<strong>0501640641</strong>
            </span>
          </div>
        </div>
      </Header>
      <div className="container">
        <span>
          Интернет магазин успешно работает с 2012 года. С этих пор, мы никогда
          не подводили наших покупателей.
        </span>

        <span>
          «Кредо» магазина является ответственность, мы никогда не отвернемся от
          тех, кто доверился нам при покупке футбольной атрибутики. Даже если на
          форме присутствует нанесение и вы увидели на ней производственный
          брак, мы заменим ее за наш счет.
        </span>

        <span>
          В магазине представлен широкий ассортимент европейских клубов:
          футболки, формы, олимпийки и прочая спортивная атрибутика. Обновление
          ассортимента происходит в среднем раз в неделю, уверены, что вы
          сможете найти что то для себя или для своих близких.
        </span>

        <span>
          Единственным минусом, пожалуй, самым основным, является доставка —
          очень долгая. В среднем срок доставки в Москву занимает 10-14 дней, в
          регионы 18-24 дня. Это связано с тем, что большая часть тех товаров
          которые находятся в магазине, идут под заказ. Но мы компенсируем это
          невысокими ценами на атрибутику клубов. Но если товар в наличии, мы
          доставляем по Москве за 1 день, в регионы 3-7 дней. На цену сроки
          доставки никак не влияют.
        </span>

        <span>
          Мы отвечаем за качество продаваемой продукции, по запросу, можем
          прислать фото любой позиции, также можем прислать пример нанесения.
          Кстати, по поводу надписи на футбольную форму. У нас используются
          только оригинальные шрифты, а не дешевые заменители.
        </span>
      </div>
    </>
  );
}

export default Abouts;
