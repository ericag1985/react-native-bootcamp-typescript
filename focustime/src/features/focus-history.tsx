import { FC } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { colors } from "@utils/colors";
import { fontSizes, spacing } from "@utils/sizes";

interface FocusHistoryProps {
  focusHistory: string[];
}

interface ItemProps {
  item: string;
}

export const FocusHistory: FC<FocusHistoryProps> = ({ focusHistory }) => {
  if (!focusHistory || !focusHistory.length)
    return <Text style={styles.title}>There is no focus history yet.</Text>;

  const item = ({ item }: ItemProps) => (
    <Text style={styles.item}>- {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus Subject History</Text>
      <FlatList data={focusHistory} renderItem={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 700,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
  },
});
