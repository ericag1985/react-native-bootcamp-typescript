import { FC, useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { Countdown } from "@components/countdown";
import { RoundedButton } from "@components/rounded-button";
import { Timing } from "@features/timing";
import { spacing } from "@utils/sizes";
import { colors } from "@utils/colors";

interface TimerProps {
  focusSubject: string;
  onTimerEnd: (subject: string) => void;
  clearSubject: () => void;
}

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer: FC<TimerProps> = ({
  focusSubject,
  onTimerEnd,
  clearSubject,
}) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset: () => void) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View style={styles.indicationContainer}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <ProgressBar
          color={colors.progressBar}
          style={styles.progressBar}
          progress={progress}
        />
      </View>

      <View style={styles.timingContainer}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonContainer}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>

      <View style={styles.clearSubjectContainer}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  indicationContainer: {
    paddingTop: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontWeight: 700,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
  progressBarContainer: {
    paddingTop: spacing.sm,
  },
  progressBar: {
    height: spacing.sm,
  },
  timingContainer: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubjectContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
