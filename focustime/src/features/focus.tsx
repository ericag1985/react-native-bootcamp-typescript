import { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "@components/rounded-button";
import { spacing } from "@utils/sizes";

interface FocusProps {
  addSubject: (subject: string) => void;
}

export const Focus: FC<FocusProps> = ({ addSubject }) => {
  const [subject, setSubject] = useState("");

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
