import Image from "next/image";
import { Card, CardContent, Flex, Link, Row, Spacer, Text } from "vcc-ui";
import styles from "../../public/css/CarCard.module.css";

interface CardProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export default function CarCard(props: CardProps) {
  return (
    <div className={styles.cardWrapper}>
      <Flex>
        <Text variant="bates" subStyle="emphasis">
          {props.bodyType}
        </Text>
<div className={styles.textWrapper}>

        <Text variant="amundsen">{props.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">
          {props.modelType}
        </Text>
</div>
      </Flex>
      <Spacer />
      <Image
        width="250"
        height="200"
        src={props.imageUrl}
        alt={props.modelName}
      />
      <Spacer />
      <Flex
        extend={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div className={styles.linkStyle}>

        <Link href="https://www.volvocars.com/" arrow="right">
          Conheça
        </Link>
        <Link href="https://www.volvocars.com/" arrow="right">
          Configure
        </Link>
        </div>
      </Flex>
    </div>
  );
}
