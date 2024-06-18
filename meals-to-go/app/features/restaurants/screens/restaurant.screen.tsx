import SearchBar from "@/components/search-bar";
import { View } from "react-native";
import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card";
import { Restaurant } from "@/utils/types";
import styled from "styled-components/native";

const tempRestaurant: Restaurant = {
  name: "Farmhouse Kitchen Thai Cuisine",
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos: [
    "https://cdn.vox-cdn.com/thumbor/itMqesfpQM2UQVokh-DUgNxWrKI=/0x0:4608x3072/320x213/filters:focal(1936x1168:2672x1904)/cdn.vox-cdn.com/uploads/chorus_image/image/70416025/shutterstock_1538500832.0.jpg",
  ],
  address: "710 Florida St, San Francisco, CA 94110",
  isOpenNow: true,
  rating: 4.5,
  isClosedTemporarily: false,
};

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.spacing[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.spacing[3]};
`;

const RestaurantScreen = () => {
  return (
    <>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfoCard restaurant={tempRestaurant} />
      </RestaurantListContainer>
    </>
  );
};

export default RestaurantScreen;
