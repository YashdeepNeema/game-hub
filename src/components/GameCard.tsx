import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading marginTop={3} fontSize={"2xl"}>
          <HStack justify={"space-between"}>
            <span>{game.name}</span>
            <Emoji rating={game.rating_top} />
          </HStack>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
