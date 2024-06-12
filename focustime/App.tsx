import { FC, useState } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { colors } from "@utils/colors";
import { Focus } from "@features/focus";
import { Timer } from "@features/timer";
import { FocusHistory } from "@features/focus-history";

const App: FC = () => {
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory focusHistory={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject: string) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkPurple,
  },
});
