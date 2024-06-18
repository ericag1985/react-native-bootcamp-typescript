import { Restaurant } from "@/utils/types";
import { FC } from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

interface RestaurantInfoCardProps {
  restaurant: Restaurant;
}

const CardContainer = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.spacing[3]};
`;

const CardTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  padding: ${({ theme }) => theme.spacing[3]};
`;

const RestaurantInfoCard: FC<RestaurantInfoCardProps> = ({ restaurant }) => {
  if (!restaurant) return;

  const { name, photos } = restaurant;

  return (
    <CardContainer elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <CardTitle>{name}</CardTitle>
    </CardContainer>
  );
};

export default RestaurantInfoCard;
