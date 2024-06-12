import {
  TouchableOpacity,
  Text,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { colors } from "@utils/colors";
import { FC } from "react";

interface RoundedButtonProps extends TouchableOpacityProps {
  customStyles?: ViewStyle;
  textStyle?: TextStyle;
  size?: number;
  title?: string;
}

export const RoundedButton: FC<RoundedButtonProps> = ({
  customStyles = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  const dynamicStyles = getDynamicStyles(size);

  return (
    <TouchableOpacity
      style={[dynamicStyles.radius, styles.button, customStyles]}
      onPress={props.onPress}
    >
      <Text style={[dynamicStyles.text, styles.text, textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const getDynamicStyles = (size: number) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
  },
  text: {
    fontSize: size / 3,
  },
});

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
  },
});
