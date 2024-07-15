import Image from "next/image";
import "./card.css";
type CardProp = {
  img: string;
  title: string;
  subtitle: string;
};
const Card = ({ img, title, subtitle }: CardProp) => {
  const content = (
    <>
      <div className="Container">
        <Image src={img} alt={img} height={400} width={150} />
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
  return content;
};

export default Card;
